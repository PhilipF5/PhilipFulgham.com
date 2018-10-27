import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "github-card",
	templateUrl: "./github-card.component.html",
	styleUrls: ["./github-card.component.scss"],
})
export class GitHubCardComponent {
	@Input()
	username: string;

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

	private getIconLink(icon: string) {
		return `assets/icons/file_type_${icon}.svg`;
	}

	private async getRepos() {
		let repos = (await this.get<any[]>(this.userUrl + "/repos"))
			.sort((a, b) => {
				if (a.pushed_at > b.pushed_at) {
					return -1;
				} else {
					return 1;
				}
			})
			.slice(0, 5);

		this.repos = [];
		for (let r of repos) {
			let repo = await this.http
				.get<any>(r.url, { headers: { Accept: "application/vnd.github.mercy-preview+json" } })
				.toPromise();
			if (repo.topics.includes("angular")) {
				repo.icon = Icons["Angular"];
			} else if (repo.topics.includes("react")) {
				repo.icon = Icons["React"];
			} else {
				repo.icon = Icons[repo.language];
			}
			this.repos.push(repo);
		}
	}

	private async getUser() {
		this.user = await this.get(this.userUrl);
	}
}

const Icons = {
	Angular: "angular",
	"C#": "csharp",
	JavaScript: "js_official",
	React: "reactjs",
	TypeScript: "typescript_official",
};
