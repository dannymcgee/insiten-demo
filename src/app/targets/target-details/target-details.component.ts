import {
	Component,
	OnInit,
	Input,
	HostBinding,
	ViewChild,
	Renderer2,
	AfterViewInit,
	ElementRef
} from '@angular/core';
import {
	Company,
	Contact,
	metricsMap,
	DataManager
} from 'src/app/data/data-manager.service';
import { statusMap } from 'src/app/data/status.model';
import { StateManager } from 'src/app/targets/state-manager.service';

@Component({
	selector: 'app-target-details',
	templateUrl: './target-details.component.html',
	styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit, AfterViewInit {
	@Input() company: Company;
	status: { key: string; description: string; icon: string };
	sDataManager = DataManager;
	metricsMap = metricsMap;
	metricKeys: string[];
	locked = true;

	@ViewChild('dialog', { static: false }) dialog: ElementRef;
	@HostBinding('class.animate') _ = true;
	@HostBinding('class.animate--fade-in') isOpening = true;
	@HostBinding('class.animate--fade-out') isClosing = false;

	constructor(
		private dataManager: DataManager,
		private stateManager: StateManager,
		private renderer: Renderer2
	) {}

	ngOnInit() {
		this.status = statusMap[this.company.status];
		this.metricKeys = this.dataManager.getMetricKeys();

		window.setTimeout(() => {
			this.isOpening = false;
		}, 300);
	}

	ngAfterViewInit() {
		console.log('dialog type:', typeof this.dialog);
		console.log('dialog:', this.dialog);
	}

	getSearchLink(contact: Contact) {
		const companyNameArr = this.company.name.split(' ');
		const contactFNameArr = contact.name.first.split(' ');
		const contactLNameArr = contact.name.last.split(' ');
		const queryArr = companyNameArr.concat(contactFNameArr, contactLNameArr);
		const queryStr = queryArr.join('+');

		return `//google.com/search?q=${queryStr}`;
	}

	close() {
		this.fadeOut();
	}

	fadeOut() {
		this.isClosing = true;
		this.renderer.removeClass(this.dialog.nativeElement, 'animate--fade-in-up');
		this.renderer.removeClass(this.dialog.nativeElement, 'animate--slow');
		this.renderer.addClass(this.dialog.nativeElement, 'animate--fast');
		this.renderer.addClass(this.dialog.nativeElement, 'animate--fade-out-down');

		window.setTimeout(() => {
			this.stateManager.activeTarget.next(null);
		}, 300);
	}
}
