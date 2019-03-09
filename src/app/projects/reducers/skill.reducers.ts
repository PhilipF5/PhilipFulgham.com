import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

import { SkillActions, SkillActionTypes } from "app/projects/actions";
import { Skill } from "app/projects/models";

export interface SkillsState extends EntityState<Skill> {
	skillsLoaded: boolean;
}

export const skillsAdapter: EntityAdapter<Skill> = createEntityAdapter<Skill>({
	selectId: skill => skill._id,
});

export const initialSkillsState: SkillsState = skillsAdapter.getInitialState({
	skillsLoaded: false,
});

export function skillsReducer(state = initialSkillsState, action: SkillActions): SkillsState {
	switch (action.type) {
		case SkillActionTypes.SkillsLoaded:
			return skillsAdapter.addAll(action.payload.skills, { ...state, skillsLoaded: true });
		default:
			return state;
	}
}

export const {
	selectAll,
	selectEntities,
	selectIds,
	selectTotal,
} = skillsAdapter.getSelectors();
