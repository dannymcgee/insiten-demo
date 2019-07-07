import {
	Component,
	OnInit,
	ViewEncapsulation,
	OnDestroy,
	HostBinding,
	Renderer2
} from '@angular/core';
import {
	ViewMode,
	StateManager,
	SortType,
	SortMode
} from 'src/app/targets/state-manager.service';
import { Company, DataManager } from 'src/app/data/data-manager.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-targets',
	templateUrl: './targets.component.html',
	styleUrls: ['./targets.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TargetsComponent implements OnInit, OnDestroy {
	targets: Company[];
	targetsSub: Subscription;

	activeTarget: Company;
	activeTargetSub: Subscription;

	eViewMode = ViewMode;
	viewMode: ViewMode;
	viewModeSub: Subscription;

	sortType: SortType;
	sortMode: SortMode;
	sortTypeSub: Subscription;
	sortModeSub: Subscription;

	@HostBinding('class.targets') _ = true;

	constructor(
		public stateManager: StateManager,
		public dataManager: DataManager,
		private renderer: Renderer2
	) {}

	ngOnInit() {
		this.targetsSub = this.dataManager.companies.subscribe(companies => {
			this.targets = companies;
		});

		this.activeTargetSub = this.stateManager.activeTarget.subscribe(company => {
			this.onActiveTargetChange(company);
		});

		this.viewModeSub = this.stateManager.viewMode.subscribe(viewMode =>
			this.onViewModeChange(viewMode)
		);

		this.sortTypeSub = this.stateManager.sortType.subscribe(sortType => {
			this.sortType = sortType;
			this.onSortingChange();
		});

		this.sortModeSub = this.stateManager.sortMode.subscribe(sortMode => {
			this.sortMode = sortMode;
			this.onSortingChange();
		});
	}

	onViewModeChange(viewMode: ViewMode) {
		this.viewMode = viewMode;
	}

	onSortingChange() {
		if (this.sortType && this.sortMode) {
			this.dataManager.sort(this.sortType, this.sortMode);
		}
	}

	onActiveTargetChange(target: Company) {
		this.activeTarget = target;

		if (this.activeTarget != null) {
			this.renderer.addClass(document.body, 'modal-open');
		} else {
			this.renderer.removeClass(document.body, 'modal-open');
		}
	}

	ngOnDestroy() {
		this.targetsSub.unsubscribe();
		this.activeTargetSub.unsubscribe();
		this.viewModeSub.unsubscribe();
		this.sortTypeSub.unsubscribe();
		this.sortModeSub.unsubscribe();
	}
}
