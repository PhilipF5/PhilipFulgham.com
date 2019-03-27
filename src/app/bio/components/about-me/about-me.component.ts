import { Component, ViewChild } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { BioActions } from "app/bio/actions";
import { Favorite } from "app/bio/models";
import { getBio, getError, getFavorites } from "app/bio/selectors";
import { ProfileService } from "app/bio/services";
import { CollapsibleDirective } from "app/shared/directives";

@Component({
	selector: "about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent {
	@ViewChild(CollapsibleDirective) private subsection: CollapsibleDirective;

	public bio$: Observable<string> = this.store.pipe(select(getBio));
	public error$: Observable<boolean> = this.store.pipe(select(getError));
	public favorites$ = this.store.pipe(select(getFavorites));

	constructor(private store: Store<any>) {}

	public toggleFavorites(): void {
		this.subsection.toggle();
	}
}
