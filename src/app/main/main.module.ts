import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { MainRoutingModule } from "./main-routing.module";

import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { PAGES } from "./pages";
import { PIPES } from "./pipes";
import { SERVICES } from "./services";

@NgModule({
	declarations: [COMPONENTS, DIRECTIVES, PAGES, PIPES],
	imports: [CommonModule, MainRoutingModule, FontAwesomeModule],
	exports: [COMPONENTS, DIRECTIVES, PAGES, PIPES],
	providers: [SERVICES],
})
export class MainModule {}
