import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { BioActionTypes, BioLoaded, BioRequested, FavoritesLoaded, FavoritesRequested } from "app/bio/bio.actions";
import { ProfileService } from "app/bio/services";

@Injectable()
export class BioEffects {
	@Effect()
	loadBio$ = this.actions.pipe(
		ofType<BioRequested>(BioActionTypes.BioRequested),
		mergeMap(() => this.profileService.getBio()),
		map(bio => new BioLoaded({ bio }))
	);

	@Effect()
	loadFavorites$ = this.actions.pipe(
		ofType<FavoritesRequested>(BioActionTypes.FavoritesRequested),
		mergeMap(() => this.profileService.getFavorites()),
		map(favorites => new FavoritesLoaded({ favorites }))
	);

	constructor(private actions: Actions, private profileService: ProfileService) {}
}

export const EFFECTS = [BioEffects];
