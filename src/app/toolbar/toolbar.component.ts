import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewMode, StateManager } from 'src/app/state-manager.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
	eViewMode = ViewMode;
	viewMode: ViewMode;
	viewModeSub: Subscription;

	constructor(public stateManager: StateManager) {}

	ngOnInit() {
		this.viewModeSub = this.stateManager.viewMode.subscribe(viewMode =>
			this.onViewModeChange(viewMode)
		);
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
