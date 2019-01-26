import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { Favorite } from "app/main/models";
import { environment } from "environments/environment";

@Injectable()
export class ProfileService {
	constructor(private http: HttpClient) {}

	public getFavorites(): Observable<Favorite[]> {
		return this.http.get<Favorite[]>(environment.API_URL + "Favorites").pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		return throwError("Couldn't load favorites");
	}
}
