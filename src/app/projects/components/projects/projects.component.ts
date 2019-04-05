import { Component, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Store, select } from "@ngrx/store";
import { filter, take, withLatestFrom } from "rxjs/operators";

import { Project } from "app/projects/models";
import { getProjects, getProjectsError } from "app/projects/selectors";

@Component({
	selector: "projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
	public error$ = this.store.pipe(select(getProjectsError));
	public selectedProject: Project;

	private projects$ = this.store.pipe(
		select(getProjects),
		filter(p => !!(p && p.length))
	);

	private get elem(): HTMLElement {
		return this._elem.nativeElement;
	}

	constructor(private _elem: ElementRef, private route: ActivatedRoute, private store: Store<any>) {}

	ngAfterViewInit() {
		this.projects$
			.pipe(
				take(1),
				withLatestFrom(this.route.queryParamMap)
			)
			.subscribe(([projects, paramMap]) => {
				let projectId: string;
				if ((projectId = paramMap.get("showProject"))) {
					setTimeout(() => this.elem.scrollIntoView(), 1000);
				}
			});
	}

	public changeSelectedProject(project: Project) {
		this.selectedProject = project;
	}

	public clearSelectedProject() {
		this.selectedProject = undefined;
	}
}
