import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ViewMode {
	Grid,
	Table
}

@Injectable({
	providedIn: 'root'
})
export class StateManager {
	viewMode = new BehaviorSubject<ViewMode>(ViewMode.Grid);
}
