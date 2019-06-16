import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Skill } from "app/projects/models";
import { getProjectsError, getSkills } from "app/projects/selectors";
import { Observable } from "rxjs";

@Component({
	selector: "pf-skills-grid",
	templateUrl: "./skills-grid.component.html",
	styleUrls: ["./skills-grid.component.scss"],
})
export class SkillsGridComponent {
	public error$: Observable<boolean> = this.store.pipe(select(getProjectsError));
	public loaded: boolean;
	public skills$: Observable<Skill[]> = this.store.pipe(select(getSkills));

	constructor(private store: Store<any>) {}
}
