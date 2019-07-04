import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ViewMode, StateManager } from 'src/app/state-manager.service';
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
	filterForm: FormGroup;

	constructor(public stateManager: StateManager) {}

	ngOnInit() {
		this.viewModeSub = this.stateManager.viewMode.subscribe(viewMode =>
			this.onViewModeChange(viewMode)
		);
		this.filterForm = new FormGroup({});
	}

	onFilter($event: any) {
		console.log('Filtering!', $event.target.value);
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
