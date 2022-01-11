import React, {useState} from "react";
import st from './Input.module.css'
import axios from "axios";
import {ApiKey} from "../../API/ApiKey";
import {setSearchFilmAction} from "../../Redux/Reducers";
import {useDispatch} from "react-redux";
import BaseUrl from "../../API/BaseUrl";

const Input = () => {
    const [ searchFilm, setSearchFilm ] = useState('');
    const dispatch = useDispatch();

    const fetchSearchFilm = async () => {
        debugger
        const response = await BaseUrl
            .get(`/search/movie?api_key=${ApiKey}&query=${searchFilm}`)
            .catch((err) => {
                console.log("Error ", err);
            });
        dispatch(setSearchFilmAction(response.data.results))
        console.log(response.data.results)
    }

    const handleOnSubmit = (e) => {
        debugger
        e.preventDefault();
        fetchSearchFilm();
        setSearchFilm("");
    }

    return (
        <div className={st.input}>
            <form onSubmit={handleOnSubmit}>
            <input className={st.input__body}
                   type="text"
                   placeholder={'Search...'}
                   value={searchFilm}
                   onChange={ (e) => setSearchFilm(e.target.value.toLowerCase())}/>
            </form>
        </div>
    )
}

export default Input;