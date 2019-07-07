import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Status } from './status.model';
import data from './companies';
import { SortType, SortMode } from 'src/app/state-manager.service';

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
	get companies() {
		return this._companiesSubject;
	}
	private _companies = data.slice();
	private _companiesSubject = new BehaviorSubject<Company[]>(data);

	static formatNumberFull(value: number): string {
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

	edit(company: Company, newValues: object) {
		const index = this._companies.indexOf(company);
		const newCompany = {
			...company,
			...newValues
		};

		this._companies[index] = newCompany;
		this._companiesSubject.next(this._companies);
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
		const sortedCompanies = this._companies.slice();

		switch (sortType) {
			case 'name':
			case 'status':
				this.sortByNameOrStatus(sortedCompanies, sortType, sortMode);
				break;
			case 'assets':
			case 'debt':
			case 'revenue':
			case 'ebitda':
			case 'mc':
				this.sortByFinancialMetric(sortedCompanies, sortType, sortMode);
				break;
			default:
				console.log(`Sort type '${sortType}' unknown!`);
		}

		this._companies = sortedCompanies;
		this._companiesSubject.next(sortedCompanies);
	}

	private sortByNameOrStatus(
		companies: Company[],
		type: SortType,
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
		metric: SortType,
		mode: SortMode
	) {
		companies.sort((a: Company, b: Company) => {
			const aMetric = a.financials[0].metrics[metric];
			const bMetric = b.financials[0].metrics[metric];

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
