import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './ui/form-components/input/input.component';
import { CheckboxComponent } from './ui/form-components/checkbox/checkbox.component';
import { SelectComponent } from './ui/form-components/select/select.component';
import { DropdownComponent } from './ui/dropdown/dropdown.component';
import { SorterComponent } from './ui/sorter/sorter.component';
import { DialogBaseComponent } from './ui/dialog-base/dialog-base.component';
import { ConfirmationDialogComponent } from './ui/confirmation-dialog/confirmation-dialog.component';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import { TargetsComponent } from './targets/targets.component';
import { TargetsGridComponent } from './targets/targets-grid/targets-grid.component';
import { TargetCardComponent } from './targets/targets-grid/target-card/target-card.component';
import { TargetsTableComponent } from './targets/targets-table/targets-table.component';
import { TargetTableHeaderComponent } from './targets/targets-table/target-table-header/target-table-header.component';
import { TargetTableRowComponent } from './targets/targets-table/target-table-row/target-table-row.component';
import { TargetDialogComponent } from './targets/target-dialog/target-dialog.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faThLarge,
	faThList,
	faSearch,
	faUserChart,
	faCaretDown,
	faBuilding,
	faFlask,
	faHandshake,
	faCheckCircle,
	faBan,
	faSortUp,
	faSortDown,
	faTimes,
	faLock,
	faLockOpen,
	faEnvelope,
	faPhone,
	faEdit,
	faSave,
	faTrashAlt,
	faUndo,
	faPlus
} from '@fortawesome/pro-solid-svg-icons';
import 'what-input';

import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		CheckboxComponent,
		InputComponent,
		SelectComponent,
		DropdownComponent,
		SorterComponent,
		DialogBaseComponent,
		ConfirmationDialogComponent,
		TargetsComponent,
		TargetsGridComponent,
		TargetCardComponent,
		TargetsTableComponent,
		TargetTableHeaderComponent,
		TargetTableRowComponent,
		TargetDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		FormsModule,
		ReactiveFormsModule,
		TextareaAutosizeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
		library.add(
			faThLarge,
			faThList,
			faSearch,
			faUserChart,
			faCaretDown,
			faBuilding,
			faFlask,
			faHandshake,
			faCheckCircle,
			faBan,
			faSortUp,
			faSortDown,
			faTimes,
			faLock,
			faLockOpen,
			faEnvelope,
			faPhone,
			faEdit,
			faSave,
			faTrashAlt,
			faUndo,
			faPlus
		);
	}
}
