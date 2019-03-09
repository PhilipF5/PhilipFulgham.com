import { projectsReducer } from "./project.reducers";
import { skillsReducer } from "./skill.reducers";

export * from "./project.reducers";
export * from "./skill.reducers";

export const REDUCERS = { projectsReducer, skillsReducer };
