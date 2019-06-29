import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { ActivityActions } from "app/activity/actions";
import { BlogPost, Repo, ResumeItem } from "app/activity/models";

export interface ActivityState {
	blogPosts: BlogPostsState;
	error: boolean;
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
	error: false,
	repos: reposAdapter.getInitialState(),
	resume: resumeAdapter.getInitialState(),
};

export const reducer = createReducer(
	initialActivityState,
	on(ActivityActions.activityError, state => ({ ...state, error: true })),
	on(ActivityActions.blogPostsLoaded, (state, { blogPosts }) => ({
		...state,
		blogPosts: blogPostsAdapter.addAll(blogPosts, { ...state.blogPosts }),
	})),
	on(ActivityActions.reposLoaded, (state, { repos }) => ({
		...state,
		repos: reposAdapter.addAll(repos, { ...state.repos }),
	})),
	on(ActivityActions.resumeLoaded, (state, { resumeItems }) => ({
		...state,
		resume: resumeAdapter.addAll(resumeItems, { ...state.resume }),
	}))
);

export function activityReducer(state: ActivityState | undefined, action: Action) {
	return reducer(state, action);
}
