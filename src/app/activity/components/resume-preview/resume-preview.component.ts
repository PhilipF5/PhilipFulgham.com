import { Component } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ActivityActions } from "app/activity/actions";
import { ResumeItem } from "app/activity/models";
import { getResume } from "app/activity/selectors";
import { ResumeService } from "app/activity/services";

@Component({
	selector: "resume-preview",
	templateUrl: "./resume-preview.component.html",
	styleUrls: ["./resume-preview.component.scss"],
})
export class ResumePreviewComponent {
	public error: string;
	public items$: Observable<ResumeItem[]> = this.store.pipe(select(getResume));
	public loaded: boolean = true;

	public get hasError(): boolean {
		return !!this.error;
	}

	constructor(private store: Store<any>) {}
}
