import {
    getFilmDetailsAction,
    getFilmTrailerAction,
    getPopularAction,
    getTopRatedAction,
    getUpcomingAction,
    setSearchFilmAction,
    toggleIsFetchingAction
} from "../../Redux/Reducers";
import { ApiKey } from "../ApiKey";
import API from "./AuthService";


export const fetchGetPopular = () => {
    return async (dispatch) => {
        await API
            .get(`/movie/popular?api_key=${ApiKey}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(getPopularAction(response.data.results))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }

}

export const fetchGetUpcoming = () => {
    return async (dispatch) => {
        await API
            .get(`/movie/upcoming?api_key=${ApiKey}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(getUpcomingAction(response.data.results))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}

export const fetchGetDetails = (id) => {
    return async (dispatch) => {
        await API
            .get(`/movie/${id}?api_key=${ApiKey}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(getFilmDetailsAction(response.data))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}

export const fetchGetTopRated = () => {
    return async (dispatch) => {
        await API
            .get(`/movie/top_rated?api_key=${ApiKey}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(getTopRatedAction(response.data.results))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}

export const fetchSearchFilm = (searchFilm) => {
    return async (dispatch) => {
        await API
            .get(`/search/movie?api_key=${ApiKey}&query=${searchFilm}`)
            .then(response => {
                dispatch(toggleIsFetchingAction(false))
                dispatch(setSearchFilmAction(response.data.results))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}

export const fetchGetTrailer = (id) => {
    return async (dispatch) => {
        await API
            .get(`/movie/${id}/videos?api_key=${ApiKey}`)
            .then(response => {
                dispatch(getFilmTrailerAction(response.data.results))
                localStorage.setItem('trailerKey', response.data.results[0].key);
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}