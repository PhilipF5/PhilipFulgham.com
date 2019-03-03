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
	public pageIndex: number = 0;
	public projects$: Observable<Project[]>;
	private readonly pageLength: number = 8;
	
	public get firstProjectIndex(): number {
		return this.pageIndex * this.pageLength;
	}

	public get lastProjectIndex(): number {
		return this.firstProjectIndex + this.pageLength;
	}

	constructor(private projectService: ProjectService) {}

	ngOnInit() {
		this.projects$ = this.projectService.getProjects();
	}

	public onPageDown(projectsCount: number) {
		if (this.lastProjectIndex < projectsCount - 1) {
			this.pageIndex++;
		}
	}

	public onPageUp() {
		if (this.pageIndex > 0) {
			this.pageIndex--;
		}
	}

	public selectProject(project: Project): void {
		this.projectSelected.emit(project);
	}
}
