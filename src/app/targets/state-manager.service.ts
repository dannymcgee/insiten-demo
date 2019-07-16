import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Company } from '@data/data-manager.service';

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
	editMode = new BehaviorSubject<boolean>(false);
	activeTarget = new Subject<Company>();
	confirmation = new Subject<{ message: string; style: string }>();
	confirmationResponse = new Subject<boolean>();

	confirm(message: string, style = 'info'): Promise<boolean> {
		this.confirmation.next({ message, style });

		return new Promise((resolve, reject) => {
			this.confirmationResponse.subscribe(response => {
				this.confirmation.next(null);
				resolve(response);
			});
		});
	}
}
