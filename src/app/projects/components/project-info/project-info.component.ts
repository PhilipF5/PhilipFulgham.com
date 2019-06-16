import { Component, ElementRef, EventEmitter, Input, NgZone, Output } from "@angular/core";
import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Project } from "app/projects/models";
import { TimelineLite } from "gsap";

@Component({
	selector: "pf-project-info",
	templateUrl: "./project-info.component.html",
	styleUrls: ["./project-info.component.scss"],
})
export class ProjectInfoComponent {
	@Output() closed: EventEmitter<{}> = new EventEmitter();
	public closeIcon = faTimes;
	public hasImage: boolean = true;
	public imageIcon = faImage;
	private animation: TimelineLite;
	private _selectedProject: Project;

	public get selectedProject(): Project {
		return this._selectedProject;
	}

	@Input() public set selectedProject(value: Project) {
		if (this.animation) {
			this.animation.kill();
		}
		this.animation = new TimelineLite()
			.to(this.elem, 0.5, { opacity: 0 })
			.add(() =>
				this.ngZone.run(() => {
					this._selectedProject = value;
					this.hasImage = true;
				})
			)
			.to(this.elem, 0.5, { opacity: 1 }, "+=0.25");
	}

	public get skills(): string {
		return this.selectedProject.skills
			.map(s => s.name)
			.sort()
			.join(", ");
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
