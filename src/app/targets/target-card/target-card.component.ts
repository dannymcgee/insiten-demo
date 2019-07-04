import { Component, OnInit, Input } from '@angular/core';
import { DataManager, Company } from 'src/app/data/data-manager.service';

@Component({
	selector: 'app-target-card',
	templateUrl: './target-card.component.html',
	styleUrls: ['./target-card.component.scss']
})
export class TargetCardComponent implements OnInit {
	@Input() company: Company;

	constructor(public dataManager: DataManager) {}

	ngOnInit() {}

	onTestEdit() {
		this.dataManager.edit(this.company, {
			name: 'Test Edit'
		});
	}
}
