import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore, QuerySnapshot } from "@angular/fire/firestore";
import * as moment from "moment";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

import { Job } from "app/main/models";

@Component({
	selector: "work-history",
	templateUrl: "./work-history.component.html",
	styleUrls: ["./work-history.component.scss"],
})
export class WorkHistoryComponent implements OnInit {
	@Input() limit: number;

	@Output() load = new EventEmitter();

	public jobs: Job[];

	constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}

	ngOnInit() {
		this.loadJobs();
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

	private async loadJobs() {
		let jobs = await this.afs
			.collection("jobs", job => job.orderBy("start", "desc"))
			.get()
			.pipe(
				map<QuerySnapshot<Job>, Job[]>(jobs =>
					jobs.docs.map(j => j.data()).slice(0, this.limit || jobs.docs.length)
				),
				take(1)
			)
			.toPromise();

		for (let j of jobs) {
			j.image = await this.storage
				.ref(j.image)
				.getDownloadURL()
				.pipe(take(1))
				.toPromise();
		}

		this.jobs = jobs;
		this.load.emit();
	}
}
