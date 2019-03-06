import { Component } from "@angular/core";

import { Project } from "app/projects/models";

@Component({
	selector: "projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
	public selectedProject: Project;

	public changeSelectedProject(project: Project) {
		this.selectedProject = project;
	}

	public clearSelectedProject() {
		this.selectedProject = undefined;
	}
}
