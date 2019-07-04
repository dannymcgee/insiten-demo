import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.dropdown') _ = true;
	@HostBinding('class.dropdown--open') isOpen = false;

	@HostListener('click', ['$event.target'])
	toggleOpen(target: HTMLElement) {
		if (target.classList.contains('dropdown__toggle')) {
			this.isOpen = !this.isOpen;
		}
	}

	@HostListener('document:click', ['$event.target'])
	onDocumentClick(target: HTMLElement) {
		let isDropdown = false;

		target.classList.forEach(className => {
			if (/dropdown/g.test(className)) {
				isDropdown = true;
			}
		});

		if (!isDropdown) {
			this.isOpen = false;
		}
	}
}
