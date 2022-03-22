import axios from "axios";
import { registrationAction } from "../../Redux/AuthReducer";
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
                localStorage.setItem('request_token', response.data.request_token)
                // localStorage.getItem('request_token')
                dispatch(registrationAction(response.data.request_token))
                window.open(`https://www.themoviedb.org/authenticate/${response.data.request_token}`)
                console.log(response);
            })
            .catch((err) => {
                console.log("Error ", err);
            });
        }
}


export const postRegistrationData = (token) => {
    const settings = {
        "request_token": token
    }
    return async () => {
        const response = await API
            .post(`/authentication/session/new?api_key=${ApiKey}`, settings)
            .then(response => {
                console.log(response)
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}

export default API;
