import { Component, Input } from "@angular/core";
import { Skill } from "app/projects/models";

@Component({
	selector: "pf-skills-grid-item",
	templateUrl: "./skills-grid-item.component.html",
	styleUrls: ["./skills-grid-item.component.scss"],
})
export class SkillsGridItemComponent {
	@Input() skill: Skill;
}
