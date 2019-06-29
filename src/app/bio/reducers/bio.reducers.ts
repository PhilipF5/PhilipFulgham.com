import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { BioActions } from "app/bio/actions";
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

export const reducer = createReducer(
	initialBioState,
	on(BioActions.bioError, state => ({ ...state, error: true })),
	on(BioActions.bioLoaded, (state, { bio }) => ({ ...state, bio })),
	on(BioActions.favoritesLoaded, (state, { favorites }) => ({
		...state,
		favorites: favoritesAdapter.addAll(favorites, { ...state.favorites }),
	}))
);

export function bioReducer(state: BioState | undefined, action: Action) {
	return reducer(state, action);
}
