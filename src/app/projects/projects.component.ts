import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.less"]
})
export class ProjectsComponent implements OnInit {

	jobs;

	constructor() {
		var jobs = require("../../assets/jobs.json");
		this.jobs = jobs;
		jobs.sort((a, b) => {
			if (a.start > b.start) {
				return -1;
			}
			if (a.start < b.start) {
				return 1;
			}
		});
	}

	ngOnInit() {}

}
