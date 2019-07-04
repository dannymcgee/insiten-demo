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

	filterForText(text: string, fields: Set<string>) {
		const filteredCompanies = this._companies.filter(company => {
			let query = text.replace(/[^-_a-zA-Z0-9&,;. ]/g, '');
			query = query.replace(/\./, '\\.');
			const pattern = new RegExp(query, 'gi');

			if (fields.has('name')) {
				if (pattern.test(company.name)) {
					return true;
				}
			}

			if (fields.has('url')) {
				if (pattern.test(company.url)) {
					return true;
				}
			}

			if (fields.has('description')) {
				if (pattern.test(company.description)) {
					return true;
				}
			}

			if (fields.has('contacts')) {
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
		});

		this._companiesSubject.next(filteredCompanies);
	}
}
