import axios from "axios";
import { 
    getFilmDetailsAction, 
    getPopularAction, 
    getTopRatedAction, 
    getUpcomingAction, 
    setSearchFilmAction, 
    toggleIsFetchingAction} from "../../Redux/Reducers";
import { ApiKey } from "../ApiKey";
import API from "./AuthService";


export const fetchGetPopular = () => {
    return async (dispatch) => {
        const response = await API
            .get(`/movie/popular?api_key=${ApiKey}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(getPopularAction(response.data.results))
            })
        
    }

}

export const fetchGetUpcoming = () => {
    return async (dispatch) => {
        const response = await API
            .get(`/movie/upcoming?api_key=${ApiKey}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(getUpcomingAction(response.data.results))
            })
    }
}

export const fetchGetDetails = (id) => {
    return async (dispatch) => {
        const response = await API
            .get(`/movie/${id}?api_key=${ApiKey}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(getFilmDetailsAction(response.data))
            })
    }
}

export const fetchGetTopRated = () => {
    return async (dispatch) => {
        const response = await API
            .get(`/movie/top_rated?api_key=${ApiKey}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(getTopRatedAction(response.data.results))
            })
    }
}

export const fetchSearchFilm = (searchFilm) => {
    return async (dispatch) => {
        const response = await API
            .get(`/search/movie?api_key=${ApiKey}&query=${searchFilm}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(setSearchFilmAction(response.data.results))
            })
    }
}