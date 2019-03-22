import { Component, OnInit } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ProjectsActions } from "app/projects/actions";
import { Skill } from "app/projects/models";
import { getSkills } from "app/projects/selectors";

@Component({
	selector: "skills-grid",
	templateUrl: "./skills-grid.component.html",
	styleUrls: ["./skills-grid.component.scss"],
})
export class SkillsGridComponent implements OnInit {
	public error: string;
	public loaded: boolean;
	public skills$: Observable<Skill[]> = this.store.pipe(select(getSkills));

	public get hasError(): boolean {
		return !!this.error;
	}

	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.dispatch(new ProjectsActions.SkillsRequested());
	}
}
