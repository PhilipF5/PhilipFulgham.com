import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";

import { ProjectActionTypes, ProjectsLoaded, ProjectsRequested } from "app/projects/actions";
import { ProjectService } from "app/projects/services";

@Injectable()
export class ProjectEffects {
	@Effect()
	loadProjects$ = this.actions$.pipe(
		ofType<ProjectsRequested>(ProjectActionTypes.ProjectsRequested),
		mergeMap(() => this.projectService.getProjects()),
		map(projects => new ProjectsLoaded({ projects }))
	);

	constructor(private actions$: Actions, private projectService: ProjectService, private store: Store<any>) {}
}
