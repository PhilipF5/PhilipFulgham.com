import { createAction, props } from "@ngrx/store";
import { Favorite } from "app/bio/models";

export namespace BioActions {
	export const bioError = createAction("[Profile API] Bio Error");
	export const bioRequested = createAction("[Profile API] Bio Requested");
	export const bioLoaded = createAction("[Profile API] Bio Loaded", props<{ bio: string }>());
	export const favoritesRequested = createAction("[Favorites API] Favorites Requested");
	export const favoritesLoaded = createAction("[Favorites API] Favorites Loaded", props<{ favorites: Favorite[] }>());
}
