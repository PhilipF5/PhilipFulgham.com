import { Component, EventEmitter, NgZone, Output, ViewChild, ElementRef } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { TimelineLite } from "gsap";
import { Observable } from "rxjs";

import { ProjectsActions } from "app/projects/actions";
import { Project } from "app/projects/models";
import { getProjects } from "app/projects/selectors";

@Component({
	selector: "projects-selector",
	templateUrl: "projects-selector.component.html",
	styleUrls: ["projects-selector.component.scss"],
})
export class ProjectsSelectorComponent {
	@Output() projectSelected: EventEmitter<Project> = new EventEmitter();
	@ViewChild("items") _itemsContainer: ElementRef;
	public pageIndex: number = 0;
	public projects$: Observable<Project[]> = this.store.pipe(select(getProjects));
	public selectedProject: Project;
	private readonly pageLength: number = 8;

	public get firstProjectIndex(): number {
		return this.pageIndex * this.pageLength;
	}

	public get lastProjectIndex(): number {
		return this.firstProjectIndex + this.pageLength;
	}

	private get itemsContainer(): HTMLElement {
		return this._itemsContainer.nativeElement;
	}

	constructor(private ngZone: NgZone, private store: Store<any>) {}

	public onPageDown(projectsCount: number) {
		if (this.lastProjectIndex < projectsCount - 1) {
			this.animatePageDown();
		}
	}

	public onPageUp() {
		if (this.pageIndex > 0) {
			this.animatePageUp();
		}
	}

	public selectProject(project: Project): void {
		this.selectedProject = project;
		this.projectSelected.emit(project);
	}

	private animatePageDown(): TimelineLite {
		return new TimelineLite()
			.to(this.itemsContainer, 0.25, { y: -20, opacity: 0, force3D: true })
			.add(() => this.ngZone.run(() => this.pageDown()))
			.set(this.itemsContainer, { y: 20 })
			.to(this.itemsContainer, 0.25, { y: 0, opacity: 1, force3D: true });
	}

	private animatePageUp(): TimelineLite {
		return new TimelineLite()
			.to(this.itemsContainer, 0.25, { y: 20, opacity: 0, force3D: true })
			.add(() => this.ngZone.run(() => this.pageUp()))
			.set(this.itemsContainer, { y: -20 })
			.to(this.itemsContainer, 0.25, { y: 0, opacity: 1, force3D: true });
	}

	private pageDown(): number {
		return this.pageIndex++;
	}

	private pageUp(): number {
		return this.pageIndex--;
	}
}
