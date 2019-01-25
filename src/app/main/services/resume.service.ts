import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError, zip } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Credential, Job, ResumeItem } from "app/main/models";
import { environment } from "environments/environment";

@Injectable()
export class ResumeService {
	constructor(private http: HttpClient) {}

	public getResumeInfo(): Observable<ResumeItem[]> {
		return zip(
			this.http
				.get<Job>(environment.API_URL + "Jobs?latest=true")
				.pipe(map<Job, ResumeItem>(j => ({ title: j.title, org: j.org, image: j.image }))),
			this.http
				.get<Credential>(environment.API_URL + "Credentials?latest=true")
				.pipe(map<Credential, ResumeItem>(c => ({ title: c.name, org: c.issuer, image: c.image })))
		).pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		return throwError("Couldn't load resume preview");
	}
}