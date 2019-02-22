import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { Observable } from "rxjs";

import { Project } from "app/projects/models";
import { ProjectService } from "app/projects/services";

@Component({
	selector: "projects-selector",
	templateUrl: "projects-selector.component.html",
	styleUrls: ["projects-selector.component.scss"],
})
export class ProjectsSelectorComponent implements OnInit {
	@Output() projectSelected: EventEmitter<Project> = new EventEmitter();
	public projects: Observable<Project[]>;

	constructor(private projectService: ProjectService) {}

	ngOnInit() {
		this.projects = this.projectService.getProjects();
	}

	public selectProject(project: Project): void {
		this.projectSelected.emit(project);
	}
}
