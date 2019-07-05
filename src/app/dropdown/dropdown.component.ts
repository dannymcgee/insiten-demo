import {
	Component,
	OnInit,
	HostBinding,
	Input,
	ElementRef,
	HostListener,
	ViewChild
} from '@angular/core';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
	@Input() label: string;
	@Input() icon: string;
	isOpen = false;

	className = 'dropdown';
	@Input() inputClass: string;
	@HostBinding('class')
	get toggleOpenClass(): string {
		let classList = [this.className, this.inputClass];
		if (this.isOpen) {
			classList = classList.concat([
				`${this.className}--open`,
				`${this.inputClass}--open`
			]);
		}
		return classList.join(' ');
	}

	constructor(private elementRef: ElementRef) {}

	toggle() {
		this.isOpen = !this.isOpen;
	}

	close() {
		this.isOpen = false;
	}

	@HostListener('document:click', ['$event.target'])
	onDocumentClick(target: HTMLElement) {
		if (!this.elementRef.nativeElement.contains(target)) {
			this.close();
		}
	}

	ngOnInit() {}
}
