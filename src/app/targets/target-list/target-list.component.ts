import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import {
	ViewMode,
	StateManager,
	SortType,
	SortMode
} from 'src/app/state-manager.service';
import { Company, DataManager } from 'src/app/data/data-manager.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-target-list',
	templateUrl: './target-list.component.html',
	styleUrls: ['./target-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TargetListComponent implements OnInit, OnDestroy {
	targets: Company[];
	targetsSub: Subscription;

	eViewMode = ViewMode;
	viewMode: ViewMode;
	viewModeSub: Subscription;

	sortType: SortType;
	sortMode: SortMode;
	sortTypeSub: Subscription;
	sortModeSub: Subscription;

	constructor(
		public stateManager: StateManager,
		public dataManager: DataManager
	) {}

	ngOnInit() {
		this.targetsSub = this.dataManager.companies.subscribe(companies => {
			this.targets = companies;
		});

		this.viewModeSub = this.stateManager.viewMode.subscribe(viewMode =>
			this.onViewModeChange(viewMode)
		);

		this.sortTypeSub = this.stateManager.sortType.subscribe(sortType => {
			this.sortType = sortType;

			if (this.sortType && this.sortMode) {
				this.dataManager.sort(this.sortType, this.sortMode);
			}
		});

		this.sortModeSub = this.stateManager.sortMode.subscribe(sortMode => {
			this.sortMode = sortMode;

			if (this.sortType && this.sortMode) {
				this.dataManager.sort(this.sortType, this.sortMode);
			}
		});
	}

	onViewModeChange(viewMode: ViewMode) {
		this.viewMode = viewMode;
	}

	ngOnDestroy() {
		this.targetsSub.unsubscribe();
		this.viewModeSub.unsubscribe();
		this.sortTypeSub.unsubscribe();
		this.sortModeSub.unsubscribe();
	}
}
