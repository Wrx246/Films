import axios from "axios";
import { setConfirmedTokenAction, setRequestTokenAction, setSessionIdAction, setUsernameAction } from "../../Redux/AuthReducer";
import { ApiKey } from "../ApiKey";


const API_URL = "https://api.themoviedb.org/3";

const API = axios.create({
    // withCredentials: true,
    baseURL: API_URL
})

API.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('request_token')}`
    return config;
},
    (error) => Promise.reject(error)
);

export const fetchRegistration = () => {
    return async (dispatch) => {
        const response = await API
            .get(`/authentication/token/new?api_key=${ApiKey}`)
            .then(response => {
                dispatch(setRequestTokenAction(response.data.request_token))
                console.log(response);
            })
            .catch((err) => {
                console.log("Error ", err);
            });
        }
}


export const postRegistrationData = (username, password, request_token) => {
    return async (dispatch) => {
        const response = await API
            .post(`/authentication/token/validate_with_login?api_key=${ApiKey}`, {
                "username": username,
                "password": password,
                "request_token": request_token
            })
            .then(response => {
                dispatch(setConfirmedTokenAction(response.data.request_token))
                console.log(response)
            })
            .then(response => {
                dispatch(setUsernameAction(username))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}

export const createSessionId = (confirmed_token) => {
    return async (dispatch) => {
        const response = await API
            .post(`/authentication/session/new?api_key=${ApiKey}`, {
                "request_token": confirmed_token
            })
            .then(response => {
                dispatch(setSessionIdAction(response.data.session_id))
                // console.log(response)
            })
            .catch((err) => {
                console.log("Error ", err)
            })
    }
}

export default API;
