import { Injectable } from '@angular/core';

export enum ViewMode {
	Grid,
	Table
}

@Injectable({
	providedIn: 'root'
})
export class StateManager {
	constructor() {}
}
