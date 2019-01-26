import { Component, OnInit, ViewChild } from "@angular/core";

import { CollapsibleDirective } from "app/main/directives";
import { Favorite } from "app/main/models";
import { ProfileService } from "app/main/services";

@Component({
	selector: "about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
	@ViewChild(CollapsibleDirective) private subsection: CollapsibleDirective;

	public bio: string;
	public favorites: { [category: string]: Favorite[] };

	public get favoriteCategories(): string[] {
		return Object.getOwnPropertyNames(this.favorites).sort();
	}

	constructor(private profileService: ProfileService) {}

	ngOnInit() {
		this.profileService.getBio().subscribe(bio => (this.bio = bio));
		this.profileService.getFavorites().subscribe(favorites => {
			favorites = favorites.sort((a, b) => {
				let nameA = a.alphaSort || a.name;
				let nameB = b.alphaSort || b.name;
				if (nameA < nameB) {
					return -1;
				} else {
					return 1;
				}
			});

			let lists = {};
			for (let fav of favorites) {
				if (lists[fav.type]) {
					lists[fav.type].push(fav);
				} else {
					lists[fav.type] = [fav];
				}
			}

			this.favorites = lists;
		});
	}

	public toggleFavorites(): void {
		this.subsection.toggle();
	}
}
