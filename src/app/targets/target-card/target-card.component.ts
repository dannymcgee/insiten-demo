import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/data/data-manager.service';

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
