import { FETCH_MOVIES_SUCCESS } from "../constants";

export const moviesReducer = (state = {movies: [], isLoading: false}, action) => {
	switch (action.type) {
		case FETCH_MOVIES_SUCCESS: return { ...state, movies: action.payload.movies };
		default: return state;
	}
};
