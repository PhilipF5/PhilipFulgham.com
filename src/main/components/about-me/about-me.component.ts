import { Component, OnInit, ViewChild } from "@angular/core";

import { AngularFireStorage } from "angularfire2/storage";
import { Observable } from "rxjs";

import { PageSectionComponent } from "main/components/page-section/page-section.component";
import { CollapsibleDirective } from "main/directives";

@Component({
	selector: "about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent extends PageSectionComponent implements OnInit {
	public photoUrl: Observable<string | null>;

	@ViewChild(CollapsibleDirective) private subsection: CollapsibleDirective;

	constructor(private storage: AngularFireStorage) {
		super();
	}

	ngOnInit() {
		this.photoUrl = this.storage.ref("portrait.png").getDownloadURL();
	}

	public toggleFavorites(): void {
		this.subsection.toggle();
	}
}
