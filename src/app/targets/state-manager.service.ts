import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Company } from 'src/app/data/data-manager.service';

export enum ViewMode {
	Grid,
	Table
}

export enum SortMode {
	Ascending = 1,
	Descending = -1
}

type MetricType = 'assets' | 'debt' | 'revenue' | 'ebitda' | 'mc';

export interface MetricSortType {
	metric: MetricType;
	sortByDelta: boolean;
}

export type SortType = 'name' | 'status' | MetricSortType;

@Injectable({
	providedIn: 'root'
})
export class StateManager {
	viewMode = new BehaviorSubject<ViewMode>(ViewMode.Grid);
	sortType = new BehaviorSubject<SortType>('name');
	sortMode = new BehaviorSubject<SortMode>(SortMode.Ascending);
	activeTarget = new Subject<Company>();
	confirmation = new Subject<string>();
	confirmationResponse = new Subject<boolean>();

	confirm(message: string): Promise<boolean> {
		this.confirmation.next(message);

		return new Promise((resolve, reject) => {
			this.confirmationResponse.subscribe(response => {
				this.confirmation.next(null);
				resolve(response);
			});
		});
	}
}
