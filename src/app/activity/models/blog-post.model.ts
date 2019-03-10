import { DateTime } from "luxon";

export interface BlogPost {
	_id: string;
	link?: string;
	publishDate: DateTime;
	slug: string;
	title: string;
}
