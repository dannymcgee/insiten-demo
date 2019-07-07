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
import { DialogBaseComponent } from 'src/app/ui/dialog-base/dialog-base.component';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent extends DialogBaseComponent
	implements OnInit {
	@Input() message: string;

	constructor(public stateManager: StateManager, public renderer: Renderer2) {
		super(stateManager, renderer);
	}

	ngOnInit() {
		super.ngOnInit();
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
