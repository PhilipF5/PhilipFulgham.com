import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { zip } from "rxjs";

import { EduHistoryComponent } from "../edu-history/edu-history.component";
import { WorkHistoryComponent } from "../work-history/work-history.component";

@Component({
	selector: "resume-preview",
	templateUrl: "./resume-preview.component.html",
	styleUrls: ["./resume-preview.component.scss"],
})
export class ResumePreviewComponent implements AfterViewInit {
	@ViewChild(EduHistoryComponent) private eduHistory: EduHistoryComponent;
	@ViewChild(WorkHistoryComponent) private workHistory: WorkHistoryComponent;

	public loaded: boolean;

	ngAfterViewInit() {
		zip(this.eduHistory.load, this.workHistory.load).subscribe(() => {
			this.markAsLoaded();
		});
	}

	public markAsLoaded(): void {
		this.loaded = true;
	}
}
