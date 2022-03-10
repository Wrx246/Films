export const LOGIN = "LOGIN";
export const REGISTRATION = "REGISTRATION";


const initialState = {
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
                isLogin: true,
                firstName: [...state.firstName, payload.firstName],
                email: [...state.email, payload.email],
                password: [...state.password, payload.password],
            }
        default:
            return state;
    }
}

export const loginAction = (payload) => ({type: LOGIN, payload});
export const registrationAction = (payload) => ({type: REGISTRATION, payload});
