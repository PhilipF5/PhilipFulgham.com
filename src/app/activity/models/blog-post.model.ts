import { DateTime } from "luxon";

export interface BlogPost {
	link?: string;
	publishDate: DateTime;
	slug: string;
	title: string;
}
