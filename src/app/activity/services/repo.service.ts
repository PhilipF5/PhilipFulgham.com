import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { DateTime } from "luxon";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Repo } from "app/activity/models";
import { environment } from "environments/environment";

@Injectable()
export class RepoService {
	constructor(private http: HttpClient) {}

	public getRepos(): Observable<Repo[]> {
		return this.http.get<any[]>(environment.API_URL + "Repos").pipe(
			catchError(this.handleError),
			map(res => res.map<Repo>(r => ({ lastPushed: DateTime.fromISO(r.lastPushed), ...r })))
		);
	}

	private handleError(error: HttpErrorResponse) {
		return throwError("Couldn't load latest repositories");
	}
}
