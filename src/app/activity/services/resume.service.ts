import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Credential, Job, ResumeItem } from "app/activity/models";
import { environment } from "environments/environment";
import { difference, uniqBy } from "lodash";
import { DateTime } from "luxon";
import { throwError, zip } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class ResumeService {
	constructor(private http: HttpClient) {}

	public getResumeInfo = () =>
		zip(
			this.http.get<Job[]>(environment.API_URL + "Jobs").pipe(
				map<Job[], ResumeItem[]>(jobs =>
					jobs.map(j => ({
						_id: j._id,
						title: j.title,
						org: j.org,
						image: j.logo,
						start: DateTime.fromISO(j.start),
						end: j.end ? DateTime.fromISO(j.end) : undefined,
					}))
				),
				tap(items =>
					difference(items, uniqBy(items, i => i.org)).forEach(i => {
						i.org = undefined;
						i.image = undefined;
					})
				)
			),
			this.http
				.get<Credential[]>(environment.API_URL + "Credentials")
				.pipe(
					map<Credential[], ResumeItem[]>(creds =>
						creds.map(c => ({ _id: c._id, title: c.name, org: c.issuer, image: c.logo }))
					)
				)
		).pipe(catchError(this.handleError));

	private handleError = (error: HttpErrorResponse) => throwError("Couldn't load resume preview");
}
