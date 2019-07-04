import { Component, OnInit, Input } from '@angular/core';
import { DataManager, Company } from 'src/app/data/data-manager.service';
import { Status, statusMap } from '../../data/status.model';

@Component({
	selector: 'app-target-card',
	templateUrl: './target-card.component.html',
	styleUrls: ['./target-card.component.scss']
})
export class TargetCardComponent implements OnInit {
	@Input() company: Company;
	eStatus: Status;
	status: { key: string; description: string; icon: string };

	constructor(public dataManager: DataManager) {}

	ngOnInit() {
		this.status = statusMap[this.company.status];
	}

	onTestEdit() {
		this.dataManager.edit(this.company, {
			name: 'Test Edit'
		});
	}
}
