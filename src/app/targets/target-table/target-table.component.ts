import { Component, OnInit, Input } from '@angular/core';
import { Company } from './../target.model';

@Component({
	selector: 'app-target-table',
	templateUrl: './target-table.component.html',
	styleUrls: ['./target-table.component.scss']
})
export class TargetTableComponent implements OnInit {
	@Input() company: Company;

	constructor() {}

	ngOnInit() {}
}
