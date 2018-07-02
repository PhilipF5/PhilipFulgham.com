import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ResponsiveModule } from "ng2-responsive";
import { AngularFireModule } from "angularfire2";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MainModule } from "main/main.module";

import { environment } from "../environments/environment";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ResponsiveModule,
		MainModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireStorageModule,
		AngularFirestoreModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
