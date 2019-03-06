import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { PIPES } from "./pipes";

@NgModule({
	declarations: [COMPONENTS, DIRECTIVES, PIPES],
	imports: [CommonModule, FontAwesomeModule],
	exports: [FontAwesomeModule, COMPONENTS, DIRECTIVES, PIPES],
	providers: [],
})
export class SharedModule {}
