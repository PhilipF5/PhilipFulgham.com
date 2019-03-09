import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

import { ProjectActions, ProjectActionTypes } from "app/projects/actions";
import { Project } from "app/projects/models";

export interface ProjectsState extends EntityState<Project> {
	projectsLoaded: boolean;
}

export const projectsAdapter: EntityAdapter<Project> = createEntityAdapter<Project>({
	selectId: project => project._id,
});

export const initialProjectsState: ProjectsState = projectsAdapter.getInitialState({
	projectsLoaded: false,
});

export function projectsReducer(state = initialProjectsState, action: ProjectActions): ProjectsState {
	switch (action.type) {
		case ProjectActionTypes.ProjectsLoaded:
			return projectsAdapter.addAll(action.payload.projects, { ...state, projectsLoaded: true });
		default:
			return state;
	}
}
