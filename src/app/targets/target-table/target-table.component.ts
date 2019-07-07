import { Component, OnInit, Input } from '@angular/core';
import { Company, DataManager } from 'src/app/data/data-manager.service';
import { statusMap } from '../../data/status.model';

interface FinanceMetric {
	formatted: string;
	diff: {
		content: string | null
		sign: 'positive' | 'negative'
	};
}

@Component({
	selector: 'app-target-table',
	templateUrl: './target-table.component.html',
	styleUrls: ['./target-table.component.scss']
})
export class TargetTableComponent implements OnInit {
	@Input() company: Company;
	status: { key: string; description: string; icon: string };
	metricKeys = ['assets', 'debt', 'revenue', 'ebitda', 'mc'];
	metrics: FinanceMetric[] = [];

	constructor(private dataManager: DataManager) {}

	ngOnInit() {
		this.status = statusMap[this.company.status];
		this.initMetrics();
	}

	initMetrics() {
		for (const key of this.metricKeys) {
			const currentValue = this.company.financials[0].metrics[key] || null;
			const formatted = currentValue
				? DataManager.formatNumberFull(currentValue)
				: `—`;

			const lastValue = this.company.financials[1].metrics[key] || null;
			const diffContent = DataManager.getChangeOverLast(currentValue, lastValue);
			const diffSign = /-/.test(diffContent) ? 'negative' : 'positive';

			this.metrics.push({
				formatted,
				diff: {
					content: diffContent,
					sign: diffSign
				}
			});
		}
	}
}
