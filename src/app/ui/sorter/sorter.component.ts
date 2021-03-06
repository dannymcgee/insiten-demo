import {
	Component,
	Input,
	OnInit,
	OnDestroy,
	HostBinding,
	HostListener,
	ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
	StateManager,
	SortType,
	SortMode
} from '@targets/state-manager.service';

@Component({
	selector: 'app-sorter',
	templateUrl: './sorter.component.html',
	styleUrls: ['./sorter.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SorterComponent implements OnInit, OnDestroy {
	@Input() sortType: SortType;
	sortMode: SortMode;
	icon: string;

	sortTypeSub: Subscription;
	sortModeSub: Subscription;

	@HostBinding('class.sorter') _ = true;
	@HostBinding('class.sorter--active') isActive = false;

	constructor(private stateManager: StateManager) {}

	ngOnInit() {
		this.sortTypeSub = this.stateManager.sortType.subscribe(sortType => {
			this.handleSortTypeChange(sortType);
		});
		this.sortModeSub = this.stateManager.sortMode.subscribe(sortMode => {
			this.handleSortModeChange(sortMode);
		});
	}

	@HostListener('click') onClick() {
		if (this.isActive) {
			this.toggleSortMode();
		} else {
			this.stateManager.sortType.next(this.sortType);
		}
	}

	handleSortTypeChange(sortType: SortType) {
		if (typeof sortType === 'string') {
			if (sortType === this.sortType) {
				this.isActive = true;
			} else {
				this.isActive = false;
			}
		}

		if (sortType instanceof Object) {
			if (
				this.sortType instanceof Object &&
				sortType.metric === this.sortType.metric &&
				sortType.sortByDelta === this.sortType.sortByDelta
			) {
				this.isActive = true;
			} else {
				this.isActive = false;
			}
		}
	}

	handleSortModeChange(sortMode: SortMode) {
		this.sortMode = sortMode;

		if (this.sortMode === SortMode.Ascending) {
			this.icon = 'sort-up';
		} else if (this.sortMode === SortMode.Descending) {
			this.icon = 'sort-down';
		}
	}

	toggleSortMode() {
		if (this.sortMode === SortMode.Ascending) {
			this.stateManager.sortMode.next(SortMode.Descending);
		} else if (this.sortMode === SortMode.Descending) {
			this.stateManager.sortMode.next(SortMode.Ascending);
		}
	}

	ngOnDestroy() {
		this.sortTypeSub.unsubscribe();
		this.sortModeSub.unsubscribe();
	}
}
