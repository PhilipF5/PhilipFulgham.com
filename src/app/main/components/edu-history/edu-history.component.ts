import { Component, Input, OnInit } from "@angular/core";

import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore, QuerySnapshot } from "@angular/fire/firestore";
import * as moment from "moment";
import { map, take } from "rxjs/operators";

import { Credential } from "app/main/models";

@Component({
	selector: "edu-history",
	templateUrl: "./edu-history.component.html",
	styleUrls: ["./edu-history.component.scss"],
})
export class EduHistoryComponent implements OnInit {
	@Input() limit: number;

	public creds: Credential[];

	constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}

	ngOnInit() {
		this.loadCredentials();
	}

	public formatDate(date: Date): string {
		return moment(date).format("MMMM YYYY");
	}

	private async loadCredentials() {
		let creds = await this.afs
			.collection("credentials", cred => cred.orderBy("date", "desc"))
			.get()
			.pipe(
				map<QuerySnapshot<Credential>, Credential[]>(creds =>
					creds.docs
						.map(c => {
							let obj = c.data();
							return obj;
						})
						.slice(0, this.limit || creds.docs.length)
				),
				take(1)
			)
			.toPromise();

		for (let c of creds) {
			c.image = await this.storage
				.ref(c.image)
				.getDownloadURL()
				.pipe(take(1))
				.toPromise();
		}

		this.creds = creds;
	}
}
