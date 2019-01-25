import { Component, OnInit } from "@angular/core";

import { ResumeItem } from "app/main/models";
import { ResumeService } from "app/main/services";

@Component({
	selector: "resume-preview",
	templateUrl: "./resume-preview.component.html",
	styleUrls: ["./resume-preview.component.scss"],
})
export class ResumePreviewComponent implements OnInit {
	public error: string;
	public items: ResumeItem[];
	public loaded: boolean;

	public get hasError(): boolean {
		return !!this.error;
	}

	constructor(private resumeService: ResumeService) {}

	ngOnInit() {
		this.resumeService.getResumeInfo().subscribe(
			resumeItems => {
				this.items = resumeItems;
				this.loaded = true;
			},
			error => {
				this.error = error;
			}
		);
	}
}
