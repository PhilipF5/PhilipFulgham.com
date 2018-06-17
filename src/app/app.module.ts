import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ResponsiveModule } from "ng2-responsive";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MainModule } from "main/main.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ResponsiveModule,
		MainModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
