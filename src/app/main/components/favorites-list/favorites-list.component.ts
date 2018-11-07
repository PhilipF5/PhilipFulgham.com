import { Component, Input, OnInit } from "@angular/core";

import { AngularFirestore, QuerySnapshot } from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";

import { Favorite } from "app/main/models";

@Component({
	selector: "favorites-list",
	templateUrl: "./favorites-list.component.html",
	styleUrls: ["./favorites-list.component.scss"],
})
export class FavoritesListComponent implements OnInit {
	@Input() public category: string;
	public items: Favorite[];
	@Input() public title: string;

	constructor(private afs: AngularFirestore) {}

	ngOnInit() {
		this.loadFavorites();
	}

	private async loadFavorites() {
		let favorites = await this.afs
			.collection<Favorite>("favorites", item => item.where("type", "==", this.category))
			.get()
			.pipe(
				map<QuerySnapshot<Favorite>, Favorite[]>(collection => collection.docs.map(doc => doc.data())),
				take(1)
			)
			.toPromise();

		this.items = favorites.sort((a, b) => {
			let nameA = a.alphaSort || a.name;
			let nameB = b.alphaSort || b.name;
			if (nameA < nameB) {
				return -1;
			} else {
				return 1;
			}
		});
	}
}
