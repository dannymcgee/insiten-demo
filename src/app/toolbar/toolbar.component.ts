import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ViewMode, StateManager } from 'src/app/state-manager.service';
import { DataManager } from 'src/app/data/data-manager.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit, OnDestroy {
	eViewMode = ViewMode;
	viewMode: ViewMode;
	viewModeSub: Subscription;
	filterFormCheckboxes = [
		{ label: 'Name', id: 'filterFieldName', defaultValue: true },
		{ label: 'URL', id: 'filterFieldUrl' },
		{ label: 'Description', id: 'filterFieldDescription' },
		{ label: 'Contacts', id: 'filterFieldContacts' }
	];
	filterForm: FormGroup;
	filterQuery: string;
	filterFields: Set<string> = new Set();
	filterFormSub: Subscription;

	constructor(
		public stateManager: StateManager,
		public dataManager: DataManager
	) {}

	ngOnInit() {
		this.viewModeSub = this.stateManager.viewMode.subscribe(viewMode =>
			this.onViewModeChange(viewMode)
		);
		this.filterForm = new FormGroup({});
		this.filterFormSub = this.filterForm.valueChanges.subscribe(values =>
			this.onFilterFormUpdate(values)
		);
	}

	runFilter() {
		if (this.filterQuery != null) {
			this.dataManager.filterForText(this.filterQuery, this.filterFields);
		}
	}

	onFilterFormUpdate(values: any) {
		this.filterQuery = values.filterQuery;

		for (const checkbox of this.filterFormCheckboxes) {
			const key = checkbox.label.toLowerCase();
			const value = values[checkbox.id];

			if (value === true) {
				this.filterFields.add(key);
			} else {
				this.filterFields.delete(key);
			}
		}

		this.runFilter();
	}

	onViewModeChange(viewMode: ViewMode) {
		this.viewMode = viewMode;
	}

	onViewModeSet(viewMode: ViewMode) {
		this.stateManager.viewMode.next(viewMode);
	}

	ngOnDestroy() {
		this.viewModeSub.unsubscribe();
	}
}
