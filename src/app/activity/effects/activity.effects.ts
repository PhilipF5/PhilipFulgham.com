import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ActivityActions } from "app/activity/actions";
import { BlogPostService, RepoService, ResumeService } from "app/activity/services";
import { flatten } from "lodash";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

@Injectable()
export class ActivityEffects {
	@Effect()
	loadBlogPosts$ = this.actions$.pipe(
		ofType(ActivityActions.blogPostsRequested),
		switchMap(() =>
			this.blogPostService.getBlogPosts().pipe(
				map(blogPosts => ActivityActions.blogPostsLoaded(blogPosts)),
				catchError(() => of(ActivityActions.activityError()))
			)
		)
	);

	@Effect()
	loadRepos$ = this.actions$.pipe(
		ofType(ActivityActions.reposRequested),
		switchMap(() =>
			this.repoService.getRepos().pipe(
				map(repos => ActivityActions.reposLoaded(repos)),
				catchError(() => of(ActivityActions.activityError()))
			)
		)
	);

	@Effect()
	loadResume$ = this.actions$.pipe(
		ofType(ActivityActions.resumeRequested),
		switchMap(() =>
			this.resumeService.getResumeInfo().pipe(
				map(resumeItems => ActivityActions.resumeLoaded(flatten(resumeItems))),
				catchError(() => of(ActivityActions.activityError()))
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
