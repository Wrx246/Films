export const SET_REQUEST_TOKEN = "SET_REQUEST_TOKEN";
export const SET_CONFIRMED_TOKEN = "SET_CONFIRMED_TOKEN";
export const SET_SESSION_ID = "SET_SESSION_ID";
export const SET_USERNAME = "SET_USERNAME";
export const SET_IS_LOGIN = "SET_IS_LOGIN";



const initialState = {
    request_token: null,
    confirmed_token: null,
    session_id: null,
    username: null,
    isLogin: false,
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_REQUEST_TOKEN:
            return {
                ...state, request_token: payload
            }
        case SET_CONFIRMED_TOKEN:
            return {
                ...state, confirmed_token: payload
            }
        case SET_SESSION_ID:
            return {
                ...state, session_id: payload
            }
        case SET_USERNAME:
            return {
                ...state, username: payload
            }
        case SET_IS_LOGIN:
            return {
                ...state, isLogin: payload
            }
        default:
            return state;
    }
}


export const setRequestTokenAction = (payload) => ({type: SET_REQUEST_TOKEN, payload});
export const setConfirmedTokenAction = (payload) => ({type: SET_CONFIRMED_TOKEN, payload});
export const setSessionIdAction = (payload) => ({type: SET_SESSION_ID, payload});
export const setUsernameAction = (payload) => ({type: SET_USERNAME, payload});
export const setIsLoginAction = (payload) => ({type: SET_IS_LOGIN, payload})
