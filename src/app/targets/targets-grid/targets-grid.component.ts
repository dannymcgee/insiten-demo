import { Component, OnInit, Input } from '@angular/core';
import { Company } from '@data/data-manager.service';

@Component({
	selector: 'app-targets-grid',
	templateUrl: './targets-grid.component.html',
	styleUrls: ['./targets-grid.component.scss']
})
export class TargetsGridComponent implements OnInit {
	@Input() targets: Company[];

	constructor() {}

	ngOnInit() {}
}
