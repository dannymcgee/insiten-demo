import {
	Component,
	OnInit,
	Input,
	HostBinding,
	HostListener
} from '@angular/core';
import { Company, DataManager } from '@data/data-manager.service';
import { statusMap } from '@data/status.model';
import { StateManager } from '@targets/state-manager.service';

interface FinanceMetric {
	formatted: string;
	diff: {
		content: string | null
		sign: 'positive' | 'negative'
	};
}

@Component({
	selector: 'app-target-table-row',
	templateUrl: './target-table-row.component.html',
	styleUrls: ['./target-table-row.component.scss']
})
export class TargetTableRowComponent implements OnInit {
	@Input() company: Company;
	status: { key: string; description: string; icon: string };
	metricKeys: string[];
	metrics: FinanceMetric[] = [];

	@HostBinding('class.targets-table__row') _ = true;

	constructor(
		private dataManager: DataManager,
		private stateManager: StateManager
	) {}

	ngOnInit() {
		this.status = statusMap[this.company.status];
		this.metricKeys = this.dataManager.getMetricKeys();
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

	@HostListener('click') onClick() {
		this.stateManager.activeTarget.next(this.company);
	}
}
