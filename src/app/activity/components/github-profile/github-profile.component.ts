import { Component, Input } from "@angular/core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { select, Store } from "@ngrx/store";
import { Repo } from "app/activity/models";
import { getActivityError, getLanguages, getReposWithProjects } from "app/activity/selectors";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
	selector: "pf-github-profile",
	templateUrl: "./github-profile.component.html",
	styleUrls: ["./github-profile.component.scss"],
})
export class GitHubProfileComponent {
	@Input() username: string;

	public error$: Observable<boolean> = this.store.pipe(select(getActivityError));
	public githubIcon = faGithub;
	public languages$ = this.store.pipe(
		select(getLanguages),
		filter(l => !!l)
	);
	public repos$: Observable<Repo[]> = this.store.pipe(select(getReposWithProjects));

	public get profileUrl(): string {
		return "https://github.com/" + this.username;
	}

	constructor(private store: Store<any>) {}
}
