import { Component } from "@angular/core";

@Component({
	selector: "work-history",
	templateUrl: "./work-history.component.html",
	styleUrls: ["./work-history.component.scss"],
})
export class WorkHistoryComponent {
	jobs;

	constructor() {
		var jobs = require("../../../assets/jobs.json");
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
}
