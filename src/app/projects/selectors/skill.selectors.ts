import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SkillsState, skillsAdapter } from "app/projects/reducers";

const fromSkills = skillsAdapter.getSelectors();

export const selectSkillsState = createFeatureSelector<SkillsState>("skills");

export const getSkills = createSelector(
	selectSkillsState,
	fromSkills.selectAll
);
