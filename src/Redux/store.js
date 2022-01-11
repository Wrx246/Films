import {applyMiddleware, combineReducers, createStore} from "redux";
import {movieReducer} from "./Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";

const reducers = combineReducers( {
    movieReducer: movieReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));