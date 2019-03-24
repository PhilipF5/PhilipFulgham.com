import { createFeatureSelector, createSelector } from "@ngrx/store";
import { map, orderBy } from "lodash";
import { ActivityState, blogPostsAdapter, reposAdapter, resumeAdapter } from "app/activity/reducers";
import { getProjects, getSkills } from "app/projects/selectors";

const fromBlogPosts = blogPostsAdapter.getSelectors();
const fromRepos = reposAdapter.getSelectors();
const fromResume = resumeAdapter.getSelectors();

export const selectActivityState = createFeatureSelector<ActivityState>("activity");

const selectBlogPostsState = createSelector(
	selectActivityState,
	activityState => activityState.blogPosts
);

const selectReposState = createSelector(
	selectActivityState,
	activityState => activityState.repos
);

const selectResumeState = createSelector(
	selectActivityState,
	activityState => activityState.resume
);

export const getBlogPosts = createSelector(
	selectBlogPostsState,
	fromBlogPosts.selectAll
);

export const getRepos = createSelector(
	selectReposState,
	fromRepos.selectAll
);

export const getReposWithProjects = createSelector(
	getRepos,
	getProjects,
	(repos, projects) => repos.map(r => ({ ...r, project: projects.find(p => p.repo && p.repo.name === r.name) }))
);

export const getLanguages = createSelector(
	getReposWithProjects,
	getSkills,
	(repos, skills) => {
		if (repos.length && skills.length) {
			let stats = repos
				.map(r => r.languages)
				.reduce((accumulator, currentValue) => {
					accumulator = accumulator || {};
					for (let lang in currentValue) {
						if (accumulator[lang]) {
							accumulator[lang] += currentValue[lang];
						} else {
							accumulator[lang] = currentValue[lang];
						}
					}
					return accumulator;
				});

			let languages = map(stats, (value, key) => ({
				name: key,
				count: value,
				skill: skills.find(s => s.name === key),
			})).filter(s => !["CSS", "HTML"].includes(s.name));
			return orderBy(languages, [l => l.count], "desc");
		}
	}
);

export const getResume = createSelector(
	selectResumeState,
	fromResume.selectAll
);
