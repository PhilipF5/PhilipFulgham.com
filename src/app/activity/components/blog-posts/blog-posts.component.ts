import { Component } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ActivityActions } from "app/activity/actions";
import { BlogPost } from "app/activity/models";
import { getBlogPosts } from "app/activity/selectors";

import { environment } from "environments/environment";

@Component({
	selector: "blog-posts",
	templateUrl: "./blog-posts.component.html",
	styleUrls: ["./blog-posts.component.scss"],
})
export class BlogPostsComponent {
	public blogUrl: string = environment.BLOG_URL;
	public count: number;
	public error: string;
	public posts$: Observable<BlogPost[]> = this.store.pipe(select(getBlogPosts));

	public get hasError(): boolean {
		return !!this.error;
	}

	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.dispatch(new ActivityActions.BlogPostsRequested());
	}
}
