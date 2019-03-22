import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { MarkdownModule } from "ngx-markdown";

import { SharedModule } from "../shared/shared.module";

import { COMPONENTS } from "./components";
import { EFFECTS } from "./effects";
import { projectsReducer, skillsReducer } from "./reducers";
import { SERVICES } from "./services";

const MODULES = [
	StoreModule.forFeature("projects", projectsReducer),
	StoreModule.forFeature("skills", skillsReducer),
	EffectsModule.forFeature(EFFECTS),
	MarkdownModule.forChild(),
	CommonModule,
	SharedModule,
];

@NgModule({
	declarations: [COMPONENTS],
	imports: [MODULES],
	exports: [COMPONENTS],
	providers: [SERVICES],
})
export class ProjectsModule {}
