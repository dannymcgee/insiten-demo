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
}
