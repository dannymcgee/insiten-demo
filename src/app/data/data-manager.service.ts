import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Status } from './status.model';
import data from './companies';
import {
	SortType,
	SortMode,
	MetricSortType,
	StateManager
} from 'src/app/targets/state-manager.service';

export interface Contact {
	name: {
		first: string
		last: string
	};
	position: string;
	phone: string;
	email: string;
}

export interface Financials {
	key: number;
	metrics: {
		assets: number
		debt: number
		revenue: number
		ebitda: number
		mc?: number
	};
}

export interface Company {
	id: string;
	name: string;
	url: string;
	description: string;
	isPublic: boolean;
	contacts: Contact[];
	financials: Financials[];
	status: Status;
}

export const metricsMap = {
	assets: { label: 'Assets' },
	debt: { label: 'Debt' },
	revenue: { label: 'Revenue' },
	ebitda: { label: 'EBITDA' },
	mc: { label: 'Market Capital' }
};

interface Query {
	term: string | null;
	fields: Set<string>;
}

interface StatusFilter {
	comparison: boolean | null;
	value: string;
}

export interface FilterConfig {
	query: Query;
	isPublic: boolean | null;
	statusFilter: StatusFilter;
}

export function createFilterConfig(
	query?: Query,
	isPublic?: boolean | null,
	statusFilter?: StatusFilter
): FilterConfig {
	return {
		query: query || {
			term: null,
			fields: new Set()
		},
		isPublic: isPublic || null,
		statusFilter: statusFilter || {
			comparison: null,
			value: ''
		}
	};
}

@Injectable({
	providedIn: 'root'
})
export class DataManager {
	constructor(private stateManager: StateManager) {}

	get companies() {
		return this._companiesSubject;
	}
	private _companies = data.slice();
	private _companiesSubject = new BehaviorSubject<Company[]>(data);
	lastSortType: SortType | MetricSortType;
	lastSortMode: SortMode;

	static formatNumberFull(value: number): string {
		if (!value) {
			return '0';
		}
		const valueArr = value.toString().split('');
		let valueStr = '';
		const length = valueArr.length;

		for (let i = length; i > 0; i--) {
			if (i % 3 === 0 && i !== length) {
				valueStr += ',';
			}
			valueStr += valueArr.shift();
		}

		return valueStr;
	}

	static formatNumberAbbrev(value: number): string {
		const valueArr = value.toString().split('');
		if (valueArr.length > 6) {
			valueArr.splice(-5);
			return valueArr.join('').replace(/(\d+)(\d)/, '$1.$2 M');
		}
		if (valueArr.length > 4) {
			valueArr.splice(-3);
			return valueArr.join('') + ' K';
		}
		return value.toString();
	}

	static getChangeOverLast(current: number, last: number): string {
		if (current === null || last === null) {
			return null;
		}
		const difference = current - last;
		const percent = Math.round((difference / last) * 100);
		const sign = difference < 0 ? '' : '+';

		return `(${sign}${percent}%)`;
	}

	getMetricKeys(): string[] {
		const metricKeys = Object.keys(this._companies[0].financials[0].metrics);
		if (metricKeys.indexOf('mc') === -1) {
			metricKeys.push('mc');
		}
		return metricKeys;
	}

	create() {
		// TODO: refactor
		const newCompany: Company = {
			id: this.generateID(),
			name: 'Lorem Ipsum Inc.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			url: 'loremipsum.com',
			isPublic: false,
			contacts: [
				{
					name: {
						first: Math.random() > 0.5 ? 'Jane' : 'John',
						last: 'Doe'
					},
					position: 'Position',
					phone: '(555) 555-5555',
					email: 'jdoe@loremipsum.com'
				}
			],
			financials: [
				{
					key: 2018,
					metrics: {
						assets: 0,
						debt: 0,
						revenue: 0,
						ebitda: 0
					}
				},
				{
					key: 2017,
					metrics: {
						assets: 0,
						debt: 0,
						revenue: 0,
						ebitda: 0
					}
				},
				{
					key: 2016,
					metrics: {
						assets: 0,
						debt: 0,
						revenue: 0,
						ebitda: 0
					}
				}
			],
			status: Status.Researching
		};

		this._companies.push(newCompany);
		this.sort(this.lastSortType, this.lastSortMode);
		this.stateManager.editMode.next(true);
		this.stateManager.activeTarget.next(newCompany);
	}

	private generateID(): string {
		const characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let id = '';
		for (let i = 0; i < 32; i++) {
			const index = Math.round(Math.max(0, Math.random() * 61));
			id += characters.charAt(index);
		}

		return id;
	}

	update(id: string, company: Company) {
		const index = this.companyIndexForId(id);
		if (index !== -1) {
			this._companies[index] = company;
			this.sort(this.lastSortType, this.lastSortMode);
		} else {
			throw new Error(`No company found with id '${id}'!`);
		}
	}

	delete(id: string) {
		const index = this.companyIndexForId(id);
		if (index !== -1) {
			this._companies.splice(index, 1);
			this._companiesSubject.next(this._companies);
		} else {
			throw new Error(`No company found with id '${id}'!`);
		}
	}

	private companyIndexForId(id: string): number {
		for (let i = 0; i < this._companies.length; i++) {
			if (this._companies[i].id === id) {
				return i;
			}
		}
		return -1;
	}

	filter(config: FilterConfig) {
		const filteredCompanies = this._companies.filter(company => {
			// public
			if (config.isPublic !== null) {
				if ((company.isPublic === config.isPublic) === false) {
					return false;
				}
			}
			// status
			if (config.statusFilter.comparison !== null) {
				const result = this.filterByStatus(config.statusFilter, company);
				if (result !== null) {
					return result;
				}
			}
			// query term
			if (config.query.term) {
				return this.filterByQuery(config.query, company);
			}
			return true;
		});

		this._companiesSubject.next(filteredCompanies);
	}

	private filterByStatus(
		config: StatusFilter,
		company: Company
	): boolean | null {
		const { comparison, value } = config;
		if (
			(company.status === Status[value] && comparison === false) ||
			(company.status !== Status[value] && comparison === true)
		) {
			return false;
		}
		return null;
	}

	private filterByQuery(query: Query, company: Company): boolean {
		let term = query.term.replace(/[^-_a-zA-Z0-9&,;. ]/g, '');
		term = term.replace(/\./, '\\.');
		const pattern = new RegExp(term, 'gi');

		if (query.fields.has('name')) {
			if (pattern.test(company.name)) {
				return true;
			}
		}

		if (query.fields.has('url')) {
			if (pattern.test(company.url)) {
				return true;
			}
		}

		if (query.fields.has('description')) {
			if (pattern.test(company.description)) {
				return true;
			}
		}

		if (query.fields.has('contacts')) {
			for (const contact of company.contacts) {
				if (
					pattern.test(contact.name.first) ||
					pattern.test(contact.name.last)
				) {
					return true;
				}
			}
		}

		return false;
	}

	sort(sortType: SortType, sortMode: SortMode) {
		this.lastSortType = sortType;
		this.lastSortMode = sortMode;

		const sortedCompanies = this._companies.slice();

		if (typeof sortType === 'string') {
			this.sortByNameOrStatus(sortedCompanies, sortType, sortMode);
		} else if (sortType instanceof Object) {
			this.sortByFinancialMetric(sortedCompanies, sortType, sortMode);
		} else {
			console.log(`Sort type '${sortType}' unknown!`);
		}

		this._companies = sortedCompanies;
		this._companiesSubject.next(sortedCompanies);
	}

	private sortByNameOrStatus(
		companies: Company[],
		type: 'name' | 'status',
		mode: SortMode
	) {
		companies.sort((a: Company, b: Company) => {
			if (a[type] > b[type]) {
				return mode;
			}
			if (a[type] < b[type]) {
				return mode * -1;
			}
			return 0;
		});
	}

	private sortByFinancialMetric(
		companies: Company[],
		type: MetricSortType,
		mode: SortMode
	) {
		companies.sort((a: Company, b: Company) => {
			const aMetric = a.financials[0].metrics[type.metric];
			const bMetric = b.financials[0].metrics[type.metric];

			// sort nulls to the bottom
			if (aMetric == null && bMetric == null) {
				return 0;
			}
			if (aMetric == null) {
				return 1;
			}
			if (bMetric == null) {
				return -1;
			}

			if (type.sortByDelta) {
				const aPrev = a.financials[1].metrics[type.metric];
				const bPrev = b.financials[1].metrics[type.metric];

				const aDelta = (aMetric - aPrev) / aPrev;
				const bDelta = (bMetric - bPrev) / bPrev;

				if (aDelta > bDelta) {
					return mode;
				}
				if (aDelta < bDelta) {
					return mode * -1;
				}

				return 0;
			}

			if (aMetric > bMetric) {
				return mode;
			}
			if (aMetric < bMetric) {
				return mode * -1;
			}
			return 0;
		});
	}
}
