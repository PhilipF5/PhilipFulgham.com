import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
	selector: "app-skills",
	templateUrl: "./skills.component.html",
	styleUrls: ["./skills.component.less"]
})
export class SkillsComponent implements OnInit {
	
	skills;
	
	constructor(private http: Http) {
		var skills = require("../../assets/skills.json");
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
