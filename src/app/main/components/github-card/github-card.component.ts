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

	public languages: any;
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

	private buildLanguageStats() {
		let stats = this.repos.map(r => r.languages).reduce((accumulator, currentValue) => {
			accumulator = accumulator || {};
			for (let lang in currentValue) {
				if (accumulator[lang]) {
					accumulator[lang] += currentValue[lang];
				} else {
					accumulator[lang] = currentValue[lang];
				}
			}

			return accumulator;
		});

		let statsArray = [];
		for (let lang in stats) {
			let langObj = {};
			langObj["name"] = lang;
			langObj["count"] = stats[lang];
			statsArray.push(langObj);
		}

		this.languages = statsArray
			.filter(s => !["CSS", "HTML"].includes(s.name))
			.sort((a, b) => {
				if (a.count > b.count) {
					return -1;
				} else {
					return 1;
				}
			})
			.slice(0, 3)
			.map(s => Icons[s.name] || s.name);
	}

	private async get<T>(url: string) {
		return this.http.get<T>(url).toPromise();
	}

	private getIconLink(icon: string) {
		return `assets/icons/file_type_${icon}.svg`;
	}

	private getLanguageStats(repo) {
		return this.get(repo.languages_url);
	}

	private async getRepos() {
		let repos = (await this.get<any[]>(this.userUrl + "/repos"))
			.sort((a, b) => {
				if (a.pushed_at > b.pushed_at) {
					return -1;
				} else {
					return 1;
				}
			});

		this.repos = [];
		for (let r of repos) {
			let repo = await this.http
				.get<any>(r.url, { headers: { Accept: "application/vnd.github.mercy-preview+json" } })
				.toPromise();
			if (repo.topics.includes("angular")) {
				repo.icon = Icons["Angular"];
			} else if (repo.topics.includes("angularjs")) {
				repo.icon = Icons["AngularJS"];
			} else if (repo.topics.includes("nodejs")) {
				repo.icon = Icons["Node.js"];
			} else if (repo.topics.includes("react")) {
				repo.icon = Icons["React"];
			} else {
				repo.icon = Icons[repo.language];
			}

			repo.languages = await this.getLanguageStats(repo);
			this.repos.push(repo);
		}

		this.buildLanguageStats();
		this.repos = this.repos.slice(0, 5);
	}

	private async getUser() {
		this.user = await this.get(this.userUrl);
	}
}

const Icons = {
	Angular: "angular",
	AngularJS: "ng_controller_js",
	"C#": "csharp",
	CSS: "css",
	Dockerfile: "docker",
	HTML: "html",
	JavaScript: "js_official",
	"Node.js": "node",
	React: "reactjs",
	TypeScript: "typescript_official",
};
