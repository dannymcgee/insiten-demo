import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Company } from 'src/app/targets/target.model';
import companies from './../../data/companies';

@Component({
	selector: 'app-target-list',
	templateUrl: './target-list.component.html',
	styleUrls: ['./target-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TargetListComponent implements OnInit {
	targets: Company[];
	// FIXME: Placeholder; use a service to get the state from app-toolbar
	viewMode = 'list';

	constructor() {}

	ngOnInit() {
		this.targets = companies;
	}
}
