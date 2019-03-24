import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { DateTime } from "luxon";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BlogPost } from "app/activity/models";
import { environment } from "environments/environment";

@Injectable()
export class BlogPostService {
	constructor(private http: HttpClient) {}

	public getBlogPosts = () =>
		this.http.get<any[]>(environment.API_URL + "BlogPosts").pipe(
			catchError(this.handleError),
			map(res =>
				res.map<BlogPost>(bp => ({
					...bp,
					link: environment.BLOG_URL + bp.slug,
					publishDate: DateTime.fromISO(bp.publishDate),
				}))
			)
		);

	private handleError = (error: HttpErrorResponse) => throwError("Couldn't load latest articles");
}
