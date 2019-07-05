import {
	Component,
	OnInit,
	Input,
	HostBinding,
	ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

enum TernaryState {
	False = -1,
	Null = 0,
	True = 1
}

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {
	@Input() label: string;
	@Input() id: string;
	@Input() form: FormGroup;
	@Input() isTernary: boolean;
	@Input() defaultValue: boolean | null;
	@Input() onChangeFn: ($event: any) => void;
	control: FormControl;
	ternaryState = new Subject<TernaryState>();
	ternarySub: Subscription;
	ternaryStateLast: TernaryState;

	@Input() inputClass: string;
	@HostBinding('class.checkbox') _ = true;
	@HostBinding('class.checkbox--checked') isChecked = false;
	@HostBinding('class.checkbox--false') isNegative = false;
	@HostBinding('class.checkbox--focus') isFocused = false;

	constructor() {}

	ngOnInit() {
		this.control = new FormControl(null);
		this.form.addControl(this.id, this.control);
		this.ternarySub = this.ternaryState.subscribe(state =>
			this.updateTernaryValues(state)
		);

		this.initializeValue();
	}

	initializeValue() {
		if (this.isTernary) {
			switch (this.defaultValue) {
				case true:
					this.ternaryState.next(TernaryState.True);
					break;
				case false:
					this.ternaryState.next(TernaryState.False);
					break;
				default:
					this.ternaryState.next(TernaryState.Null);
			}
		} else {
			this.control.setValue(this.defaultValue || false);
			this.isChecked = this.control.value;
		}
	}

	onChanged($event: any) {
		this.toggleState($event);

		if (typeof this.onChangeFn === 'function') {
			this.onChangeFn($event);
		}
	}

	toggleState($event: any) {
		if (this.isTernary) {
			$event.preventDefault();
			if (this.ternaryStateLast === TernaryState.True) {
				this.ternaryState.next(TernaryState.False);
			} else {
				this.ternaryState.next(this.ternaryStateLast + 1);
			}
		} else {
			this.isChecked = this.control.value;
		}
	}

	updateTernaryValues(state: TernaryState) {
		this.ternaryStateLast = state;

		switch (state) {
			case TernaryState.True:
				this.control.setValue(true);
				this.isChecked = true;
				this.isNegative = false;
				break;
			case TernaryState.False:
				this.control.setValue(false);
				this.isChecked = false;
				this.isNegative = true;
				break;
			default:
				this.control.setValue(null);
				this.isChecked = false;
				this.isNegative = false;
		}
	}

	onFocus() {
		this.isFocused = true;
	}

	onBlur() {
		this.isFocused = false;
	}
}
