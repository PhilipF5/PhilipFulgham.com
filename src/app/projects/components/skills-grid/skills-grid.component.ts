import { Component, OnInit } from "@angular/core";

import { Skill } from "app/projects/models";
import { SkillService } from "app/projects/services";

@Component({
	selector: "skills-grid",
	templateUrl: "./skills-grid.component.html",
	styleUrls: ["./skills-grid.component.scss"],
})
export class SkillsGridComponent implements OnInit {
	public error: string;
	public loaded: boolean;
	public skills: Skill[];

	public get hasError(): boolean {
		return !!this.error;
	}

	constructor(private skillService: SkillService) {}

	ngOnInit() {
		this.skillService.getSkills().subscribe(
			skills => {
				this.skills = skills;
				this.loaded = true;
			},
			error => {
				this.error = error;
			}
		);
	}
}
