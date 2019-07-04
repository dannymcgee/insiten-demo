import { Component, OnInit } from '@angular/core';
import { ViewMode } from 'src/app/state-manager.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	// TODO: Move this into a service
	eViewMode = ViewMode;
	viewMode = ViewMode.Grid;

	constructor() {}

	ngOnInit() {}

	onViewModeSet(viewMode: ViewMode) {
		this.viewMode = viewMode;
	}
}
