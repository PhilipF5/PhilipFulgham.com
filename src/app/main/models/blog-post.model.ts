import { Moment } from "moment";

export interface BlogPost {
	publishDate: Moment;
	title: string;
	url: string;
}
