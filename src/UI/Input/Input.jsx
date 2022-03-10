import React, {useState} from "react";
import st from './Input.module.css'
import {useDispatch} from "react-redux";
import { fetchSearchFilm } from "../../API/Services/FilmService";

const Input = () => {
    const [ searchFilm, setSearchFilm ] = useState('');
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearchFilm(searchFilm));
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