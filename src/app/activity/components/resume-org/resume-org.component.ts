import { Component, Input } from "@angular/core";
import { ResumeItem } from "app/activity/models";

@Component({
	selector: "pf-resume-org",
	templateUrl: "./resume-org.component.html",
	styleUrls: ["./resume-org.component.scss"],
})
export class ResumeOrgComponent {
	@Input() org: { items: ResumeItem[]; orgName: string };

	public get link(): string {
		return this.org.items[0].orgUrl;
	}

	public get logo(): string {
		return this.org.items[0].image;
	}
}
