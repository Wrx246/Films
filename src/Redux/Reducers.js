export const GET_POPULAR = "GET_POPULAR";
export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_FILM_DETAILS = "GET_FILM_DETAILS";

const initialState = {
    movie: [],
    movieDetails: [],
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_POPULAR:
            return {...state, movie: payload};
        case GET_TOP_RATED:
            return {...state, movie: payload};
        case GET_FILM_DETAILS:
            return {...state, movieDetails: payload};
        default:
            return state;
    }
}

export const getPopularAction = (payload) => ({type: GET_POPULAR, payload});
export const getTopRatedAction = (payload) => ({type: GET_TOP_RATED, payload});
export const getFilmDetailsAction = (payload) => ({type: GET_FILM_DETAILS, payload});