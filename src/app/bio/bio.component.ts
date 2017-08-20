import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-bio",
	templateUrl: "./bio.component.html",
	styleUrls: ["./bio.component.less"]
})
export class BioComponent implements OnInit {
	favoriteGames = ["Dishonored", "Minecraft", "Assassin's Creed", "The Elder Scrolls", "Batman: Arkham"];
	favoriteShows = ["Doctor Who", "The Flash", "Gotham", "The Big Bang Theory"];

	constructor() { }

	ngOnInit() {}
	
	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
