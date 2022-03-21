import axios from "axios";
import { registrationAction } from "../../Redux/AuthReducer";
import { ApiKey } from "../ApiKey";


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

// API.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('request_token')}`
//     return config;
// },
//     (error) => Promise.reject(error)
// );

export const fetchRegistration = () => {
    return async (dispatch) => {
        const response = await API
            .get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${ApiKey}`)
            .catch((err) => {
                console.log("Error ", err);
            });
        localStorage.setItem('request_token', response.data.request_token)
        dispatch(registrationAction(response.data))
        console.log(response);
        window.open(`https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://localhost:3000/registration`)
    }
}

// export const postRegistrationData = () => {
//     const authKey = localStorage.getItem('request_token')
//     return async (dispatch) => {
//         fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${ApiKey}`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 request_token: authKey,
//             })
//         })
//     }
// }

export const postRegistrationData = (firstName, password) => {
    const authKey = localStorage.getItem('request_token')
    const settings = {
        // "username": firstName,
        // "password": password,
        "request_token": authKey
    }
    return async () => {
        const response = await API
            .post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${ApiKey}`, settings)
            .then(response => {
                console.log(response)
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}

// export const redirectRegistration = () => {
//     const authKey = localStorage.getItem('request_token')
//     if (authKey) {
//         // <Route>
//         //     <Redirect to={`https://www.themoviedb.org/authenticate/${request_token}`} />
//         // </Route>
//         window.open(`https://www.themoviedb.org/authenticate/${authKey}?redirect_to=http://localhost:3000/registration`)
//     }
// }



export default API;
