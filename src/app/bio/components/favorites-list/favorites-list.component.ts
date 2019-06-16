import { Component, Input } from "@angular/core";
import { Favorite } from "app/bio/models";

@Component({
	selector: "pf-favorites-list",
	templateUrl: "./favorites-list.component.html",
	styleUrls: ["./favorites-list.component.scss"],
})
export class FavoritesListComponent {
	@Input() items: Favorite[];
	@Input() title: string;
}
