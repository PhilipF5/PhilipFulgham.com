import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ActivityActions } from "app/activity/actions";
import { BioActions } from "app/bio/actions";
import { CoreActions } from "app/core/actions";
import { ProjectsActions } from "app/projects/actions";
import { merge, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable()
export class CoreEffects {
	@Effect()
	loadBio$ = this.actions.pipe(
		ofType(CoreActions.appLoading),
		switchMap(() =>
			merge(
				of(ActivityActions.blogPostsRequested()),
				of(ActivityActions.reposRequested()),
				of(ActivityActions.resumeRequested()),
				of(BioActions.bioRequested()),
				of(BioActions.favoritesRequested()),
				of(ProjectsActions.projectsRequested()),
				of(ProjectsActions.skillsRequested())
			)
		)
	);

	constructor(private actions: Actions) {}
}

export const EFFECTS = [CoreEffects];
