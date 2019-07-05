import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Option {
	[key: string]: string | null;
}
interface OptionFormatted {
	key: string;
	value: string | null;
}

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
	@Input() label: string;
	@Input() id: string;
	@Input() baseClass: string;
	@Input() form: FormGroup;
	@Input() options: Option[];
	@Input() defaultValue: Option;
	@Input() onChangeFn: ($event: any) => void;
	control: FormControl;
	optionsFormatted: OptionFormatted[] = [];
	currentValue: OptionFormatted;

	@HostBinding('class.select') _ = true;

	constructor() {}

	ngOnInit() {
		this.control = new FormControl(null);
		this.form.addControl(this.id, this.control);

		const defaultValue = this.defaultValue || { _: null };
		this.control.setValue(defaultValue);
		this.initFormattedValues(this.options, this.control.value);
	}

	onSetValue(key: string, value: string | null) {
		const option = {};
		option[key] = value;

		this.control.setValue(option);
		this.currentValue = this.formatOption(option);

		if (typeof this.onChangeFn === 'function') {
			this.onChangeFn(option);
		}
	}

	initFormattedValues(options: Option[], defaultOption: Option) {
		const toFormat = options.slice();
		const formatted: OptionFormatted[] = [];

		toFormat.push(defaultOption);

		for (const option of toFormat) {
			formatted.push(this.formatOption(option));
		}

		this.currentValue = formatted.pop();
		this.optionsFormatted = formatted;
	}

	formatOption(option: Option): OptionFormatted {
		let optionFormatted: OptionFormatted;
		const keys = Object.keys(option);
		for (const key of keys) {
			optionFormatted = {
				key,
				value: option[key]
			};
		}
		return optionFormatted;
	}
}
