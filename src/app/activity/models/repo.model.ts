import { DateTime } from "luxon";

export interface Repo {
	_id: string;
	icon?: string;
	languages: { [n: string]: number };
	lastPushed: DateTime;
	name: string;
	topics: string[];
	topLanguage: string;
	url: string;
}
