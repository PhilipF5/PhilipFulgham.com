import { Component, Input, OnInit } from "@angular/core";

import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import * as moment from "moment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Job } from "main/models";

@Component({
	selector: "work-history",
	templateUrl: "./work-history.component.html",
	styleUrls: ["./work-history.component.scss"],
})
export class WorkHistoryComponent implements OnInit {
	@Input() limit: number;

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
					}).slice(0, this.limit || jobs.length)
				)
			);
	}

	public formatDateRange(job: Job): string {
		let start = moment(job.start).year();
		let end = job.end ? moment(job.end).year() : null;

		if (start === end) {
			return start.toString();
		} else if (!end) {
			return start + "–";
		} else {
			return start + "–" + end;
		}
	}
}
