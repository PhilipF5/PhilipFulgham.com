import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import { ActivityActions, ActivityActionTypes } from "app/activity/actions";
import { BlogPostService, RepoService, ResumeService } from "app/activity/services";

@Injectable()
export class ActivityEffects {
	@Effect()
	loadBlogPosts$ = this.actions$.pipe(
		ofType<ActivityActions.BlogPostsRequested>(ActivityActionTypes.BlogPostsRequested),
		switchMap(() =>
			this.blogPostService.getBlogPosts().pipe(
				map(blogPosts => new ActivityActions.BlogPostsLoaded({ blogPosts })),
				catchError(() => of(new ActivityActions.ActivityError()))
			)
		)
	);

	@Effect()
	loadRepos$ = this.actions$.pipe(
		ofType<ActivityActions.ReposRequested>(ActivityActionTypes.ReposRequested),
		switchMap(() =>
			this.repoService.getRepos().pipe(
				map(repos => new ActivityActions.ReposLoaded({ repos })),
				catchError(() => of(new ActivityActions.ActivityError()))
			)
		)
	);

	@Effect()
	loadResume$ = this.actions$.pipe(
		ofType<ActivityActions.ResumeRequested>(ActivityActionTypes.ResumeRequested),
		switchMap(() =>
			this.resumeService.getResumeInfo().pipe(
				map(resumeItems => new ActivityActions.ResumeLoaded({ resumeItems })),
				catchError(() => of(new ActivityActions.ActivityError()))
			)
		)
	);

	constructor(
		private actions$: Actions,
		private blogPostService: BlogPostService,
		private repoService: RepoService,
		private resumeService: ResumeService,
		private store: Store<any>
	) {}
}

export const EFFECTS = [ActivityEffects];
