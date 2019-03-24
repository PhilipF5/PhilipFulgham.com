import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Project } from "app/projects/models";
import { environment } from "environments/environment";

@Injectable()
export class ProjectService {
	constructor(private http: HttpClient) {}

	public getProjects = () =>
		this.http.get<any[]>(environment.API_URL + "Projects").pipe(catchError(this.handleError));

	private handleError = (error: HttpErrorResponse) => throwError("Couldn't load projects");
}
