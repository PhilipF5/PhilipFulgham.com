import { Component, ElementRef, EventEmitter, NgZone, Output, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Project } from "app/projects/models";
import { getProjects } from "app/projects/selectors";
import { TimelineLite } from "gsap";
import { Observable } from "rxjs";
import { filter, take, tap } from "rxjs/operators";

@Component({
	selector: "pf-projects-selector",
	templateUrl: "projects-selector.component.html",
	styleUrls: ["projects-selector.component.scss"],
})
export class ProjectsSelectorComponent {
	@Output() projectSelected: EventEmitter<Project> = new EventEmitter();
	@ViewChild("items", { static: false }) _itemsContainer: ElementRef;
	public pageIndex: number = 0;
	public projects$: Observable<Project[]> = this.store.pipe(
		select(getProjects),
		filter(p => !!p.length),
		tap(p => this.selectProjectFromRoute(p))
	);
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

	constructor(private ngZone: NgZone, private route: ActivatedRoute, private store: Store<any>) {}

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

	public async selectProjectFromRoute(projects: Project[]): Promise<void> {
		let paramMap = await this.route.queryParamMap.pipe(take(1)).toPromise();
		let projectId: string;
		if ((projectId = paramMap.get("showProject"))) {
			this.selectProject(projects.find(p => p._id === projectId));
		}
	}

	private animatePageDown = () =>
		new TimelineLite()
			.to(this.itemsContainer, 0.25, { y: -20, opacity: 0, force3D: true })
			.add(() => this.ngZone.run(() => this.pageDown()))
			.set(this.itemsContainer, { y: 20 })
			.to(this.itemsContainer, 0.25, { y: 0, opacity: 1, force3D: true });

	private animatePageUp = () =>
		new TimelineLite()
			.to(this.itemsContainer, 0.25, { y: 20, opacity: 0, force3D: true })
			.add(() => this.ngZone.run(() => this.pageUp()))
			.set(this.itemsContainer, { y: -20 })
			.to(this.itemsContainer, 0.25, { y: 0, opacity: 1, force3D: true });

	private pageDown(): number {
		return this.pageIndex++;
	}

	private pageUp(): number {
		return this.pageIndex--;
	}
}
