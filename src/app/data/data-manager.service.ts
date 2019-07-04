import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Status } from './status.enum';
import companies from './companies';

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

interface Query {
	term: string | null;
	fields: Set<string>;
}

export interface FilterConfig {
	query: Query;
	isPublic: boolean | null;
}

export function createFilterConfig(
	query?: Query,
	isPublic?: boolean | null
): FilterConfig {
	return {
		query: query || {
			term: null,
			fields: new Set()
		},
		isPublic: isPublic || null
	};
}

@Injectable({
	providedIn: 'root'
})
export class DataManager {
	private _companies = companies.slice();
	private _companiesSubject = new BehaviorSubject<Company[]>(companies);

	get companies() {
		return this._companiesSubject;
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
			if (config.isPublic !== null) {
				if ((company.isPublic === config.isPublic) === false) {
					return false;
				}
			}
			if (config.query.term) {
				return this.filterByQuery(config.query, company);
			}
			return true;
		});

		this._companiesSubject.next(filteredCompanies);
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
}
