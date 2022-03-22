export const LOGIN = "LOGIN";
export const REGISTRATION = "REGISTRATION";


const initialState = {
    token: '',
    firstName: '',
    email: '',
    password: '',
    isLogin: false,
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN:
            return {
                
            }
        case REGISTRATION:
            return {
                ...state,
                token: [...state.token, payload]
            }
        default:
            return state;
    }
}

export const loginAction = (payload) => ({type: LOGIN, payload});
export const registrationAction = (payload) => ({type: REGISTRATION, payload});
