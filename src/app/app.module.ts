import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './form-components/input/input.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { SelectComponent } from './form-components/select/select.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TargetListComponent } from './targets/target-list/target-list.component';
import { TargetCardComponent } from './targets/target-card/target-card.component';
import { TargetTableHeaderComponent } from './targets/target-table-header/target-table-header.component';
import { TargetTableComponent } from './targets/target-table/target-table.component';

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
	faBan
} from '@fortawesome/pro-solid-svg-icons';
import 'what-input';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		TargetListComponent,
		TargetCardComponent,
		TargetTableHeaderComponent,
		TargetTableComponent,
		CheckboxComponent,
		InputComponent,
		SelectComponent,
		DropdownComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		FormsModule,
		ReactiveFormsModule
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
			faBan
		);
	}
}
