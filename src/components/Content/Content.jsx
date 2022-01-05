import React, {useEffect, useState} from "react";
import st from './Content.module.css';
import Popular from "../../UI/Cards/Popular/Popular";
import {useDispatch, useSelector} from "react-redux";
import BaseUrl from "../../API/BaseUrl";
import {ApiKey} from "../../API/ApiKey";
import {getPopularAction} from "../../Redux/Reducers";
import axios from "axios";
// import {fetchGetPopular} from "../../Redux/AsyncActions/GetPopular";

const Content = () => {
    const filmsData = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchGetPopular = async () => {
        const response = await axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)
            .catch((err) => {
                console.log("Error ", err);
            });
        dispatch(getPopularAction(response.data.results))
    }

    useEffect(() => {
        fetchGetPopular();
    }, []);

    return (
        <div className={st.content}>
            <div className={st.popular__wrapper}>
                <h1 className={st.popular__title}>
                    Popular today
                </h1>
                <div className={st.popular__list}>
                    {/*{movies.length > 0 && movies.map( movie => {<Popular key={movie.id} {...movie} />})}*/}
                    <Popular/>
                </div>
            </div>
        </div>
    )
}

export default Content;