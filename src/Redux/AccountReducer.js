export const ADD_TO_WATCH_LIST = "ADD_TO_WATCH_LIST";
export const ACCOUNT_ID = "ACCOUNT_ID";
export const CHECK_FAVORITE_MOVIE = "CHECK_FAVORITE_MOVIE";



const initialState = {
    accountId: [],
    watchList: [],
    checkWatchList: [],
}


export const accountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACCOUNT_ID:
            return { ...state, accountIdl: payload };
        case ADD_TO_WATCH_LIST:
            return { ...state, watchList: payload };
        case CHECK_FAVORITE_MOVIE:
            return {
                ...state, checkWatchList: state.watchList.find(movie => state.watchList.id === movie.payload)
            }
        default:
            return state;
    }
}

export const addToWatchListAction = (payload) => ({ type: ADD_TO_WATCH_LIST, payload });
export const createAccountId = (payload) => ({ type: ACCOUNT_ID, payload });
export const checkFavoriteMovieAction = (payload) => ({ type: CHECK_FAVORITE_MOVIE, payload });
