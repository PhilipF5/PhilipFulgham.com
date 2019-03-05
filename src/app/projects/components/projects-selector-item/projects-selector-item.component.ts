import { Component, Input } from "@angular/core";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { sortBy } from "lodash";

import { Project, Skill } from "app/projects/models";

@Component({
	selector: "projects-selector-item",
	templateUrl: "./projects-selector-item.component.html",
	styleUrls: ["./projects-selector-item.component.scss"],
})
export class ProjectsSelectorItemComponent {
	@Input() project: Project;
	public faStar = faStar;

	public get displaySkills(): Skill[] {
		return sortBy(this.project.skills.filter(s => s.name !== this.project.platform.name), [s => s.name]);
	}
}
