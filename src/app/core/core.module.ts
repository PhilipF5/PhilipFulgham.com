import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EffectsModule } from "@ngrx/effects";

import { ActivityModule } from "../activity/activity.module";
import { BioModule } from "../bio/bio.module";
import { ProjectsModule } from "../projects/projects.module";
import { SharedModule } from "../shared/shared.module";

import { COMPONENTS } from "./components";
import { EFFECTS } from "./effects";
import { PAGES } from "./pages";

@NgModule({
	declarations: [COMPONENTS, PAGES],
	imports: [EffectsModule.forFeature(EFFECTS), CommonModule, ActivityModule, BioModule, ProjectsModule, SharedModule],
	exports: [COMPONENTS, PAGES],
	providers: [],
})
export class CoreModule {}
