import { createAction, props } from "@ngrx/store";
import { BlogPost, Repo, ResumeItem } from "app/activity/models";

export namespace ActivityActions {
	export const activityError = createAction("[Activity APIs] Error Loading");
	export const blogPostsLoaded = createAction("[BlogPosts API] BlogPosts Loaded", props<{ blogPosts: BlogPost[] }>());
	export const blogPostsRequested = createAction("[BlogPosts API] BlogPosts Requested");
	export const reposLoaded = createAction("[Repos API] Repos Loaded", props<{ repos: Repo[] }>());
	export const reposRequested = createAction("[Repos API] Repos Requested");
	export const resumeLoaded = createAction("[Resumes API] Resumes Loaded", props<{ resumeItems: ResumeItem[] }>());
	export const resumeRequested = createAction("[Resumes API] Resumes Requested");
}
