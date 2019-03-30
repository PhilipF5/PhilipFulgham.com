import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import { BioActions, BioActionTypes } from "app/bio/actions";
import { ProfileService } from "app/bio/services";

@Injectable()
export class BioEffects {
	@Effect()
	loadBio$ = this.actions.pipe(
		ofType<BioActions.BioRequested>(BioActionTypes.BioRequested),
		switchMap(() =>
			this.profileService.getBio().pipe(
				map(bio => new BioActions.BioLoaded({ bio })),
				catchError(() => of(new BioActions.BioError()))
			)
		)
	);

	@Effect()
	loadFavorites$ = this.actions.pipe(
		ofType<BioActions.FavoritesRequested>(BioActionTypes.FavoritesRequested),
		switchMap(() =>
			this.profileService.getFavorites().pipe(
				map(favorites => new BioActions.FavoritesLoaded({ favorites })),
				catchError(() => of(new BioActions.BioError()))
			)
		)
	);

	constructor(private actions: Actions, private profileService: ProfileService) {}
}

export const EFFECTS = [BioEffects];
