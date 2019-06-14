import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ProjectsActions } from "app/projects/actions";
import { ProjectService, SkillService } from "app/projects/services";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

@Injectable()
export class ProjectsEffects {
	@Effect()
	loadProjects$ = this.actions$.pipe(
		ofType(ProjectsActions.projectsRequested),
		switchMap(() =>
			this.projectService.getProjects().pipe(
				map(projects => ProjectsActions.projectsLoaded({ projects })),
				catchError(() => of(ProjectsActions.projectsError()))
			)
		)
	);

	@Effect()
	loadSkills$ = this.actions$.pipe(
		ofType(ProjectsActions.skillsRequested),
		switchMap(() =>
			this.skillService.getSkills().pipe(
				map(skills => ProjectsActions.skillsLoaded({ skills })),
				catchError(() => of(ProjectsActions.projectsError()))
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
