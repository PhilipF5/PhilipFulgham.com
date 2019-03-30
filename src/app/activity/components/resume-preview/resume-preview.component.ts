import { Component } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ActivityActions } from "app/activity/actions";
import { ResumeItem } from "app/activity/models";
import { getActivityError, getResume } from "app/activity/selectors";
import { ResumeService } from "app/activity/services";

@Component({
	selector: "resume-preview",
	templateUrl: "./resume-preview.component.html",
	styleUrls: ["./resume-preview.component.scss"],
})
export class ResumePreviewComponent {
	public error$: Observable<boolean> = this.store.pipe(select(getActivityError));
	public items$: Observable<ResumeItem[]> = this.store.pipe(select(getResume));
	public loaded: boolean = true;

	constructor(private store: Store<any>) {}
}
