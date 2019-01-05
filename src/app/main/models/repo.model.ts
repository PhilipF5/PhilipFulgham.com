import { Moment } from "moment";

export interface Repo {
	icon?: string;
	languages: { [n: string]: number };
	lastPushed: Moment;
	name: string;
	topics: string[];
	topLanguage: string;
	url: string;
}
