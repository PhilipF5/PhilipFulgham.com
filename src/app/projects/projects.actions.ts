import { Action } from "@ngrx/store";
import { Project, Skill } from "app/projects/models";

export enum ProjectsActionTypes {
	ProjectsRequested = "[Projects API] Projects Requested",
	ProjectsLoaded = "[Projects API] Projects Loaded",
	SkillsRequested = "[Skills API] Skills Requested",
	SkillsLoaded = "[Skills API] Skills Loaded",
}

export namespace ProjectsActions {
	export class ProjectsRequested implements Action {
		readonly type = ProjectsActionTypes.ProjectsRequested;
	}

	export class ProjectsLoaded implements Action {
		readonly type = ProjectsActionTypes.ProjectsLoaded;

		constructor(public payload: { projects: Project[] }) {}
	}

	export class SkillsRequested implements Action {
		readonly type = ProjectsActionTypes.SkillsRequested;
	}

	export class SkillsLoaded implements Action {
		readonly type = ProjectsActionTypes.SkillsLoaded;

		constructor(public payload: { skills: Skill[] }) {}
	}
}

export type ProjectsAction =
	| ProjectsActions.ProjectsRequested
	| ProjectsActions.ProjectsLoaded
	| ProjectsActions.SkillsRequested
	| ProjectsActions.SkillsLoaded;
