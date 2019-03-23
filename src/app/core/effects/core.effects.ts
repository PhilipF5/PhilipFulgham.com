import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { merge, of } from "rxjs";
import { switchMap } from "rxjs/operators";

import { ActivityActions } from "app/activity/actions";
import { BioActions } from "app/bio/actions";
import { CoreActions, CoreActionTypes } from "app/core/actions";
import { ProjectsActions } from "app/projects/actions";

@Injectable()
export class CoreEffects {
	@Effect()
	loadBio$ = this.actions.pipe(
		ofType<CoreActions.AppLoading>(CoreActionTypes.AppLoading),
		switchMap(() =>
			merge(
				of(new ActivityActions.BlogPostsRequested()),
				of(new ActivityActions.ReposRequested()),
				of(new ActivityActions.ResumeRequested()),
				of(new BioActions.BioRequested()),
				of(new BioActions.FavoritesRequested()),
				of(new ProjectsActions.ProjectsRequested()),
				of(new ProjectsActions.SkillsRequested())
			)
		)
	);

	constructor(private actions: Actions) {}
}

export const EFFECTS = [CoreEffects];
