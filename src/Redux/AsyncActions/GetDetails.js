import axios from "axios";
import {ApiKey} from "../../API/ApiKey";
import {getFilmDetailsAction} from "../Reducers";
import {useDispatch} from "react-redux";


//  export const fetchGetDetails = async (id) => {
//     const response = await axios
//         .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`)
//         .catch((err) => {
//             console.log("Error ", err);
//         });
//     return response.data;
// }