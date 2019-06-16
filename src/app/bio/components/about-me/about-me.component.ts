import { Component, ViewChild } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getBio, getBioError, getFavorites } from "app/bio/selectors";
import { CollapsibleDirective } from "app/shared/directives";
import { Observable } from "rxjs";

@Component({
	selector: "pf-about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent {
	@ViewChild(CollapsibleDirective, { static: false }) private subsection: CollapsibleDirective;

	public bio$: Observable<string> = this.store.pipe(select(getBio));
	public error$: Observable<boolean> = this.store.pipe(select(getBioError));
	public favorites$ = this.store.pipe(select(getFavorites));

	constructor(private store: Store<any>) {}

	public toggleFavorites(): void {
		this.subsection.toggle();
	}
}
