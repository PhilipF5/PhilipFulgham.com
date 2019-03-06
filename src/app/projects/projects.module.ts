import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MarkdownModule } from "ngx-markdown";

import { SharedModule } from "../shared/shared.module";

import { COMPONENTS } from "./components";
import { SERVICES } from "./services";

@NgModule({
	declarations: [COMPONENTS],
	imports: [MarkdownModule.forChild(), CommonModule, SharedModule],
	exports: [COMPONENTS],
	providers: [SERVICES],
})
export class ProjectsModule {}
