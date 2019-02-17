import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";

import { COMPONENTS } from "./components";
import { SERVICES } from "./services";

@NgModule({
	declarations: [COMPONENTS],
	imports: [CommonModule, SharedModule],
	exports: [COMPONENTS],
	providers: [SERVICES],
})
export class ActivityModule {}
