import { Component, Input } from "@angular/core";

import { Favorite } from "app/main/models";

@Component({
	selector: "favorites-list",
	templateUrl: "./favorites-list.component.html",
	styleUrls: ["./favorites-list.component.scss"],
})
export class FavoritesListComponent {
	@Input() items: Favorite[];
	@Input() title: string;
}
