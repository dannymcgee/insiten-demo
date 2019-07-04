import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './form-components/input/input.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TargetListComponent } from './targets/target-list/target-list.component';
import { TargetCardComponent } from './targets/target-card/target-card.component';
import { TargetTableComponent } from './targets/target-table/target-table.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faThLarge,
	faThList,
	faSearch,
	faUserChart,
	faCaretDown,
	faBuilding
} from '@fortawesome/pro-solid-svg-icons';
import 'what-input';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		TargetListComponent,
		TargetCardComponent,
		TargetTableComponent,
		CheckboxComponent,
		InputComponent,
		DropdownDirective
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
			faBuilding
		);
	}
}
