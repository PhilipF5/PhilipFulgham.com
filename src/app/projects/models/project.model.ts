import { Repo } from "app/activity/models";
import { Skill } from "./skill.model";

export interface Project {
	featured: boolean;
	name: string;
	repo: Repo;
	skills: Skill[];
	story: string;
}
