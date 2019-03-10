import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ActivityState, blogPostsAdapter, reposAdapter, resumeAdapter } from "./activity.reducers";

const fromBlogPosts = blogPostsAdapter.getSelectors();
const fromRepos = reposAdapter.getSelectors();
const fromResume = resumeAdapter.getSelectors();

export const selectActivityState = createFeatureSelector<ActivityState>("activity");

const selectBlogPostsState = createSelector(
	selectActivityState,
	activityState => {
		return activityState.blogPosts;
	}
);

const selectReposState = createSelector(
	selectActivityState,
	activityState => {
		return activityState.repos;
	}
);

const selectResumeState = createSelector(
	selectActivityState,
	activityState => {
		return activityState.resume;
	}
);

export const getBlogPosts = createSelector(
	selectBlogPostsState,
	fromBlogPosts.selectAll
);

export const getRepos = createSelector(
	selectReposState,
	fromRepos.selectAll
);

export const getResume = createSelector(
	selectResumeState,
	fromResume.selectAll
);
