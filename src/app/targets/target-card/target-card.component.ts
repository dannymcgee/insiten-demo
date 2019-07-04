import { Component, OnInit, Input } from '@angular/core';
import { Company } from './../target.model';

@Component({
	selector: 'app-target-card',
	templateUrl: './target-card.component.html',
	styleUrls: ['./target-card.component.scss']
})
export class TargetCardComponent implements OnInit {
	@Input() company: Company;

	constructor() {}

	ngOnInit() {}
}
