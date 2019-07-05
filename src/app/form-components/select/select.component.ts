import {
	Component,
	OnInit,
	Input,
	HostBinding,
	ViewEncapsulation,
	ViewChild
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DropdownComponent } from './../../dropdown/dropdown.component';

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
	styleUrls: ['./select.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit {
	@Input() label: string;
	@Input() id: string;
	@Input() form: FormGroup;
	@Input() options: Option[];
	@Input() defaultValue: Option;
	@Input() onChangeFn: ($event: any) => void;
	control: FormControl;
	optionsFormatted: OptionFormatted[] = [];
	currentValue: OptionFormatted;

	className = 'select';
	@Input() inputClass: string;
	@HostBinding('class') get hostClasses(): string {
		return [this.className, this.inputClass].join(' ');
	}

	@ViewChild('dropdown', { static: false }) dropdown: DropdownComponent;

	constructor() {}

	ngOnInit() {
		this.control = new FormControl(null);
		this.form.addControl(this.id, this.control);

		const defaultValue = this.defaultValue || { _: null };
		this.control.setValue(defaultValue);
		this.initFormattedValues(this.options, this.control.value);
	}

	onOptionSelect(key: string, value: string | null) {
		const option = {};
		option[key] = value;

		this.control.setValue(option);
		this.currentValue = this.formatOption(option);

		if (typeof this.onChangeFn === 'function') {
			this.onChangeFn(option);
		}
		if (this.dropdown) {
			this.dropdown.close();
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
