import { Component, OnInit, Input } from '@angular/core';
import {
	Company,
	Contact,
	metricsMap,
	DataManager
} from 'src/app/data/data-manager.service';
import { statusMap } from 'src/app/data/status.model';

@Component({
	selector: 'app-target-details',
	templateUrl: './target-details.component.html',
	styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit {
	@Input() company: Company;
	status: { key: string; description: string; icon: string };
	sDataManager = DataManager;
	metricsMap = metricsMap;
	metricKeys: string[];

	locked = true;

	constructor(public dataManager: DataManager) {}

	ngOnInit() {
		this.status = statusMap[this.company.status];
		this.metricKeys = this.dataManager.getMetricKeys();
	}

	getSearchLink(contact: Contact) {
		const companyNameArr = this.company.name.split(' ');
		const contactFNameArr = contact.name.first.split(' ');
		const contactLNameArr = contact.name.last.split(' ');
		const queryArr = companyNameArr.concat(contactFNameArr, contactLNameArr);
		const queryStr = queryArr.join('+');

		return `//google.com/search?q=${queryStr}`;
	}
}
