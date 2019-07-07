import {
	Component,
	OnInit,
	Input,
	ElementRef,
	ViewChild,
	AfterViewInit,
	ChangeDetectionStrategy,
	HostListener
} from '@angular/core';
import { DataManager, Company } from 'src/app/data/data-manager.service';
import { StateManager } from 'src/app/targets/state-manager.service';
import { Status, statusMap } from 'src/app/data/status.model';
import {
	Chart,
	ChartConfiguration,
	ChartTooltipItem,
	ChartData,
	ChartTooltipLabelColor
} from 'chart.js';
import { colors } from 'src/app/sass/lib/colors';
import hexToRgba from 'hex-to-rgba';

@Component({
	selector: 'app-target-card',
	templateUrl: './target-card.component.html',
	styleUrls: ['./target-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetCardComponent implements OnInit, AfterViewInit {
	@Input() company: Company;
	eStatus: Status;
	status: { key: string; description: string; icon: string };
	chart: Chart;
	@ViewChild('canvas', { static: false }) canvas: ElementRef;

	// Metrics data
	years: string[] = [];
	assetsSet: number[] = [];
	debtSet: number[] = [];
	revenueSet: number[] = [];
	mcSet: number[] = [];
	ebitdaSet: number[] = [];
	chartData: ChartConfiguration;

	constructor(
		public dataManager: DataManager,
		private stateManager: StateManager
	) {}

	ngOnInit() {
		this.status = statusMap[this.company.status];
		this.initChartData();
		this.chartData = this.createChartConfig();
	}

	ngAfterViewInit() {
		this.chart = new Chart(this.canvas.nativeElement, this.chartData);
	}

	@HostListener('click') onClick() {
		this.stateManager.activeTarget.next(this.company);
	}

	initChartData() {
		for (const financial of this.company.financials) {
			const { key, metrics } = financial;
			const { assets, debt, revenue, mc, ebitda } = metrics;

			this.years.unshift(key.toString());
			this.assetsSet.unshift(assets);
			this.debtSet.unshift(debt);
			this.revenueSet.unshift(revenue);
			this.ebitdaSet.unshift(ebitda);
			if (mc) {
				this.mcSet.unshift(mc);
			}
		}
	}

	createChartConfig(): ChartConfiguration {
		const datasets = [
			{
				label: 'Assets',
				data: this.assetsSet,
				borderColor: colors.blue,
				backgroundColor: colors.blue,
				fill: false
			},
			{
				label: 'Debt',
				data: this.debtSet,
				borderColor: colors.red,
				backgroundColor: colors.red,
				fill: false
			},
			{
				label: 'Revenue',
				data: this.revenueSet,
				borderColor: colors.cyan,
				backgroundColor: colors.cyan,
				fill: false
			},
			{
				label: 'EBITDA',
				data: this.ebitdaSet,
				borderColor: colors.green,
				backgroundColor: colors.green,
				fill: false
			}
		];

		if (this.mcSet.length) {
			datasets.push({
				label: 'Market Capital',
				data: this.mcSet,
				borderColor: colors.purple,
				backgroundColor: colors.purple,
				fill: false
			});
		}

		return {
			type: 'line',
			data: {
				labels: this.years,
				datasets
			},
			options: {
				legend: {
					display: false
				},
				tooltips: {
					intersect: false,
					mode: 'index',
					multiKeyBackground: colors.gray100,
					callbacks: {
						label: this.formatTooltipLabel,
						labelColor: this.formatTooltipLabelColor
					},
					backgroundColor: hexToRgba(colors.gray100, 0.85),
					titleFontFamily: `'Open Sans', sans-serif`,
					titleFontSize: 14,
					titleFontStyle: 'bold',
					titleFontColor: colors.gray900,
					bodyFontFamily: `'Open Sans', sans-serif`,
					bodyFontSize: 14,
					bodyFontColor: colors.gray700,
					bodySpacing: 4,
					xPadding: 12,
					yPadding: 12,
					cornerRadius: 0,
					position: 'nearest'
				},
				scales: {
					xAxes: [{ display: true }],
					yAxes: [
						{
							display: true,
							ticks: {
								callback: this.formatTick
							}
						}
					]
				}
			}
		};
	}

	formatTooltipLabel(tooltipItem: ChartTooltipItem, data: ChartData): string {
		const label = data.datasets[tooltipItem.datasetIndex].label;
		const { value } = tooltipItem;
		const valueFormatted = DataManager.formatNumberFull(+value);

		return `${label}: ${valueFormatted}`;
	}

	formatTooltipLabelColor(
		tooltipItem: ChartTooltipItem,
		chart: Chart
	): ChartTooltipLabelColor {
		const label = chart.config.data.datasets[tooltipItem.datasetIndex].label;
		switch (label) {
			case 'Assets':
				return {
					borderColor: null,
					backgroundColor: colors.blue
				};
			case 'Debt':
				return {
					borderColor: null,
					backgroundColor: colors.red
				};
			case 'Revenue':
				return {
					borderColor: null,
					backgroundColor: colors.cyan
				};
			case 'EBITDA':
				return {
					borderColor: null,
					backgroundColor: colors.green
				};
			case 'Market Capital':
				return {
					borderColor: null,
					backgroundColor: colors.purple
				};
			default:
				return null;
		}
	}

	formatTick(value: number): string {
		return DataManager.formatNumberAbbrev(value);
	}
}
