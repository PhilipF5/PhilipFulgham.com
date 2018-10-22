import { Component, OnInit } from "@angular/core";

import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import * as moment from "moment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Credential } from "main/models";

@Component({
	selector: "edu-history",
	templateUrl: "./edu-history.component.html",
	styleUrls: ["./edu-history.component.scss"],
})
export class EduHistoryComponent implements OnInit {
	public creds: Observable<Credential[]>;

	constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}

	ngOnInit() {
		this.creds = this.afs
			.collection("credentials", cred => cred.orderBy("date", "desc"))
			.valueChanges()
			.pipe(
				map<any[], Credential[]>(creds =>
					creds.map(c => {
						c.date = c.date.toDate();
						c.image = this.storage.ref(c.image).getDownloadURL();
						return c;
					})
				)
			);
	}

	public formatDate(date: Date): string {
		return moment(date).format("MMMM YYYY");
	}
}
