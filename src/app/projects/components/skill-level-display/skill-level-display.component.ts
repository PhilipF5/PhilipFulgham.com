import { Component, HostBinding, Input } from "@angular/core";

import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "skill-level-display",
	templateUrl: "./skill-level-display.component.html",
	styleUrls: ["./skill-level-display.component.scss"],
})
export class SkillLevelDisplayComponent {
	@Input() level: number;
	public starIcon = faStar;

	public get levels() {
		return [
			{ i: 1, name: "Explorer" },
			{ i: 2, name: "Beginner" },
			{ i: 3, name: "Intermediate" },
			{ i: 4, name: "Advanced" },
			{ i: 5, name: "Pro" },
		];
	}

	@HostBinding("class.level-0") private get isLevel0(): boolean {
		return this.level === 0;
	}

	@HostBinding("class.level-1") private get isLevel1(): boolean {
		return this.level === 1;
	}

	@HostBinding("class.level-2") private get isLevel2(): boolean {
		return this.level === 2;
	}

	@HostBinding("class.level-3") private get isLevel3(): boolean {
		return this.level === 3;
	}

	@HostBinding("class.level-4") private get isLevel4(): boolean {
		return this.level === 4;
	}

	@HostBinding("class.level-5") private get isLevel5(): boolean {
		return this.level === 5;
	}

	public isInLevel(star: number): boolean {
		return star <= this.level;
	}
}
