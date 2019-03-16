import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";

import {
	ProjectsActionTypes,
	ProjectsLoaded,
	ProjectsRequested,
	SkillsLoaded,
	SkillsRequested,
} from "app/projects/projects.actions";
import { ProjectService, SkillService } from "app/projects/services";

@Injectable()
export class ProjectsEffects {
	@Effect()
	loadProjects$ = this.actions$.pipe(
		ofType<ProjectsRequested>(ProjectsActionTypes.ProjectsRequested),
		mergeMap(() => this.projectService.getProjects()),
		map(projects => new ProjectsLoaded({ projects }))
	);

	@Effect()
	loadSkills$ = this.actions$.pipe(
		ofType<SkillsRequested>(ProjectsActionTypes.SkillsRequested),
		mergeMap(() => this.skillService.getSkills()),
		map(skills => new SkillsLoaded({ skills }))
	);

	constructor(
		private actions$: Actions,
		private projectService: ProjectService,
		private skillService: SkillService,
		private store: Store<any>
	) {}
}

export const EFFECTS = [ProjectsEffects];
