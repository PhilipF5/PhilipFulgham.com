import { Component } from "@angular/core";

import { faMedium } from "@fortawesome/free-brands-svg-icons";

import { BlogPost } from "app/activity/models";
import { BlogPostService } from "app/activity/services";

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
	public mediumIcon = faMedium;
	public posts: BlogPost[];

	public get hasError(): boolean {
		return !!this.error;
	}

	constructor(private blogPostService: BlogPostService) {}

	ngOnInit() {
		this.blogPostService.getBlogPosts().subscribe(
			blogPosts => {
				this.posts = blogPosts;
			},
			error => {
				this.error = error;
			}
		);
	}
}
