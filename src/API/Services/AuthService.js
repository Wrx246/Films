import axios from "axios";


// export const userService = {
//     registration,
//     login,
//     logout,
// }

const API_URL = "https://api.themoviedb.org/3";

const API = axios.create({
    // withCredentials: true,
    baseURL: API_URL
})

API.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('request_token')}`
    return config;
},
    (error) => Promise.reject(error)
);

export default API;
