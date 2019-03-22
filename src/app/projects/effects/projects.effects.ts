import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";

import { ProjectsActions, ProjectsActionTypes } from "app/projects/actions";
import { ProjectService, SkillService } from "app/projects/services";

@Injectable()
export class ProjectsEffects {
	@Effect()
	loadProjects$ = this.actions$.pipe(
		ofType<ProjectsActions.ProjectsRequested>(ProjectsActionTypes.ProjectsRequested),
		mergeMap(() => this.projectService.getProjects()),
		map(projects => new ProjectsActions.ProjectsLoaded({ projects }))
	);

	@Effect()
	loadSkills$ = this.actions$.pipe(
		ofType<ProjectsActions.SkillsRequested>(ProjectsActionTypes.SkillsRequested),
		mergeMap(() => this.skillService.getSkills()),
		map(skills => new ProjectsActions.SkillsLoaded({ skills }))
	);

	constructor(
		private actions$: Actions,
		private projectService: ProjectService,
		private skillService: SkillService,
		private store: Store<any>
	) {}
}

export const EFFECTS = [ProjectsEffects];
