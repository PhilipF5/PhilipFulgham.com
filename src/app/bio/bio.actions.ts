import { Action } from "@ngrx/store";
import { Favorite } from "app/bio/models";

export enum BioActionTypes {
	BioRequested = "[Profile API] Bio Requested",
	BioLoaded = "[Profile API] Bio Loaded",
	FavoritesRequested = "[Favorites API] Favorites Requested",
	FavoritesLoaded = "[Favorites API] Favorites Loaded",
}

export namespace BioActions {
	export class BioRequested implements Action {
		readonly type = BioActionTypes.BioRequested;
	}

	export class BioLoaded implements Action {
		readonly type = BioActionTypes.BioLoaded;

		constructor(public payload: { bio: string }) {}
	}

	export class FavoritesRequested implements Action {
		readonly type = BioActionTypes.FavoritesRequested;
	}

	export class FavoritesLoaded implements Action {
		readonly type = BioActionTypes.FavoritesLoaded;

		constructor(public payload: { favorites: Favorite[] }) {}
	}
}

export type BioAction =
	| BioActions.BioRequested
	| BioActions.BioLoaded
	| BioActions.FavoritesRequested
	| BioActions.FavoritesLoaded;
