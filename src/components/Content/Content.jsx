import React, {useEffect, useState} from "react";
import st from './Content.module.css';
import Popular from "../../UI/Cards/Popular/Popular";
import {useDispatch, useSelector} from "react-redux";
import BaseUrl from "../../API/BaseUrl";
import {ApiKey} from "../../API/ApiKey";
import {getPopularAction, getUpcomingAction, removeSearchFilmAction} from "../../Redux/Reducers";
import axios from "axios";
import {Link} from "react-router-dom";
import Upcoming from "../../UI/Cards/Upcoming/Upcoming";
import SearchCard from "../../UI/Cards/SearchCard/SearchCard";
// import {fetchGetPopular} from "../../Redux/AsyncActions/GetPopular";

const Content = () => {
    const searchFilm = useSelector( (state) => state.movieReducer.searchFilm);
    const dispatch = useDispatch();


    const fetchGetPopular = async () => {
        const response = await BaseUrl
            .get(`/movie/popular?api_key=${ApiKey}`)
            .catch((err) => {
                console.log("Error ", err);
            });
        dispatch(getPopularAction(response.data.results))
    }

    const fetchGetUpcoming = async () => {
        const response = await BaseUrl
            .get (`/movie/upcoming?api_key=${ApiKey}`)
            .catch((err) => {
                console.log("Error ", err);
            });
        dispatch(getUpcomingAction(response.data.results))
    }

    useEffect(() => {
        fetchGetUpcoming();
        fetchGetPopular();
    }, []);

    if (searchFilm.length === 0) {
        return (
            <div className={st.content}>
                <div className={st.popular__wrapper}>
                    <h1 className={st.popular__title}>
                        Popular today
                    </h1>
                    <div className={st.popular__list}>
                        <Popular/>
                    </div>
                </div>
                <div className={st.popular__wrapper}>
                    <h1 className={st.popular__title}>
                        Upcoming in cinema
                    </h1>
                    <div className={st.popular__list}>
                        <Upcoming/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={st.content}>
                <div className={st.popular__wrapper}>
                    <div className={st.popular__list}>
                        <SearchCard />
                    </div>
                </div>
            </div>
        )
    }


}

export default Content;