import {fetchMoviesSuccess} from "./index";
import {FETCH_MOVIES_SUCCESS} from "../constants";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('actions', () => {
	describe('sync', () => {
		it('should return an action for fetching movies successfully', () => {
			const movies = [{id: 1, title: 'First'}, {id: 2, title: 'Second'}];
			const expectedAction = {
				type: FETCH_MOVIES_SUCCESS,
				payload: {
					movies
				}
			};

			expect(fetchMoviesSuccess(movies)).toEqual(expectedAction);
		});
	});

	describe('async', () => {
		const middlewares = [thunk];
		const mockStore = configureMockStore(middlewares);

		it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
			const expectedActions = [
				{ type: types.FETCH_TODOS_REQUEST },
				{ type: types.FETCH_TODOS_SUCCESS, payload: { todos: [{}] } }
			]
		});
	});
});