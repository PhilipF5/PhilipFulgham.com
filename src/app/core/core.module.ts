import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActivityModule } from "../activity/activity.module";
import { BioModule } from "../bio/bio.module";
import { ProjectsModule } from "../projects/projects.module";
import { SharedModule } from "../shared/shared.module";

import { COMPONENTS } from "./components";
import { PAGES } from "./pages";

@NgModule({
	declarations: [COMPONENTS, PAGES],
	imports: [CommonModule, ActivityModule, BioModule, ProjectsModule, SharedModule],
	exports: [COMPONENTS, PAGES],
	providers: [],
})
export class CoreModule {}
