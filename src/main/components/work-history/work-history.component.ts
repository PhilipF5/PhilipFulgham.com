import { Component } from "@angular/core";

import { AngularFireStorage } from "angularfire2/storage";
import { AngularFirestore } from "angularfire2/firestore";
import * as moment from "moment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Job } from "main/models";

@Component({
	selector: "work-history",
	templateUrl: "./work-history.component.html",
	styleUrls: ["./work-history.component.scss"],
})
export class WorkHistoryComponent {
	public jobs: Observable<Job[]>;

	constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}

	ngOnInit() {
		this.jobs = this.afs
			.collection("jobs", job => job.orderBy("start", "desc"))
			.valueChanges()
			.pipe(
				map<any[], Job[]>(jobs =>
					jobs.map(j => {
						j.end = j.end && j.end.toDate();
						j.image = this.storage.ref(j.image).getDownloadURL();
						j.start = j.start.toDate();
						return j;
					})
				)
			);
	}

	public formatDateRange(job: Job): string {
		let dateString = moment(job.start).year() + "–";
		if (job.end) {
			dateString += moment(job.end).year();
		}
		return dateString;
	}
}
