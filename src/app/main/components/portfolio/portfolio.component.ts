import { Component, OnInit } from "@angular/core";

import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";

@Component({
	selector: "portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
	public photoUrls: Observable<string | null>[] = [];

	constructor(private storage: AngularFireStorage) {}

	ngOnInit() {
		for (let i = 0; i < 7; i++) {
			this.photoUrls.push(this.storage.ref(`portfolio/${i + 1}.png`).getDownloadURL());
		}
	}
}
