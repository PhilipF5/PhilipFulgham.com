import { Observable } from "rxjs";

export interface Job {
	end?: Date;
	image: Observable<string | null>;
	org: string;
	projects: string[];
	responsibilities: string[];
	start: Date;
	title: string;
}
