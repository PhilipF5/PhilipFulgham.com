import { Component } from "@angular/core";

import { BlogPost } from "app/main/models";
import { BlogPostService } from "app/main/services";

@Component({
	selector: "medium-feed",
	templateUrl: "./medium-feed.component.html",
	styleUrls: ["./medium-feed.component.scss"]
})
export class MediumFeedComponent {
	public count: number;
	public posts: BlogPost[];

	constructor(private blogPostService: BlogPostService) {}

	ngOnInit() {
		this.blogPostService.getBlogPosts().subscribe(blogPosts => {
			this.posts = blogPosts;
		});
	}
}
