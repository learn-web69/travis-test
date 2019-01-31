import { FETCH_MOVIES_SUCCESS } from "../constants";

export const fetchMoviesSuccess = movies => ({
	type: FETCH_MOVIES_SUCCESS,
	payload: {
		movies
	}
});

export const fetchMovies = () => dispatch => {
	const movies = [
		{id: 1, title: 'First'},
		{id: 2, title: 'Second'},
		{id:3, title: 'Third'}
		];

	setTimeout(() => {
		dispatch(fetchMoviesSuccess(movies));
	}, 0);
};