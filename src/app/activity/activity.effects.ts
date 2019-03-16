import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";

import {
	ActivityActionTypes,
	BlogPostsLoaded,
	BlogPostsRequested,
	ReposLoaded,
	ReposRequested,
	ResumeLoaded,
	ResumeRequested,
} from "app/activity/activity.actions";
import { BlogPostService, RepoService, ResumeService } from "app/activity/services";

@Injectable()
export class ActivityEffects {
	@Effect()
	loadBlogPosts$ = this.actions$.pipe(
		ofType<BlogPostsRequested>(ActivityActionTypes.BlogPostsRequested),
		mergeMap(() => this.blogPostService.getBlogPosts()),
		map(blogPosts => new BlogPostsLoaded({ blogPosts }))
	);

	@Effect()
	loadRepos$ = this.actions$.pipe(
		ofType<ReposRequested>(ActivityActionTypes.ReposRequested),
		mergeMap(() => this.repoService.getRepos()),
		map(repos => new ReposLoaded({ repos }))
	);

	@Effect()
	loadResume$ = this.actions$.pipe(
		ofType<ResumeRequested>(ActivityActionTypes.ResumeRequested),
		mergeMap(() => this.resumeService.getResumeInfo()),
		map(resumeItems => new ResumeLoaded({ resumeItems }))
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
