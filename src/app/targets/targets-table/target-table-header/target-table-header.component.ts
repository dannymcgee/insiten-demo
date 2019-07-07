import { Component, OnInit, HostBinding } from '@angular/core';
import { DataManager, metricsMap } from 'src/app/data/data-manager.service';

@Component({
	selector: 'app-target-table-header',
	templateUrl: './target-table-header.component.html',
	styleUrls: ['./target-table-header.component.scss']
})
export class TargetTableHeaderComponent implements OnInit {
	@HostBinding('class.targets-table__header') _ = true;
	metricsMap = metricsMap;
	metricKeys: string[];

	constructor(private dataManager: DataManager) {}

	ngOnInit() {
		this.metricKeys = this.dataManager.getMetricKeys();
	}
}
