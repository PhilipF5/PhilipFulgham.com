import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { ProjectsActions } from "app/projects/actions";
import { Project, Skill } from "app/projects/models";

export interface ProjectsState extends EntityState<Project> {
	error: boolean;
}

export interface SkillsState extends EntityState<Skill> {
	error: boolean;
}

export const projectsAdapter: EntityAdapter<Project> = createEntityAdapter<Project>({
	selectId: project => project._id,
});

export const skillsAdapter: EntityAdapter<Skill> = createEntityAdapter<Skill>({
	selectId: skill => skill._id,
});

export const initialProjectsState: ProjectsState = projectsAdapter.getInitialState({
	error: false,
});

export const initialSkillsState: SkillsState = skillsAdapter.getInitialState({
	error: false,
});

export const reducers = {
	projects: createReducer(
		initialProjectsState,
		on(ProjectsActions.projectsError, state => ({ ...state, error: true })),
		on(ProjectsActions.projectsLoaded, (state, { projects }) =>
			projectsAdapter.addAll(projects, { ...state, projectsLoaded: true })
		)
	),
	skills: createReducer(
		initialSkillsState,
		on(ProjectsActions.projectsError, state => ({ ...state, error: true })),
		on(ProjectsActions.skillsLoaded, (state, { skills }) =>
			skillsAdapter.addAll(skills, { ...state, skillsLoaded: true })
		)
	),
};

export function projectsReducer(state: ProjectsState | undefined, action: Action) {
	return reducers.projects(state, action);
}

export function skillsReducer(state: SkillsState | undefined, action: Action) {
	return reducers.skills(state, action);
}
