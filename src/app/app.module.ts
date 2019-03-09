import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MarkdownModule } from "ngx-markdown";

import { ActivityModule } from "./activity/activity.module";
import { BioModule } from "./bio/bio.module";
import { CoreModule } from "./core/core.module";
import { ProjectsModule } from "./projects/projects.module";
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

const MODULES = [
	StoreModule.forRoot({}),
	StoreDevtoolsModule.instrument(),
	EffectsModule.forRoot([]),
	MarkdownModule.forRoot(),
	ActivityModule,
	BioModule,
	CoreModule,
	ProjectsModule,
	SharedModule,
];

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, MODULES, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
