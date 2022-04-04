import {applyMiddleware, combineReducers, createStore} from "redux";
import {movieReducer} from "./Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { authReducer } from "./AuthReducer";
import { accountReducer } from "./AccountReducer";

const reducers = combineReducers( {
    movieReducer: movieReducer,
    authReducer: authReducer,
    accountReducer: accountReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));