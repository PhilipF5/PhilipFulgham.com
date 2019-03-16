import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { sortBy } from "lodash";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Skill } from "app/projects/models";
import { environment } from "environments/environment";

@Injectable()
export class SkillService {
	constructor(private http: HttpClient) {}

	public getSkills(): Observable<Skill[]> {
		return this.http.get<any[]>(environment.API_URL + "Skills").pipe(
			catchError(this.handleError),
			map(res => sortBy(res, [s => s.name.replace(/\W/g, "").toLowerCase()]))
		);
	}

	private handleError(error: HttpErrorResponse) {
		return throwError("Couldn't load skills grid");
	}
}
