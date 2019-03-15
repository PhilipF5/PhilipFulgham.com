import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { BioState, favoritesAdapter } from "./bio.reducers";

const fromFavorites = favoritesAdapter.getSelectors();

export const selectBioState = createFeatureSelector<BioState>("bio");

const selectFavoritesState = createSelector(
	selectBioState,
	bioState => {
		return bioState.favorites;
	}
);

export const getBio = createSelector(
	selectBioState,
	bioState => {
		return bioState.bio;
	}
);

export const getFavorites = createSelector(
	selectFavoritesState,
	fromFavorites.selectAll
);
