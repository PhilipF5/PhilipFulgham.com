import { Component, Input, OnInit } from "@angular/core";

import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";

import { Favorite } from "main/models";

@Component({
	selector: "favorites-list",
	templateUrl: "./favorites-list.component.html",
	styleUrls: ["./favorites-list.component.scss"]
})
export class FavoritesListComponent {
	@Input() public category: string;
	public items: Observable<Favorite[]>;
	@Input() public title: string;

	constructor(private afs: AngularFirestore) {}

	ngOnInit() {
		this.items = this.afs
			.collection<Favorite>("favorites", item => item.where("type", "==", this.category).orderBy("name"))
			.valueChanges();
	}
}
