import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { BlogPost } from "app/activity/models";
import { getActivityError, getBlogPosts } from "app/activity/selectors";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Component({
	selector: "pf-blog-posts",
	templateUrl: "./blog-posts.component.html",
	styleUrls: ["./blog-posts.component.scss"],
})
export class BlogPostsComponent {
	public blogUrl: string = environment.BLOG_URL;
	public count: number;
	public error$: Observable<boolean> = this.store.pipe(select(getActivityError));
	public posts$: Observable<BlogPost[]> = this.store.pipe(select(getBlogPosts));

	constructor(private store: Store<any>) {}
}
