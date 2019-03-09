import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjectsState } from "app/projects/reducers";
import * as fromProjects from "app/projects/reducers";

export const selectProjectsState = createFeatureSelector<ProjectsState>("projects");

export const getProjects = createSelector(
	selectProjectsState,
	fromProjects.selectAll
);
