import { Action } from "@ngrx/store";
import { Skill } from "app/projects/models";

export enum SkillActionTypes {
	SkillsRequested = "[Skills API] Skills Requested",
	SkillsLoaded = "[Skills API] Skills Loaded",
}

export class SkillsRequested implements Action {
	readonly type = SkillActionTypes.SkillsRequested;
}

export class SkillsLoaded implements Action {
	readonly type = SkillActionTypes.SkillsLoaded;

	constructor(public payload: { skills: Skill[] }) {}
}

export type SkillActions = SkillsRequested | SkillsLoaded;
