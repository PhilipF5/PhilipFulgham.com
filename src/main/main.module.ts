import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";

import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { PAGES } from "./pages";

@NgModule({
	declarations: [COMPONENTS, DIRECTIVES, PAGES],
	imports: [CommonModule, MainRoutingModule],
	exports: [COMPONENTS, DIRECTIVES, PAGES],
	providers: []
})
export class MainModule {}
