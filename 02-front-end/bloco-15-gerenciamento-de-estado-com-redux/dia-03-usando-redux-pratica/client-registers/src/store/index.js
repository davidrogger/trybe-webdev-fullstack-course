import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer } from "./reducers/loginReducer";
import { recordCustomerReducer } from "./reducers/recordCustomerReducer";

const rootReducer = combineReducers({ loginReducer, recordCustomerReducer })

const store = createStore(rootReducer, composeWithDevTools())

export default store;