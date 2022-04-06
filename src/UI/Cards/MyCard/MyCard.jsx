import React from "react";
import st from './MyCard.module.css';
import {ApiImageBig, ApiImageNormal} from "../../../API/ApiKey";
import {Link} from "react-router-dom";

const MyCard = ({watchList, removeFilm}) => {

    const {id, title, poster_path} = watchList;

    const handleSubmit = (e) => {
        e.preventDefault();
        removeFilm(id)
    }

    return (
        <div className={st.myCard__wrapper}>
            <Link to={`/movie/${id}`} className={st.title__body}>
                <img className={st.myCard__poster} src={`${ApiImageBig}` + poster_path} alt={title}/>
                <button onClick={handleSubmit} className={st.myCard__button} type="button">X</button>
                {/* <p className={st.MyCard__title}>{title}</p> */}
            </Link>
        </div>
    )
}

export default MyCard;