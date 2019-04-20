import { DateTime } from "luxon";

export interface ResumeItem {
	_id: string;
	end?: DateTime;
	image: string;
	org: string;
	start?: DateTime;
	title: string;
}
