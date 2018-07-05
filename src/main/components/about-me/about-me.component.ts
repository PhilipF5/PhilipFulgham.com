import { Component, OnInit } from "@angular/core";

import { AngularFireStorage } from "angularfire2/storage";
import { Observable } from "rxjs";

import { PageSectionComponent } from "main/components/page-section/page-section.component";

@Component({
	selector: "about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent extends PageSectionComponent implements OnInit {
	favoriteGames = ["Dishonored", "Minecraft", "Assassin's Creed", "The Elder Scrolls", "Batman: Arkham"];
	favoriteShows = ["Doctor Who", "The Flash", "Gotham", "The Big Bang Theory"];
	public photoUrl: Observable<string | null>;

	constructor(private storage: AngularFireStorage) {
		super();
	}

	ngOnInit() {
		this.photoUrl = this.storage.ref("portrait.png").getDownloadURL();
	}
}
