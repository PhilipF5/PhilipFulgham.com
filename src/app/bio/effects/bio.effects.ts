import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { BioActions } from "app/bio/actions";
import { ProfileService } from "app/bio/services";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

@Injectable()
export class BioEffects {
	@Effect()
	loadBio$ = this.actions.pipe(
		ofType(BioActions.bioRequested),
		switchMap(() =>
			this.profileService.getBio().pipe(
				map(bio => BioActions.bioLoaded({ bio })),
				catchError(() => of(BioActions.bioError()))
			)
		)
	);

	@Effect()
	loadFavorites$ = this.actions.pipe(
		ofType(BioActions.favoritesRequested),
		switchMap(() =>
			this.profileService.getFavorites().pipe(
				map(favorites => BioActions.favoritesLoaded({ favorites })),
				catchError(() => of(BioActions.bioError()))
			)
		)
	);

	constructor(private actions: Actions, private profileService: ProfileService) {}
}

export const EFFECTS = [BioEffects];
