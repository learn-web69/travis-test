import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { moviesReducer } from './reducers';

const rootReducer = combineReducers({
	movies: moviesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;