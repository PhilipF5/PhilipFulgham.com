import { Observable } from "rxjs";

export interface Credential {
	date: Date;
	image: Observable<string | null>;
	issuer: string;
	name: string;
}
