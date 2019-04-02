import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import { ProjectsActions, ProjectsActionTypes } from "app/projects/actions";
import { ProjectService, SkillService } from "app/projects/services";

@Injectable()
export class ProjectsEffects {
	@Effect()
	loadProjects$ = this.actions$.pipe(
		ofType<ProjectsActions.ProjectsRequested>(ProjectsActionTypes.ProjectsRequested),
		switchMap(() =>
			this.projectService.getProjects().pipe(
				map(projects => new ProjectsActions.ProjectsLoaded({ projects })),
				catchError(() => of(new ProjectsActions.ProjectsError()))
			)
		)
	);

	@Effect()
	loadSkills$ = this.actions$.pipe(
		ofType<ProjectsActions.SkillsRequested>(ProjectsActionTypes.SkillsRequested),
		switchMap(() =>
			this.skillService.getSkills().pipe(
				map(skills => new ProjectsActions.SkillsLoaded({ skills })),
				catchError(() => of(new ProjectsActions.ProjectsError()))
			)
		)
	);

	constructor(
		private actions$: Actions,
		private projectService: ProjectService,
		private skillService: SkillService,
		private store: Store<any>
	) {}
}

export const EFFECTS = [ProjectsEffects];
