import { combineReducers, createStore } from 'redux';

const tempReducer = {}

const rootReducer = combineReducers({ tempReducer });

const store = createStore(rootReducer);

export default store;