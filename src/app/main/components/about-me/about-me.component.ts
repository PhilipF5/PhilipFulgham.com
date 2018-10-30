import { Component, OnInit, ViewChild } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { PageSectionComponent } from "app/main/components/page-section/page-section.component";
import { CollapsibleDirective } from "app/main/directives";

@Component({
	selector: "about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent extends PageSectionComponent implements OnInit {
	public paragraphs: Observable<string[] | null>;
	public photoUrl: Observable<string | null>;

	@ViewChild(CollapsibleDirective) private subsection: CollapsibleDirective;

	constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
		super();
	}

	ngOnInit() {
		this.photoUrl = this.storage.ref("portrait.png").getDownloadURL();
		this.paragraphs = this.afs
			.doc("text/pJwwIKKFUtJvxDiaWtxJ")
			.valueChanges()
			.pipe(map<any, string[]>(text => text.contents));
	}

	public toggleFavorites(): void {
		this.subsection.toggle();
	}
}
