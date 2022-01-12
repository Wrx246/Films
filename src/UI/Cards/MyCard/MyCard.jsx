import React from "react";
import st from './MyCard.module.css';
import {ApiImageNormal} from "../../../API/ApiKey";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const MyCard = () => {
    const movieList = useSelector((state) => state.movieReducer.watchList);
    const { poster_path, id, title } = movieList;


    return (
        <div className={st.myCard__wrapper}>
            <Link to={`/movie/${movieList.id}`} className={st.title__body}>
                <img className={st.myCard__poster} src={`${ApiImageNormal}` + poster_path} alt={title}/>
                <button className={st.myCard__button} type="button">X</button>
                <p className={st.MyCard__title}>{title}</p>
            </Link>
        </div>
    )
}

export default MyCard;