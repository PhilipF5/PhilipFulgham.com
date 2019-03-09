import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";

import { SkillActionTypes, SkillsLoaded, SkillsRequested } from "app/projects/actions";
import { SkillService } from "app/projects/services";

@Injectable()
export class SkillEffects {
	@Effect()
	loadSkills$ = this.actions$.pipe(
		ofType<SkillsRequested>(SkillActionTypes.SkillsRequested),
		mergeMap(() => this.skillService.getSkills()),
		map(skills => new SkillsLoaded({ skills }))
	);

	constructor(private actions$: Actions, private skillService: SkillService, private store: Store<any>) {}
}
