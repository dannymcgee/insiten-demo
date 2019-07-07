import {
	Component,
	OnInit,
	Input,
	HostBinding,
	ViewChild,
	Renderer2,
	ElementRef
} from '@angular/core';
import { DialogBaseComponent } from 'src/app/ui/dialog-base/dialog-base.component';
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
	templateUrl: './target-dialog.component.html',
	styleUrls: ['./target-dialog.component.scss']
})
export class TargetDialogComponent extends DialogBaseComponent
	implements OnInit {
	@Input() company: Company;
	status: { key: string; description: string; icon: string };
	sDataManager = DataManager;
	metricsMap = metricsMap;
	metricKeys: string[];
	locked = true;

	constructor(
		private dataManager: DataManager,
		public stateManager: StateManager,
		public renderer: Renderer2
	) {
		super(stateManager, renderer);
	}

	ngOnInit() {
		super.ngOnInit();
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

	async close() {
		if (await this.stateManager.confirm('Are you sure?')) {
			this.fadeOut(() => {
				this.stateManager.activeTarget.next(null);
			});
		}
	}

	fadeOut(callback: () => void) {
		this.renderer.removeClass(this.dialog.nativeElement, 'animate--slow');
		super.fadeOut(callback);
	}
}
