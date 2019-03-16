import { Component, OnInit, ViewChild } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { BioRequested, FavoritesRequested } from "app/bio/bio.actions";
import { Favorite } from "app/bio/models";
import { getBio, getFavorites } from "app/bio/bio.selectors";
import { ProfileService } from "app/bio/services";
import { CollapsibleDirective } from "app/shared/directives";

@Component({
	selector: "about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
	@ViewChild(CollapsibleDirective) private subsection: CollapsibleDirective;

	public bio$: Observable<string> = this.store.pipe(select(getBio));
	public favorites$ = this.store.pipe(select(getFavorites));

	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.dispatch(new BioRequested());
		this.store.dispatch(new FavoritesRequested());
	}

	public toggleFavorites(): void {
		this.subsection.toggle();
	}
}
