import {
	Component,
	OnInit,
	Input,
	HostBinding,
	Renderer2,
	OnDestroy
} from '@angular/core';
import { FormGroup, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
	Company,
	Contact,
	metricsMap,
	DataManager,
	Financials
} from '@data/data-manager.service';
import { statusMap, Status } from '@data/status.model';
import { DialogBaseComponent } from '@ui/dialog-base/dialog-base.component';
import { StateManager } from '@targets/state-manager.service';

@Component({
	selector: 'app-target-details',
	templateUrl: './target-dialog.component.html',
	styleUrls: ['./target-dialog.component.scss']
})
export class TargetDialogComponent extends DialogBaseComponent
	implements OnInit, OnDestroy {
	@Input() company: Company;
	companyBackup: Company;
	statusMap = statusMap;
	sDataManager = DataManager;
	metricsMap = metricsMap;
	metricKeys: string[];
	form: FormGroup;
	formContacts: FormArray;
	formFinancials: FormArray;
	self = this;
	validators = Validators;
	editModeSub: Subscription;

	@HostBinding('class.target-dialog') _ = true;
	@HostBinding('class.target-dialog--locked') isLocked = true;

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
		this.form = new FormGroup({
			contacts: new FormArray([]),
			financials: new FormArray([])
		});

		this.formContacts = this.form.controls.contacts as FormArray;
		for (const contact of this.company.contacts) {
			this.formContacts.push(new FormGroup({}));
		}

		this.formFinancials = this.form.controls.financials as FormArray;
		for (const financial of this.company.financials) {
			this.formFinancials.push(new FormGroup({}));
		}

		this.editModeSub = this.stateManager.editMode.subscribe(editMode => {
			this.isLocked = !editMode;
			if (editMode) {
				this.cloneData();
			}
		});
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
			this.stateManager.editMode.next(true);
		} else {
			if (await this.stateManager.confirm('Commit your changes?')) {
				this.saveChanges();
				this.stateManager.editMode.next(false);
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
			this.stateManager.editMode.next(false);
		}
	}

	async onDeleteClick() {
		if (
			await this.stateManager.confirm(
				'Are you sure you want to DELETE this target? This action cannot be undone!',
				'danger'
			)
		) {
			this.dataManager.delete(this.company.id);
			this.close();
		}
	}

	cloneData() {
		this.companyBackup = JSON.parse(JSON.stringify(this.company));
		this.company = JSON.parse(JSON.stringify(this.companyBackup));
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
			isPublic: data.isPublic.key,
			contacts: [],
			financials: [],
			status: Status[data.status.value as string]
		};

		for (const { name, position, phone, email } of data.contacts) {
			const nameArr = name.split(' ');
			const nameObj = {
				/**
				 * FIXME:
				 *
				 * If the name field does not consist of a first and last name separated
				 * by a space, saving changes causes app-breaking errors (in the worst
				 * case) or unexpected results (in the best case)
				 *
				 * Possible solutions:
				 *
				 * * Validate input to ensure it follows the [name.first] [name.last] format
				 *   + Path of least resistance
				 *   - Compromises usability
				 * * Switch to two inputs, one for first name and one for last name
				 *   + Covers most use cases since first or last name can be null
				 *   - Compromises usability and UI aesthetics
				 * * Modify data structure to use a single name field
				 *   + Covers all use cases
				 *   + No compromise to usability or UI aesthetics
				 *   - Requires minor modification to mock-data generator
				 *   - Would not be feasible if data structure were already set in stone
				 */
				first: nameArr[0],
				last: nameArr[1]
			};
			updatedCompany.contacts.push({
				name: nameObj,
				position,
				phone,
				email
			});
		}

		let year = 2016;
		for (const { assets, debt, revenue, ebitda, mc } of data.financials) {
			const financial: Financials = {
				key: year,
				metrics: {
					assets: +assets.replace(/[^\d]/g, ''),
					debt: +debt.replace(/[^\d]/g, ''),
					revenue: +revenue.replace(/[^\d]/g, ''),
					ebitda: +ebitda.replace(/[^\d]/g, '')
				}
			};
			if (data.isPublic.key) {
				if (mc) {
					financial.metrics.mc = +mc.replace(/[^\d]/g, '');
				} else {
					financial.metrics.mc = 0;
				}
			}
			updatedCompany.financials.push(financial);
			year++;
		}

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

		const control = this.form.controls.contacts as FormArray;
		control.push(new FormGroup({}));
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
		const control = this.form.controls.contacts as FormArray;
		control.removeAt(index);
	}

	fadeOut(callback: () => void) {
		this.renderer.removeClass(this.dialog.nativeElement, 'animate--slow');
		super.fadeOut(callback);
	}

	ngOnDestroy() {
		this.editModeSub.unsubscribe();
		this.stateManager.editMode.next(false);
	}
}
