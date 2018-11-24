import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
import { MediumApiResponse, MediumPost } from "app/main/models";

@Component({
	selector: "medium-feed",
	templateUrl: "./medium-feed.component.html",
	styleUrls: ["./medium-feed.component.scss"]
})
export class MediumFeedComponent {
	public count: number;
	public posts: MediumPost[];

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.http
			.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@philipf5")
			.subscribe((res: MediumApiResponse) => {
				this.count = res.items.length;
				this.posts = res.items
					.slice(0, 5)
					.map(item => Object.assign({}, item, { pubDate: moment(item.pubDate) }));
			});
	}
}
