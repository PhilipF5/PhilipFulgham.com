import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Favorite, TextBlock } from "app/bio/models";
import { environment } from "environments/environment";

@Injectable()
export class ProfileService {
	constructor(private http: HttpClient) {}

	public getBio(): Observable<string> {
		return this.http.get<TextBlock>(environment.API_URL + "Profile").pipe(
			catchError(() => throwError("Couldn't load bio")),
			map<TextBlock, string>(res => res.text)
		);
	}

	public getFavorites(): Observable<Favorite[]> {
		return this.http.get<Favorite[]>(environment.API_URL + "Favorites").pipe(
			catchError(() => throwError("Couldn't load favorites"))
		);
	}
}
