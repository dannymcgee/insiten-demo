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
	isLocked = true;

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

	async onEditSaveClick() {
		if (this.isLocked) {
			this.isLocked = false;
		} else {
			if (await this.stateManager.confirm('Commit your changes?')) {
				// TODO: Edit the target
				this.isLocked = true;
			}
		}
	}

	async onCloseClick() {
		if (!this.isLocked) {
			if (
				await this.stateManager.confirm(
					'Are you sure you want to close this target? Any unsaved changes will be lost!',
					'warning'
				)
			) {
				this.close();
			}
		} else {
			this.close();
		}
	}

	async onDiscardClick() {
		if (
			await this.stateManager.confirm(
				'Are you sure you want to discard your changes?',
				'warning'
			)
		) {
			// TODO: Discard changes
			this.isLocked = true;
		}
	}

	async onDeleteClick() {
		if (
			await this.stateManager.confirm(
				'Are you sure you want to DELETE this target? This action cannot be undone!',
				'danger'
			)
		) {
			// TODO: Delete the target
			this.close();
		}
	}

	close() {
		this.fadeOut(() => {
			this.stateManager.activeTarget.next(null);
		});
	}

	fadeOut(callback: () => void) {
		this.renderer.removeClass(this.dialog.nativeElement, 'animate--slow');
		super.fadeOut(callback);
	}
}
