import { Action } from "@ngrx/store";
import { Favorite } from "app/bio/models";

export enum BioActionTypes {
	BioError = "[Profile API] Bio Error",
	BioRequested = "[Profile API] Bio Requested",
	BioLoaded = "[Profile API] Bio Loaded",
	FavoritesError = "[Favorites API] Favorites Error",
	FavoritesRequested = "[Favorites API] Favorites Requested",
	FavoritesLoaded = "[Favorites API] Favorites Loaded",
}

export namespace BioActions {
	export class BioError implements Action {
		readonly type = BioActionTypes.BioError;
	}

	export class BioRequested implements Action {
		readonly type = BioActionTypes.BioRequested;
	}

	export class BioLoaded implements Action {
		readonly type = BioActionTypes.BioLoaded;

		constructor(public payload: { bio: string }) {}
	}

	export class FavoritesError implements Action {
		readonly type = BioActionTypes.FavoritesError;
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
	| BioActions.BioError
	| BioActions.BioRequested
	| BioActions.BioLoaded
	| BioActions.FavoritesError
	| BioActions.FavoritesRequested
	| BioActions.FavoritesLoaded;
