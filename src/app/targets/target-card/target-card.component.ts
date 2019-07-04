import { Component, OnInit, Input } from '@angular/core';
import { DataManager, Company } from 'src/app/data/data-manager.service';
import { Status } from '../../data/status.enum';

@Component({
	selector: 'app-target-card',
	templateUrl: './target-card.component.html',
	styleUrls: ['./target-card.component.scss']
})
export class TargetCardComponent implements OnInit {
	@Input() company: Company;
	eStatus: Status;
	status: { key: string; description: string };
	icons = {
		researching: 'flask',
		pending: 'handshake',
		approved: 'check-circle',
		declined: 'ban'
	};

	constructor(public dataManager: DataManager) {}

	ngOnInit() {
		switch (this.company.status) {
			case Status.Researching:
				this.status = {
					key: 'researching',
					description: 'Researching'
				};
				break;
			case Status.PendingApproval:
				this.status = {
					key: 'pending',
					description: 'Pending Approval'
				};
				break;
			case Status.Approved:
				this.status = {
					key: 'approved',
					description: 'Approved'
				};
				break;
			case Status.Declined:
				this.status = {
					key: 'declined',
					description: 'Declined'
				};
				break;
			default:
				this.status = null;
		}
	}

	onTestEdit() {
		this.dataManager.edit(this.company, {
			name: 'Test Edit'
		});
	}
}
