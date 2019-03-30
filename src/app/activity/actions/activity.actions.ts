import { Action } from "@ngrx/store";
import { BlogPost, Repo, ResumeItem } from "app/activity/models";

export enum ActivityActionTypes {
	ActivityError = "[Activity APIs] Error Loading",
	BlogPostsRequested = "[BlogPosts API] BlogPosts Requested",
	BlogPostsLoaded = "[BlogPosts API] BlogPosts Loaded",
	ReposRequested = "[Repos API] Repos Requested",
	ReposLoaded = "[Repos API] Repos Loaded",
	ResumeRequested = "[Resumes API] Resumes Requested",
	ResumeLoaded = "[Resumes API] Resumes Loaded",
}

export namespace ActivityActions {
	export class ActivityError implements Action {
		readonly type = ActivityActionTypes.ActivityError;
	}

	export class BlogPostsRequested implements Action {
		readonly type = ActivityActionTypes.BlogPostsRequested;
	}

	export class BlogPostsLoaded implements Action {
		readonly type = ActivityActionTypes.BlogPostsLoaded;

		constructor(public payload: { blogPosts: BlogPost[] }) {}
	}

	export class ReposRequested implements Action {
		readonly type = ActivityActionTypes.ReposRequested;
	}

	export class ReposLoaded implements Action {
		readonly type = ActivityActionTypes.ReposLoaded;

		constructor(public payload: { repos: Repo[] }) {}
	}

	export class ResumeRequested implements Action {
		readonly type = ActivityActionTypes.ResumeRequested;
	}

	export class ResumeLoaded implements Action {
		readonly type = ActivityActionTypes.ResumeLoaded;

		constructor(public payload: { resumeItems: ResumeItem[] }) {}
	}
}

export type ActivityAction =
	| ActivityActions.ActivityError
	| ActivityActions.BlogPostsRequested
	| ActivityActions.BlogPostsLoaded
	| ActivityActions.ReposRequested
	| ActivityActions.ReposLoaded
	| ActivityActions.ResumeRequested
	| ActivityActions.ResumeLoaded;
