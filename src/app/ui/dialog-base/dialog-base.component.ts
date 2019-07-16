import {
	Component,
	OnInit,
	ElementRef,
	ViewChild,
	HostBinding,
	Renderer2
} from '@angular/core';
import { StateManager } from '@targets/state-manager.service';

@Component({
	selector: 'app-dialog-base',
	templateUrl: './dialog-base.component.html',
	styleUrls: ['./dialog-base.component.scss']
})
export class DialogBaseComponent implements OnInit {
	@ViewChild('dialog', { static: false }) dialog: ElementRef;
	@HostBinding('class.animate') _ = true;
	@HostBinding('class.animate--fade-in') isOpening = true;
	@HostBinding('class.animate--fade-out') isClosing = false;

	constructor(public stateManager: StateManager, public renderer: Renderer2) {}

	ngOnInit() {
		window.setTimeout(() => {
			this.isOpening = false;
		}, 300);
	}

	fadeOut(callback: () => void) {
		this.isClosing = true;
		this.renderer.removeClass(this.dialog.nativeElement, 'animate--fade-in-up');
		this.renderer.addClass(this.dialog.nativeElement, 'animate--fast');
		this.renderer.addClass(this.dialog.nativeElement, 'animate--fade-out-down');

		window.setTimeout(() => {
			callback();
		}, 300);
	}
}
