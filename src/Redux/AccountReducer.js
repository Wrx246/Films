export const ADD_TO_WATCH_LIST = "ADD_TO_WATCH_LIST";
export const ACCOUNT_ID = "ACCOUNT_ID";



const initialState = {
    accountId: [],
    watchList: [],
}


export const accountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACCOUNT_ID:
            return{ ...state, accountIdl: payload };
        case ADD_TO_WATCH_LIST:
            return { ...state, watchList: payload };
        default:
            return state;
    }
}

export const addToWatchListAction = (payload) => ({ type: ADD_TO_WATCH_LIST, payload });
export const createAccountId = (payload) => ({ type: ACCOUNT_ID, payload });
