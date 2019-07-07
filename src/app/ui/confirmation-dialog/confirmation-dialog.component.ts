import {
	Component,
	OnInit,
	Input,
	HostBinding,
	ElementRef,
	ViewChild,
	Renderer2
} from '@angular/core';
import { StateManager } from 'src/app/targets/state-manager.service';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
	@Input() message: string;

	@ViewChild('dialog', { static: false }) dialog: ElementRef;
	@HostBinding('class.animate') _ = true;
	@HostBinding('class.animate--fade-in') isOpening = true;
	@HostBinding('class.animate--fade-out') isClosing = false;

	constructor(
		private stateManager: StateManager,
		private renderer: Renderer2
	) {}

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

	cancel() {
		this.fadeOut(() => {
			this.stateManager.confirmationResponse.next(false);
		});
	}

	confirm() {
		this.fadeOut(() => {
			this.stateManager.confirmationResponse.next(true);
		});
	}
}
