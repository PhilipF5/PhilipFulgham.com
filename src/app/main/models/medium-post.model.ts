import { Moment } from "moment";

export interface MediumPost {
	author: string;
	categories: string[];
	content: string;
	description: string;
	enclosure: any;
	guid: string;
	link: string;
	pubDate: Moment;
	thumbnail: string;
	title: string;
}
