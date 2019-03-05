import { Component, ElementRef, EventEmitter, Input, NgZone, Output } from "@angular/core";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { TimelineLite } from "gsap";

import { Project } from "app/projects/models";

@Component({
	selector: "project-info",
	templateUrl: "./project-info.component.html",
	styleUrls: ["./project-info.component.scss"],
})
export class ProjectInfoComponent {
	@Output() closed: EventEmitter<{}> = new EventEmitter();
	public closeIcon = faTimes;
	private _selectedProject: Project;

	public get selectedProject(): Project {
		return this._selectedProject;
	}

	@Input() public set selectedProject(value: Project) {
		new TimelineLite()
			.to(this.elem, 0.5, { opacity: 0 })
			.add(() => this.ngZone.run(() => (this._selectedProject = value)))
			.to(this.elem, 0.5, { opacity: 1 }, "+=0.25");
	}

	public get skills(): string {
		return this.selectedProject.skills.map(s => s.name).sort().join(", ");
	}

	private get elem(): HTMLElement {
		return this._elem.nativeElement;
	}

	constructor(private _elem: ElementRef, private ngZone: NgZone) {}

	public closeProject(): void {
		this.selectedProject = undefined;
		this.closed.emit();
	}
}
