import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getActivityError, getResumeByOrg } from "app/activity/selectors";
import { Observable } from "rxjs";

@Component({
	selector: "pf-resume-preview",
	templateUrl: "./resume-preview.component.html",
	styleUrls: ["./resume-preview.component.scss"],
})
export class ResumePreviewComponent {
	public error$: Observable<boolean> = this.store.pipe(select(getActivityError));
	public loaded: boolean = true;
	public orgs$ = this.store.pipe(select(getResumeByOrg));

	constructor(private store: Store<any>) {}
}
