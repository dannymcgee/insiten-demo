import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
	selector: 'app-target-table-header',
	templateUrl: './target-table-header.component.html',
	styleUrls: ['./target-table-header.component.scss']
})
export class TargetTableHeaderComponent implements OnInit {
	@HostBinding('class.targets-table__header') _ = true;

	constructor() {}

	ngOnInit() {}
}
