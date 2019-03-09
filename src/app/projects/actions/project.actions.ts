import { Action } from "@ngrx/store";
import { Project } from "app/projects/models";

export enum ProjectActionTypes {
	ProjectsRequested = "[Projects API] Projects Requested",
	ProjectsLoaded = "[Projects API] Projects Loaded",
}

export class ProjectsRequested implements Action {
	readonly type = ProjectActionTypes.ProjectsRequested;
}

export class ProjectsLoaded implements Action {
	readonly type = ProjectActionTypes.ProjectsLoaded;

	constructor(public payload: { projects: Project[] }) {}
}

export type ProjectActions = ProjectsRequested | ProjectsLoaded;
