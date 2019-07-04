import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
	@Input() label: string;
	@Input() id: string;
	@Input() form: FormGroup;
	control: FormControl;

	@HostBinding('class.checkbox') _ = true;
	@HostBinding('class.checkbox--checked') isChecked = false;
	@HostBinding('class.checkbox--focus') isFocused = false;

	constructor() {}

	ngOnInit() {
		this.control = new FormControl(null);
		this.form.addControl(this.id, this.control);
	}

	onChanged() {
		this.control.value ? (this.isChecked = true) : (this.isChecked = false);
	}

	onFocus() {
		this.isFocused = true;
	}

	onBlur() {
		this.isFocused = false;
	}
}
