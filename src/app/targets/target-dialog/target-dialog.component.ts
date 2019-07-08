import { Component, OnInit, Input, HostBinding, Renderer2 } from '@angular/core';
import { DialogBaseComponent } from 'src/app/ui/dialog-base/dialog-base.component';
import {
	Company,
	Contact,
	metricsMap,
	DataManager
} from 'src/app/data/data-manager.service';
import { statusMap, Status } from 'src/app/data/status.model';
import { StateManager } from 'src/app/targets/state-manager.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-target-details',
	templateUrl: './target-dialog.component.html',
	styleUrls: ['./target-dialog.component.scss']
})
export class TargetDialogComponent extends DialogBaseComponent
	implements OnInit {
	@Input() company: Company;
	companyBackup: Company;
	statusMap = statusMap;
	sDataManager = DataManager;
	metricsMap = metricsMap;
	metricKeys: string[];
	form: FormGroup;
	self = this;
	validators = Validators;

	@HostBinding('class.target-dialog') _ = true;
	@HostBinding('class.target-dialog--locked') isLocked = true;
	@HostBinding('class.target-dialog--unlocked') isUnlocked = true;

	constructor(
		private dataManager: DataManager,
		public stateManager: StateManager,
		public renderer: Renderer2
	) {
		super(stateManager, renderer);
	}

	ngOnInit() {
		super.ngOnInit();
		this.metricKeys = this.dataManager.getMetricKeys();
		this.form = new FormGroup({});
	}

	getSearchLink(contact: Contact) {
		const companyNameArr = this.company.name.split(' ');
		const contactFNameArr = contact.name.first.split(' ');
		const contactLNameArr = contact.name.last.split(' ');
		const queryArr = companyNameArr.concat(contactFNameArr, contactLNameArr);
		const queryStr = queryArr.join('+');

		return `//google.com/search?q=${queryStr}`;
	}

	async onEditSaveClick() {
		if (this.isLocked) {
			this.cloneData();
			this.isLocked = false;
			this.isUnlocked = true;
		} else {
			if (await this.stateManager.confirm('Commit your changes?')) {
				this.saveChanges();
				this.isLocked = true;
				this.isUnlocked = false;
			}
		}
	}

	async onCloseClick() {
		if (!this.isLocked) {
			if (
				await this.stateManager.confirm(
					'Are you sure you want to close this target? Any unsaved changes will be lost!',
					'warning'
				)
			) {
				this.discardChanges();
				this.close();
			}
		} else {
			this.close();
		}
	}

	async onDiscardClick() {
		if (
			await this.stateManager.confirm(
				'Are you sure you want to discard your changes?',
				'warning'
			)
		) {
			this.discardChanges();
			this.isLocked = true;
			this.isUnlocked = false;
		}
	}

	async onDeleteClick() {
		if (
			await this.stateManager.confirm(
				'Are you sure you want to DELETE this target? This action cannot be undone!',
				'danger'
			)
		) {
			// TODO: Delete the target
			this.close();
		}
	}

	cloneData() {
		this.companyBackup = JSON.parse(JSON.stringify(this.company));
	}

	discardChanges() {
		this.company = this.companyBackup;
		this.companyBackup = null;
	}

	saveChanges() {
		const data = this.form.value;
		const updatedCompany: Company = {
			id: this.company.id,
			name: data.name,
			url: data.url,
			description: data.description,
			isPublic: data.public.key,
			contacts: [],
			financials: [],
			status: Status[data.status.value as string]
		};

		const keys = Object.keys(data);
		const contactKeys = keys.filter(key => /^contact/g.test(key));

		const contactsLength = contactKeys.length / 4;
		const contacts = new Array(contactsLength);
		for (let i = 0; i < contactsLength; i++) {
			const nameArr = data[`contact-name__${i}`].split(' ');
			const newContact = {
				name: {
					first: nameArr[0],
					last: nameArr[1]
				},
				position: data[`contact-position__${i}`],
				phone: data[`contact-phone__${i}`],
				email: data[`contact-email__${i}`]
			};
			contacts[i] = newContact;
		}
		updatedCompany.contacts = contacts;

		const financials = [];
		for (let y = 2018; y >= 2016; y--) {
			financials.push({
				key: y,
				metrics: {
					assets: +data[`metric__assets__${y}`].replace(/[^\d]/g, ''),
					debt: +data[`metric__debt__${y}`].replace(/[^\d]/g, ''),
					revenue: +data[`metric__revenue__${y}`].replace(/[^\d]/g, ''),
					ebitda: +data[`metric__ebitda__${y}`].replace(/[^\d]/g, '')
				}
			});
			if (data.public.key) {
				financials[financials.length - 1].metrics.mc = data[`metric__mc__${y}`]
					? +data[`metric__mc__${y}`].replace(/[^\d]/g, '')
					: 0;
			}
		}
		updatedCompany.financials = financials;
		this.company = updatedCompany;
		this.companyBackup = null;
		this.dataManager.update(updatedCompany.id, updatedCompany);
	}

	close() {
		this.fadeOut(() => {
			this.stateManager.activeTarget.next(null);
		});
	}

	onPhoneKeydown($event: KeyboardEvent, host: TargetDialogComponent) {
		const input = $event.target as HTMLElement;
		const pattern = /(\d)|(Backspace)|(Delete)|(Shift)|(Control)|(Alt)|(Enter)|(Tab)|(Arrow.+)/;

		if (!$event.ctrlKey && !pattern.test($event.key)) {
			host.stopInput(input, $event);
		}
	}

	onPhoneInput($event: any, host: TargetDialogComponent) {
		// @ts-ignore
		const value = this.control.value;
		const digits = value.replace(/[^\d]/g, '');
		const digitsArr = digits.split('');
		const length = digitsArr.length;
		const formatted = [];

		for (let i = 0; i < Math.min(length, 10); i++) {
			if (i === 0) {
				formatted.push('(');
			}
			if (i === 3) {
				formatted.push(') ');
			}
			if (i === 6) {
				formatted.push('-');
			}
			formatted.push(digitsArr.shift());
		}
		if (length > 10) {
			host.stopInput($event.target, null);
		}
		// @ts-ignore
		this.control.setValue(formatted.join(''));
	}

	onMetricKeydown($event: KeyboardEvent, host: TargetDialogComponent) {
		const input = $event.target as HTMLElement;
		const pattern = /(\d)|(Backspace)|(Delete)|(Shift)|(Control)|(Alt)|(Enter)|(Tab)|(Arrow.+)/;

		if (!$event.ctrlKey && !pattern.test($event.key)) {
			host.stopInput(input, $event);
		}
	}

	onMetricInput($event: any, host: TargetDialogComponent) {
		// @ts-ignore
		const value = this.control.value;
		const digits = value.replace(/[^\d]/g, '');
		const formatted = DataManager.formatNumberFull(+digits);

		// @ts-ignore
		this.control.setValue(formatted);
	}

	async onPublicChange(
		option: { key: boolean; value: string },
		host: TargetDialogComponent
	) {
		const prevValue = host.company.isPublic;
		const newValue = option.key;

		if (newValue !== prevValue) {
			if (newValue === false) {
				const response = await host.stateManager.confirm(
					'Note: Changing this value to Private will delete values for Market ' +
						'Capital when this target is saved. Are you sure you want to continue?',
					'warning'
				);
				if (response === false) {
					// @ts-ignore
					this.currentValue = {
						key: true,
						value: 'Public'
					};
					// @ts-ignore
					this.control.setValue({
						key: true,
						value: 'Public'
					});
				} else {
					host.company.isPublic = false;
				}
			}
			if (newValue === true) {
				host.company.isPublic = true;
				for (const financials of host.company.financials) {
					// @ts-ignore
					financials.mc = 0;
				}
			}
		}
	}

	stopInput(input: HTMLElement, $event: any) {
		if ($event) {
			$event.stopPropagation();
			$event.preventDefault();
		}
		this.renderer.addClass(input, 'animate');
		this.renderer.addClass(input, 'animate--error-shake');
		window.setTimeout(() => {
			this.renderer.removeClass(input, 'animate');
			this.renderer.removeClass(input, 'animate--error-shake');
		}, 300);
	}

	onAddContact() {
		const firstName = Math.random() > 0.5 ? 'Jane' : 'John';
		const newContact: Contact = {
			name: {
				first: firstName,
				last: 'Doe'
			},
			position: 'Position',
			phone: '(555) 555-5555',
			email: `jdoe@${this.company.url}`
		};

		this.company.contacts.push(newContact);
	}

	async onDeleteContact(contact: Contact) {
		const message = `Are you sure you want to delete ${contact.name.first} ${
			contact.name.last
		}?`;
		if (await this.stateManager.confirm(message, 'danger')) {
			this.deleteContact(contact);
		}
	}

	deleteContact(contact: Contact) {
		const contacts = this.company.contacts;
		const index = contacts.indexOf(contact);

		contacts.splice(index, 1);
	}

	fadeOut(callback: () => void) {
		this.renderer.removeClass(this.dialog.nativeElement, 'animate--slow');
		super.fadeOut(callback);
	}
}
