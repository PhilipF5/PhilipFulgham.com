import { createAction } from "@ngrx/store";
import { Project, Skill } from "app/projects/models";

export namespace ProjectsActions {
	export const projectsError = createAction("[Projects API] Projects Error");
	export const projectsRequested = createAction("[Projects API] Projects Requested");
	export const projectsLoaded = createAction("[Projects API] Projects Loaded", (projects: Project[]) => ({
		projects,
	}));
	export const skillsRequested = createAction("[Skills API] Skills Requested");
	export const skillsLoaded = createAction("[Skills API] Skills Loaded", (skills: Skill[]) => ({ skills }));
}
