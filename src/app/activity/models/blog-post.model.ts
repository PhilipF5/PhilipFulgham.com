import { DateTime } from "luxon";

export interface BlogPost {
	publishDate: DateTime;
	title: string;
	url: string;
}
