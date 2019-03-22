import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { BioActions, BioActionTypes } from "app/bio/actions";
import { ProfileService } from "app/bio/services";

@Injectable()
export class BioEffects {
	@Effect()
	loadBio$ = this.actions.pipe(
		ofType<BioActions.BioRequested>(BioActionTypes.BioRequested),
		mergeMap(() => this.profileService.getBio()),
		map(bio => new BioActions.BioLoaded({ bio }))
	);

	@Effect()
	loadFavorites$ = this.actions.pipe(
		ofType<BioActions.FavoritesRequested>(BioActionTypes.FavoritesRequested),
		mergeMap(() => this.profileService.getFavorites()),
		map(favorites => new BioActions.FavoritesLoaded({ favorites }))
	);

	constructor(private actions: Actions, private profileService: ProfileService) {}
}

export const EFFECTS = [BioEffects];
