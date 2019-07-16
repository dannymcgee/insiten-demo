import {
	AfterViewInit,
	Component,
	OnInit,
	Input,
	HostBinding
} from '@angular/core';
import { ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataManager } from '@data/data-manager.service';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit, OnInit {
	@Input() label: string;
	@Input() id: string;
	@Input() inputClass: string;
	@Input() type: string;
	@Input() defaultValue: string;
	@Input() validators: ValidatorFn[];
	@Input() form: FormGroup;
	@Input() validationMessage: string;
	@Input() host: any;
	@Input() onChangeFn: ($event: any) => void;
	@Input() onKeydownFn: ($event: any, host?: any) => void;
	@Input() onInputFn: ($event: any, host?: any) => void;
	control: FormControl;

	isValid = true;
	@HostBinding('class.form-control') _ = true;
	@HostBinding('class.form-control--filled') isFilled = false;
	@HostBinding('class.form-control--focus') isFocused = false;

	constructor(public dataManager: DataManager) {}

	ngOnInit() {
		this.control = new FormControl(null, this.validators);
		if (this.defaultValue) {
			this.control.setValue(this.defaultValue);
		}
		this.form.addControl(this.id, this.control);

		if (this.validators && !this.validationMessage) {
			if (this.validators.indexOf(Validators.email) !== -1) {
				this.validationMessage = 'Please enter a valid email address';
			} else if (this.validators.indexOf(Validators.required) !== -1) {
				this.validationMessage = 'This field is required';
			}
		}
	}

	ngAfterViewInit() {
		window.setTimeout(() => {
			// Check for autofilled values
			if (this.control.value) {
				this.isFilled = true;
			}
		});
	}

	onChanged($event: any) {
		if (typeof this.onChangeFn === 'function') {
			this.onChangeFn($event);
		}
	}

	onKeydown($event: any) {
		if (typeof this.onKeydownFn === 'function') {
			this.onKeydownFn($event, this.host);
		}
	}

	onInput($event: any) {
		if (typeof this.onInputFn === 'function') {
			this.onInputFn($event, this.host);
		}
	}

	onFocus() {
		this.isFocused = true;
	}

	onBlur() {
		this.isFocused = false;
		this.control.value ? (this.isFilled = true) : (this.isFilled = false);

		if (this.control.touched) {
			this.isValid = this.control.valid;
		}
	}
}
