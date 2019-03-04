import { Component, Input } from "@angular/core";

import { Project } from "app/projects/models";

@Component({
	selector: "project-info",
	templateUrl: "./project-info.component.html",
	styleUrls: ["./project-info.component.scss"],
})
export class ProjectInfoComponent {
	@Input() selectedProject: Project;

	public get skills(): string {
		return this.selectedProject.skills.map(s => s.name).sort().join(", ");
	}
}
