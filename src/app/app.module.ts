import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ResponsiveModule } from "ng2-responsive";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestoreModule } from "@angular/fire/firestore";

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
