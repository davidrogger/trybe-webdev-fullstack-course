import { createStore, combineReducers } from 'redux';
import moveCarReducer from './reducers/carsReducer';
import signalColorReducer from './reducers/signalReducer';

const reducer = combineReducers({ signalColorReducer, moveCarReducer })

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
