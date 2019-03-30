import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

import { BioAction, BioActionTypes } from "app/bio/actions";
import { Favorite } from "app/bio/models";

export interface BioState {
	bio: string;
	error: boolean;
	favorites: FavoritesState;
}

export interface FavoritesState extends EntityState<Favorite> {}

export const favoritesAdapter: EntityAdapter<Favorite> = createEntityAdapter<Favorite>({
	selectId: favorite => favorite._id,
});

export const initialBioState: BioState = {
	bio: null,
	error: false,
	favorites: favoritesAdapter.getInitialState(),
};

export function bioReducer(state = initialBioState, action: BioAction): BioState {
	switch (action.type) {
		case BioActionTypes.BioError:
			return { ...state, error: true };
		case BioActionTypes.BioLoaded:
			return { ...state, bio: action.payload.bio };
		case BioActionTypes.FavoritesLoaded:
			return { ...state, favorites: favoritesAdapter.addAll(action.payload.favorites, { ...state.favorites }) };
		default:
			return state;
	}
}
