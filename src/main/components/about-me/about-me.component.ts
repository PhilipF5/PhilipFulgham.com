import { Component, OnInit } from "@angular/core";

@Component({
	selector: "about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent implements OnInit {
	favoriteGames = ["Dishonored", "Minecraft", "Assassin's Creed", "The Elder Scrolls", "Batman: Arkham"];
	favoriteShows = ["Doctor Who", "The Flash", "Gotham", "The Big Bang Theory"];

	constructor() { }

	ngOnInit() {}

	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
