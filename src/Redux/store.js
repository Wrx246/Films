import {applyMiddleware, combineReducers, createStore} from "redux";
import {movieReducer} from "./Reducers";
import thunk from "redux-thunk";

const reducers = combineReducers( {
    movieReducer: movieReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk));