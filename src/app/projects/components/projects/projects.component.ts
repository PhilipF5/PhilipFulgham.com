import { Component } from "@angular/core";

import { Store, select } from "@ngrx/store";

import { Project } from "app/projects/models";
import { getProjectsError } from "app/projects/selectors";

@Component({
	selector: "projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
	public error$ = this.store.pipe(select(getProjectsError));
	public selectedProject: Project;

	constructor(private store: Store<any>) {}

	public changeSelectedProject(project: Project) {
		this.selectedProject = project;
	}

	public clearSelectedProject() {
		this.selectedProject = undefined;
	}
}
