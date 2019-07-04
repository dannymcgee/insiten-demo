import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ViewMode, StateManager } from 'src/app/state-manager.service';
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

	constructor(
		public stateManager: StateManager,
		public dataManager: DataManager
	) {}

	ngOnInit() {
		this.targetsSub = this.dataManager.companies.subscribe(
			companies => (this.targets = companies)
		);

		this.viewModeSub = this.stateManager.viewMode.subscribe(viewMode =>
			this.onViewModeChange(viewMode)
		);
	}

	onViewModeChange(viewMode: ViewMode) {
		this.viewMode = viewMode;
	}

	ngOnDestroy() {
		this.viewModeSub.unsubscribe();
	}
}
