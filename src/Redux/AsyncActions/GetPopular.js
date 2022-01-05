import axios from "axios";
import {useEffect} from "react";
import BaseUrl from "../../API/BaseUrl";
import {ApiKey} from "../../API/ApiKey";
import {GET_POPULAR, getPopularAction} from "../Reducers";
import {useDispatch} from "react-redux";

// export const fetchGetPopular = async (dispatch) => {
//     const response = await BaseUrl.get(`/movie/popular?api_key=${ApiKey}`);
//     dispatch({ type: GET_POPULAR, payload: response.data })
// }

