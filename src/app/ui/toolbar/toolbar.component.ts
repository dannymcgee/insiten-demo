import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ViewMode, StateManager } from 'src/app/targets/state-manager.service';
import {
	DataManager,
	createFilterConfig
} from 'src/app/data/data-manager.service';
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
	filterQueryCheckboxes = [
		{ label: 'Name', id: 'filterFieldName', defaultValue: true },
		{ label: 'URL', id: 'filterFieldUrl' },
		{ label: 'Description', id: 'filterFieldDescription' },
		{ label: 'Contacts', id: 'filterFieldContacts' }
	];
	filterForm: FormGroup;
	filterFormSub: Subscription;
	filterConfig = createFilterConfig();
	filterFormIsInitialized = false;

	constructor(
		public stateManager: StateManager,
		public dataManager: DataManager
	) {}

	ngOnInit() {
		this.viewModeSub = this.stateManager.viewMode.subscribe(viewMode =>
			this.onViewModeChange(viewMode)
		);
		this.filterForm = new FormGroup({});
		this.filterFormSub = this.filterForm.valueChanges.subscribe(values => {
			this.checkFormInitializationStatus(values);
			if (this.filterFormIsInitialized) {
				this.onFilterFormUpdate(values);
			}
		});
	}

	checkFormInitializationStatus(values: any) {
		if (
			values.filterFieldContacts === false &&
			values.filterFieldDescription === false &&
			values.filterFieldName === true &&
			values.filterFieldUrl === false &&
			values.filterPublic !== undefined &&
			values.filterQuery !== undefined &&
			values.filterStatus !== undefined &&
			values.filterStatus.key === 'researching' &&
			values.filterStatus.value === 'Researching' &&
			values.filterStatusToggle !== undefined
		) {
			this.filterFormIsInitialized = true;
		}
	}

	onFilterFormUpdate(values: any) {
		const term = values.filterQuery;
		const fields = this.filterConfig.query.fields;

		for (const checkbox of this.filterQueryCheckboxes) {
			const key = checkbox.label.toLowerCase();
			const value = values[checkbox.id];

			if (value === true) {
				fields.add(key);
			} else {
				fields.delete(key);
			}
		}
		this.filterConfig.query = { term, fields };
		this.filterConfig.isPublic = values.filterPublic;
		this.filterConfig.statusFilter = {
			comparison: values.filterStatusToggle,
			value: values.filterStatus ? values.filterStatus.value : null
		};

		this.dataManager.filter(this.filterConfig);
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
