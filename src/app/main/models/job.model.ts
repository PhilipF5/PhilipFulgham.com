export interface Job {
	end?: Date;
	image: string;
	org: string;
	projects: string[];
	roles: { paragraph: string; summary: string }[];
	start: Date;
	title: string;
}
