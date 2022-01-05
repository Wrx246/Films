import React, {useEffect} from "react";
import st from './Popular.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchGetPopular} from "../../../Redux/AsyncActions/GetPopular";
import BaseUrl from "../../../API/BaseUrl";
import {ApiKey} from "../../../API/ApiKey";
import {getPopularAction} from "../../../Redux/Reducers";
import baseUrl from "../../../API/BaseUrl";

const Popular = () => {
    const movie = useSelector((state) => state.movieReducer.movie);

    const renderPopular = movie.map((movie) => {
        const {id, poster_path, title, vote_average} = movie;
        return (
            <div className={st.popular__wrapper} key={id}>
                <div className={st.popular__pic}>
                    <img className={st.pic__body} src={"http://image.tmdb.org/t/p/w300/"+movie.poster_path} alt={movie.title}/>
                </div>
                <div className={st.popular__title}>
                    <h3>{movie.title}</h3>
                </div>
                <div className={st.popular__rate}>
                    <p>{movie.vote_average}</p>
                </div>
            </div>
        )
    })
    return (
        <>{renderPopular}</>
    )
}

export default Popular;