import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjectsState, SkillsState, projectsAdapter, skillsAdapter } from "app/projects/reducers";

const fromProjects = projectsAdapter.getSelectors();
const fromSkills = skillsAdapter.getSelectors();

export const selectProjectsState = createFeatureSelector<ProjectsState>("projects");
export const selectSkillsState = createFeatureSelector<SkillsState>("skills");

export const getProjects = createSelector(
	selectProjectsState,
	fromProjects.selectAll
);

export const getProjectsError = createSelector(
	selectProjectsState,
	selectSkillsState,
	(projectsState, skillsState) => projectsState.error || skillsState.error
);

export const getSkills = createSelector(
	selectSkillsState,
	fromSkills.selectAll
);
