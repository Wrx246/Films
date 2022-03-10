import React, {useEffect} from "react";
import st from './Content.module.css';
import Popular from "../../UI/Cards/Popular/Popular";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Upcoming from "../../UI/Cards/Upcoming/Upcoming";
import SearchCard from "../../UI/Cards/SearchCard/SearchCard";
import { fetchGetPopular, fetchGetUpcoming } from "../../API/Services/FilmService";


const Content = () => {
    const searchFilm = useSelector( (state) => state.movieReducer.searchFilm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetPopular());
        dispatch(fetchGetUpcoming());
    }, [dispatch]);

    if (searchFilm.length === 0) {
        return (
            <div className={st.content}>
                <div className={st.popular__wrapper}>
                    <h1 className={st.popular__title}>
                        Popular today
                    </h1>
                    <div className={st.popular__list}>
                        <Popular />
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