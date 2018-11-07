import { Component, OnInit } from "@angular/core";

import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Component({
	selector: "portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
	public photoUrls: string[] = [];

	constructor(private storage: AngularFireStorage) {}

	ngOnInit() {
		this.loadSlides();
	}

	private async loadSlides() {
		for (let i = 0; i < 7; i++) {
			this.photoUrls.push(
				await this.storage
					.ref(`portfolio/${i + 1}.png`)
					.getDownloadURL()
					.pipe(take(1))
					.toPromise()
			);
		}
	}
}
