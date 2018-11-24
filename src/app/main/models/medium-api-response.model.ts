export interface MediumApiResponse {
	feed: MediumFeed;
	items: MediumItem[];
	status: string;
}

interface MediumFeed {
	author: string;
	description: string;
	image: string;
	link: string;
	title: string;
	url: string;
}

interface MediumItem {
	author: string;
	categories: string[];
	content: string;
	description: string;
	enclosure: any;
	guid: string;
	link: string;
	pubDate: string;
	thumbnail: string;
	title: string;
}
