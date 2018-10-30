import { Component, Input, OnInit } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Favorite } from "app/main/models";

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
			.collection<Favorite>("favorites", item => item.where("type", "==", this.category))
			.valueChanges()
			.pipe(
				map(c => {
					return c.sort((a, b) => {
						let nameA = a.alphaSort || a.name;
						let nameB = b.alphaSort || b.name;
						if (nameA < nameB) {
							return -1;
						} else {
							return 1;
						}
					});
				})
			);
	}
}
