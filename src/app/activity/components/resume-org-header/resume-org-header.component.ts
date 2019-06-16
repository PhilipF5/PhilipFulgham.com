import { Component, Input } from "@angular/core";

@Component({
	selector: "pf-resume-org-header",
	templateUrl: "./resume-org-header.component.html",
	styleUrls: ["./resume-org-header.component.scss"],
})
export class ResumeOrgHeaderComponent {
	@Input() link: string;
	@Input() logoUrl: string;
	@Input() orgName: string;
}
