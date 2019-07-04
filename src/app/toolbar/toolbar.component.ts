import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	// TODO: Move this into a service
	viewMode = 'grid';

	constructor() {}

	ngOnInit() {}

	onViewModeSet(viewMode: string) {
		this.viewMode = viewMode;
	}
}
