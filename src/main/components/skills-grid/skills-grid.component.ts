import { Component, OnInit } from "@angular/core";

@Component({
	selector: "skills-grid",
	templateUrl: "./skills-grid.component.html",
	styleUrls: ["./skills-grid.component.scss"]
})
export class SkillsGridComponent implements OnInit {

	skills;

	constructor() {
		var skills = require("../../../assets/skills.json");
		this.skills = skills;
		skills.sort((a, b) => {
			if (a.name.toLowerCase() < b.name.toLowerCase()) {
				return -1;
			}
			if (a.name.toLowerCase() > b.name.toLowerCase()) {
				return 1;
			}
		});
	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
