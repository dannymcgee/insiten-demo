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
}
