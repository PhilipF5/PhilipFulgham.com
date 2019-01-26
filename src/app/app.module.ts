import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ResponsiveModule } from "ng2-responsive";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MainModule } from "app/main/main.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ResponsiveModule,
		MainModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
