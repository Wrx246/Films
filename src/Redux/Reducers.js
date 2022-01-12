export const GET_POPULAR = "GET_POPULAR";
export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_FILM_DETAILS = "GET_FILM_DETAILS";
export const ADD_TO_WATCH_LIST = "ADD_TO_WATCH_LIST";
export const REMOVE_SELECTED_MOVIE = "REMOVE_SELECTED_MOVIE";
export const GET_UPCOMING = "GET_UPCOMING";
export const SET_SEARCH_FILMS = "SET_SEARCH_FILMS";
export const REMOVE_SEARCH_FILM = "REMOVE_SEARCH_FILM";

const initialState = {
    movie: [],
    upcomingMovie: [],
    movieDetails: [],
    watchList: [],
    searchFilm: [],
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_POPULAR:
            return {...state, movie: payload};
        case GET_UPCOMING:
            return {...state, upcomingMovie: payload}
        case GET_TOP_RATED:
            return {...state, movie: payload};
        case GET_FILM_DETAILS:
            return {...state, movieDetails: payload};
        case ADD_TO_WATCH_LIST:
            return {...state, watchList: payload};
        case REMOVE_SELECTED_MOVIE:
            return {...state, movieDetails: []};
        case SET_SEARCH_FILMS:
            return {...state, searchFilm: payload};
        case REMOVE_SEARCH_FILM:
            return {...state, searchFilm: []};
        default:
            return state;
    }
}

export const getPopularAction = (payload) => ({type: GET_POPULAR, payload});
export const getTopRatedAction = (payload) => ({type: GET_TOP_RATED, payload});
export const getFilmDetailsAction = (payload) => ({type: GET_FILM_DETAILS, payload});
export const removeSelectedMovieAction = () => ({type: REMOVE_SELECTED_MOVIE});
export const addToWatchListAction = (payload) => ({type: ADD_TO_WATCH_LIST, payload});
export const getUpcomingAction = (payload) => ({type: GET_UPCOMING, payload});
export const setSearchFilmAction = (payload) => ({type: SET_SEARCH_FILMS, payload});
export const removeSearchFilmAction = () => ({type: REMOVE_SEARCH_FILM});