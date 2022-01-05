export const GET_POPULAR = "GET_POPULAR";
export const GET_TOP_RATED = "GET_TOP_RATED";

const initialState = {
    movie: [],
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_POPULAR:
            return {...state, movie: payload};
        case GET_TOP_RATED:
            return {...state, movie: payload};
        default:
            return state;
    }
}

export const getPopularAction = (payload) => ({type: GET_POPULAR, payload});
export const getTopRatedAction = (payload) => ({type: GET_TOP_RATED, payload});