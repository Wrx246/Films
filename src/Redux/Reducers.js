export const GET_POPULAR = "GET_POPULAR";
export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const GET_FILM_DETAILS = "GET_FILM_DETAILS";
export const REMOVE_SELECTED_MOVIE = "REMOVE_SELECTED_MOVIE";
export const GET_UPCOMING = "GET_UPCOMING";
export const SET_SEARCH_FILMS = "SET_SEARCH_FILMS";
export const REMOVE_SEARCH_FILM = "REMOVE_SEARCH_FILM";
export const SORT_TOP_FILMS = "SORT_TOP_FILMS";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const GET_FILM_TRAILER = "GET_FILM_TRAILER";
export const GET_SIMILAR_MOVIES = "GET_SIMILAR_MOVIES";

const initialState = {
    movie: [],
    upcomingMovie: [],
    nowPlaying: [],
    movieDetails: [],
    searchFilm: [],
    trailer: [],
    similarMovies: [],
    isFetching: true,
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POPULAR:
            return { ...state, movie: payload };
        case GET_UPCOMING:
            return { ...state, upcomingMovie: payload };
        case GET_NOW_PLAYING:
            return { ...state, nowPlaying: payload };
        case GET_SIMILAR_MOVIES:
            return { ...state, similarMovies: payload }
        case GET_TOP_RATED:
            return { ...state, movie: payload };
        case GET_FILM_DETAILS:
            return { ...state, movieDetails: payload };
        case REMOVE_SELECTED_MOVIE:
            return { ...state, movieDetails: [] };
        case SET_SEARCH_FILMS:
            return { ...state, searchFilm: payload };
        case REMOVE_SEARCH_FILM:
            return { ...state, searchFilm: [] };
        case SORT_TOP_FILMS:
            return { ...state, movie: state.movie.slice().sort((a, b) => a[payload].toString().localeCompare(b[payload])) };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: payload };
        case GET_FILM_TRAILER:
            return { ...state, trailer: payload };
        default:
            return state;
    }
}

export const getPopularAction = (payload) => ({ type: GET_POPULAR, payload });
export const getTopRatedAction = (payload) => ({ type: GET_TOP_RATED, payload });
export const getNowPlayingAction = (payload) => ({ type: GET_NOW_PLAYING, payload })
export const getFilmDetailsAction = (payload) => ({ type: GET_FILM_DETAILS, payload });
export const removeSelectedMovieAction = () => ({ type: REMOVE_SELECTED_MOVIE });
export const getUpcomingAction = (payload) => ({ type: GET_UPCOMING, payload });
export const setSearchFilmAction = (payload) => ({ type: SET_SEARCH_FILMS, payload });
export const removeSearchFilmAction = () => ({ type: REMOVE_SEARCH_FILM });
export const sortTopFilmsAction = (payload) => ({ type: SORT_TOP_FILMS, payload });
export const toggleIsFetchingAction = (payload) => ({ type: TOGGLE_IS_FETCHING, payload });
export const getFilmTrailerAction = (payload) => ({ type: GET_FILM_TRAILER, payload });
export const getSimilarMoviesAction = (payload) => ({ type: GET_SIMILAR_MOVIES, payload})