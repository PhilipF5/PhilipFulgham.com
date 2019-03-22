import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";

import { EFFECTS } from "./effects";
import { bioReducer } from "./reducers";
import { COMPONENTS } from "./components";
import { SERVICES } from "./services";

const MODULES = [
	StoreModule.forFeature("bio", bioReducer),
	EffectsModule.forFeature(EFFECTS),
	CommonModule,
	SharedModule,
];

@NgModule({
	declarations: [COMPONENTS],
	imports: [MODULES],
	exports: [COMPONENTS],
	providers: [SERVICES],
})
export class BioModule {}
