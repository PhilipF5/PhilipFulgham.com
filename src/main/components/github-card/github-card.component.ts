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

	private async get(url: string) {
		return this.http.get(url).toPromise();
	}

	private async getRepos() {
		this.repos = await this.get(this.userUrl + "/repos");
	}

	private async getUser() {
		this.user = await this.get(this.userUrl);
	}
}
