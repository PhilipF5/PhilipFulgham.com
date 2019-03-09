import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjectsState, projectsAdapter } from "app/projects/reducers";

const fromProjects = projectsAdapter.getSelectors();

export const selectProjectsState = createFeatureSelector<ProjectsState>("projects");

export const getProjects = createSelector(
	selectProjectsState,
	fromProjects.selectAll
);
