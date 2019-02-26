import { Component, Input } from "@angular/core";

import { Project, Skill } from "app/projects/models";

@Component({
	selector: "projects-selector-item",
	templateUrl: "./projects-selector-item.component.html",
	styleUrls: ["./projects-selector-item.component.scss"],
})
export class ProjectsSelectorItemComponent {
	@Input() project: Project;

	public get displaySkills(): Skill[] {
		return this.project.skills.filter(s => s.name !== this.project.platform.name);
	}
}
