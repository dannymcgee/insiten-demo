import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ViewMode {
	Grid,
	Table
}

export enum SortMode {
	Ascending = 1,
	Descending = -1
}

export type SortType =
	| 'name'
	| 'status'
	| 'assets'
	| 'debt'
	| 'revenue'
	| 'ebitda'
	| 'mc';

@Injectable({
	providedIn: 'root'
})
export class StateManager {
	viewMode = new BehaviorSubject<ViewMode>(ViewMode.Grid);
	sortType = new BehaviorSubject<SortType>('name');
	sortMode = new BehaviorSubject<SortMode>(SortMode.Ascending);
}
