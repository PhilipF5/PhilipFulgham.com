import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import * as moment from "moment";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BlogPost } from "app/main/models";
import { environment } from "environments/environment";

@Injectable()
export class BlogPostService {
	constructor(private http: HttpClient) {}

	public getBlogPosts(): Observable<BlogPost[]> {
		return this.http.get<any[]>(environment.API_URL + "BlogPosts").pipe(
			catchError(this.handleError),
			map(res => res.map<BlogPost>(bp => ({ publishDate: moment(bp.publishDate), ...bp })))
		);
	}

	private handleError(error: HttpErrorResponse) {
		return throwError("Couldn't load latest articles");
	}
}
