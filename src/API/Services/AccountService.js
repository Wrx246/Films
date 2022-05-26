import { addToWatchListAction, checkFavoriteMovieAction, getWatchListAction } from "../../Redux/AccountReducer";
import { ApiKey } from "../ApiKey";
import API from "./AuthService";


const accountId = localStorage.getItem('accountId')
const session_id = localStorage.getItem('sessionId')



export const addToWatchList = (movieId) => {
    return async (dispatch) => {
        await API
            .post(`/account/${accountId}/watchlist?api_key=${ApiKey}&language=en-US&page=1&session_id=${session_id}`, {
                "media_type": "movie",
                "media_id": movieId,
                "watchlist": true,
            })
            .then(response => {
                dispatch(getWatchListAction(true))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}

export const removeFromWatchList = (id) => {
    return async (dispatch) => {
        await API
            .post(`/account/${accountId}/watchlist?api_key=${ApiKey}&language=en-US&page=1&session_id=${session_id}`, {
                "media_type": "movie",
                "media_id": id,
                "watchlist": false
            })
            .then(response => {
                dispatch(getWatchListAction(false))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}


export const getWatchList = (movieId) => {
    return async (dispatch) => {
        await API
            .get(`/account/${accountId}/watchlist/movies?api_key=${ApiKey}&language=en-US&session_id=${session_id}&sort_by=created_at.asc&page=1`)
            .then(response => {
                dispatch(addToWatchListAction(response.data.results))
            })
            .then(response => {
                dispatch(checkFavoriteMovieAction(movieId))
            })
    }
}