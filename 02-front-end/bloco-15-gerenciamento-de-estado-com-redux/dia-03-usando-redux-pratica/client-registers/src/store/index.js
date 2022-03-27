import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer } from "./reducers/loginReducer";

const rootReducer = combineReducers({ loginReducer })

const store = createStore(rootReducer, composeWithDevTools())

export default store;