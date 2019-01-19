import { Component } from "@angular/core";

import { faMedium } from "@fortawesome/free-brands-svg-icons";

import { BlogPost } from "app/main/models";
import { BlogPostService } from "app/main/services";

@Component({
	selector: "medium-feed",
	templateUrl: "./medium-feed.component.html",
	styleUrls: ["./medium-feed.component.scss"],
})
export class MediumFeedComponent {
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
