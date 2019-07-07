import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/data/data-manager.service';

@Component({
	selector: 'app-target-details',
	templateUrl: './target-details.component.html',
	styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit {
	@Input() company: Company;

	constructor() {}

	ngOnInit() {}
}
