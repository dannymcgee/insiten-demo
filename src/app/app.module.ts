import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
	faUserChart
} from '@fortawesome/pro-solid-svg-icons';
import 'what-input';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		TargetListComponent,
		TargetCardComponent,
		TargetTableComponent
	],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
		library.add(faThLarge, faThList, faSearch, faUserChart);
	}
}
