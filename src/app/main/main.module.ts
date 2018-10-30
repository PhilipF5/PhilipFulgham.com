import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";

import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { PAGES } from "./pages";
import { PIPES } from "./pipes";

@NgModule({
	declarations: [COMPONENTS, DIRECTIVES, PAGES, PIPES],
	imports: [CommonModule, MainRoutingModule],
	exports: [COMPONENTS, DIRECTIVES, PAGES, PIPES],
	providers: []
})
export class MainModule {}
