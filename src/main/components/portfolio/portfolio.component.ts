import { Component, OnInit } from "@angular/core";

import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";

import { PageSectionComponent } from "main/components/page-section/page-section.component";

@Component({
	selector: "portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent extends PageSectionComponent implements OnInit {
	public photoUrls: Observable<string | null>[] = [];

	constructor(private storage: AngularFireStorage) {
		super();
	}

	ngOnInit() {
		for (let i = 0; i < 7; i++) {
			this.photoUrls.push(this.storage.ref(`portfolio/${i + 1}.png`).getDownloadURL());
		}
	}
}
