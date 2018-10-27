import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "github-card",
	templateUrl: "./github-card.component.html",
	styleUrls: ["./github-card.component.scss"]
})
export class GitHubCardComponent {
	@Input() username: string;

	public repos: any;
	public user: any;

	public get userUrl(): string {
		return this.baseUrl + "/users/" + this.username;
	}

	private baseUrl: string = "https://api.github.com";

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.getUser();
		this.getRepos();
	}

	private async get<T>(url: string) {
		return this.http.get<T>(url).toPromise();
	}

	private async getRepos() {
			if (a.pushed_at > b.pushed_at) {
				return -1;
			} else {
				return 1;
			}
		}).slice(0, 5);
	}

	private async getUser() {
		this.user = await this.get(this.userUrl);
	}
}
