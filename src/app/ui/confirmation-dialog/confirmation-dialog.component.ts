import {
	Component,
	OnInit,
	Input,
	Renderer2
} from '@angular/core';
import { StateManager } from '@targets/state-manager.service';
import { DialogBaseComponent } from '@ui/dialog-base/dialog-base.component';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent extends DialogBaseComponent
	implements OnInit {
	@Input() message: string;
	@Input() style: string;

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
