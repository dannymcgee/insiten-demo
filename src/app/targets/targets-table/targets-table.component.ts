import {
	Component,
	OnInit,
	Input,
	HostBinding,
	ViewEncapsulation
} from '@angular/core';
import { Company } from 'src/app/data/data-manager.service';

@Component({
	selector: 'app-targets-table',
	templateUrl: './targets-table.component.html',
	styleUrls: ['./targets-table.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TargetsTableComponent implements OnInit {
	@Input() targets: Company[];
	@HostBinding('class.targets-table') _ = true;

	constructor() {}

	ngOnInit() {}
}
