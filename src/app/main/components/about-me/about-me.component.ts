import { Component, OnInit, ViewChild } from "@angular/core";

import { AngularFirestore, DocumentSnapshot } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { map } from "rxjs/operators";

import { CollapsibleDirective } from "app/main/directives";

@Component({
	selector: "about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
	public paragraphs: string[];
	public photoUrl: string;

	@ViewChild(CollapsibleDirective) private subsection: CollapsibleDirective;

	constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}

	ngOnInit() {
		this.loadParagraphs();
		this.loadPhotoUrl();
	}

	public toggleFavorites(): void {
		this.subsection.toggle();
	}

	private async loadParagraphs() {
		this.paragraphs = await this.afs
			.doc("text/pJwwIKKFUtJvxDiaWtxJ")
			.get()
			.pipe(map<DocumentSnapshot<any>, string[]>(text => text.get("contents")))
			.toPromise();
	}

	private async loadPhotoUrl() {
		this.photoUrl = await this.storage.ref("portrait.png").getDownloadURL().toPromise();
	}
}
