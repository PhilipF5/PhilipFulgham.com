import { Observable } from "rxjs";

export interface Job {
	end?: Date;
	image: Observable<string | null>;
	org: string;
	projects: string[];
	roles: { paragraph: string, summary: string }[];
	start: Date;
	title: string;
}
