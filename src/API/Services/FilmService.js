import axios from "axios";
import { 
    getFilmDetailsAction, 
    getPopularAction, 
    getTopRatedAction, 
    getUpcomingAction, 
    setSearchFilmAction } from "../../Redux/Reducers";
import { ApiKey } from "../ApiKey";
import API from "./AuthService";


export const fetchGetPopular = () => {
    return async (dispatch) => {
        const response = await API
            .get(`/movie/popular?api_key=${ApiKey}`)
        dispatch(getPopularAction(response.data.results))
    }

}

export const fetchGetUpcoming = () => {
    return async (dispatch) => {
        const response = await API
            .get(`/movie/upcoming?api_key=${ApiKey}`)
        dispatch(getUpcomingAction(response.data.results))
    }
}

export const fetchGetDetails = (id) => {
    return async (dispatch) => {
        const response = await axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`)
        dispatch(getFilmDetailsAction(response.data))
    }
}

export const fetchGetTopRated = () => {
    return async (dispatch) => {
        const response = await axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`)
        dispatch(getTopRatedAction(response.data.results))
    }
}

export const fetchSearchFilm = (searchFilm) => {
    return async (dispatch) => {
        const response = await API
            .get(`/search/movie?api_key=${ApiKey}&query=${searchFilm}`)
        dispatch(setSearchFilmAction(response.data.results))
    }
}