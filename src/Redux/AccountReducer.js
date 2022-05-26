export const ADD_TO_WATCH_LIST = "ADD_TO_WATCH_LIST";
export const ACCOUNT_ID = "ACCOUNT_ID";
export const CHECK_FAVORITE_MOVIE = "CHECK_FAVORITE_MOVIE";
export const GET_WATCH_LIST = "GET_WATCH_LIST";



const initialState = {
    accountId: [],
    inWatchList: false,
    watchList: [],
    checkWatchList: [],
}


export const accountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACCOUNT_ID:
            return { ...state, accountId: payload };
        case ADD_TO_WATCH_LIST:
            return { ...state, watchList: payload };
        case CHECK_FAVORITE_MOVIE:
            return {
                ...state, checkWatchList: state.watchList.find(movie => movie.id === payload).id
            }
        case GET_WATCH_LIST:
            return { ...state, inWatchList: payload }
        default:
            return state;
    }
}

export const addToWatchListAction = (payload) => ({ type: ADD_TO_WATCH_LIST, payload });
export const createAccountId = (payload) => ({ type: ACCOUNT_ID, payload });
export const checkFavoriteMovieAction = (payload) => ({ type: CHECK_FAVORITE_MOVIE, payload });
export const getWatchListAction = (payload) => ({type: GET_WATCH_LIST, payload})
