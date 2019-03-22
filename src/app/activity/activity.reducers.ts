import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

import { ActivityAction, ActivityActionTypes } from "app/activity/activity.actions";
import { BlogPost, Repo, ResumeItem } from "app/activity/models";

export interface ActivityState {
	blogPosts: BlogPostsState;
	repos: ReposState;
	resume: ResumeState;
}

export interface BlogPostsState extends EntityState<BlogPost> {}
export interface ReposState extends EntityState<Repo> {}
export interface ResumeState extends EntityState<ResumeItem> {}

export const blogPostsAdapter: EntityAdapter<BlogPost> = createEntityAdapter<BlogPost>({
	selectId: blogPost => blogPost._id,
});

export const reposAdapter: EntityAdapter<Repo> = createEntityAdapter<Repo>({
	selectId: repo => repo._id,
});

export const resumeAdapter: EntityAdapter<ResumeItem> = createEntityAdapter<ResumeItem>({
	selectId: resumeItem => resumeItem._id,
});

export const initialActivityState: ActivityState = {
	blogPosts: blogPostsAdapter.getInitialState(),
	repos: reposAdapter.getInitialState(),
	resume: resumeAdapter.getInitialState(),
};

export function activityReducer(state = initialActivityState, action: ActivityAction): ActivityState {
	switch (action.type) {
		case ActivityActionTypes.BlogPostsLoaded:
			return { ...state, blogPosts: blogPostsAdapter.addAll(action.payload.blogPosts, { ...state.blogPosts }) };
		case ActivityActionTypes.ReposLoaded:
			return { ...state, repos: reposAdapter.addAll(action.payload.repos, { ...state.repos }) };
		case ActivityActionTypes.ResumeLoaded:
			return { ...state, resume: resumeAdapter.addAll(action.payload.resumeItems, { ...state.resume }) };
		default:
			return state;
	}
}
