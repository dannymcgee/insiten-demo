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
	key: string;
	value: string | number | null;
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
	@Input() host: any;
	@Input() onChangeFn: (option: Option, host?: any) => void;
	control: FormControl;
	currentValue: Option;

	className = 'select';
	@Input() inputClass: string;
	@HostBinding('class') get hostClasses(): string {
		const baseClasses = [this.className, this.inputClass];
		const modifiers = [];
		if (this.control.value) {
			modifiers.push(this.className + `--${this.control.value.key}`);
			modifiers.push(this.inputClass + `--${this.control.value.key}`);
		}
		const classes = baseClasses.concat(modifiers);
		return classes.join(' ');
	}

	@ViewChild('dropdown', { static: false }) dropdown: DropdownComponent;

	constructor() {}

	ngOnInit() {
		this.control = new FormControl(null);
		this.form.addControl(this.id, this.control);

		const defaultValue = this.defaultValue || { key: '_', value: null };
		this.control.setValue(defaultValue);
		this.currentValue = defaultValue;
	}

	onOptionSelect(option: any) {
		if (typeof this.onChangeFn === 'function') {
			this.onChangeFn(option, this.host);
		}

		this.control.setValue(option);
		this.currentValue = option;

		if (this.dropdown) {
			this.dropdown.close();
		}
	}
}
