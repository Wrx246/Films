import React, { useEffect } from "react";
import st from './Content.module.css';
import Popular from "../../UI/Cards/Popular/Popular";
import { useDispatch, useSelector } from "react-redux";
import Upcoming from "../../UI/Cards/Upcoming/Upcoming";
import { fetchGetPopular, fetchGetUpcoming } from "../../API/Services/FilmService";
import Preloader from "../../UI/Preloader/Preloader";


const Content = () => {
    const toggleIsFetching = useSelector((state) => state.movieReducer.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetPopular());
        dispatch(fetchGetUpcoming());
    }, []);

        if (toggleIsFetching === true) {
            return (
                <div className={st.content}>
                    <div className={st.popular__wrapper}>
                        <h1 className={st.popular__title}>
                            Popular today
                        </h1>
                        <div className={st.preloader}>
                            <Preloader />
                        </div>
                    </div>
                    <div className={st.popular__wrapper}>
                        <h1 className={st.popular__title}>
                            Upcoming in cinema
                        </h1>
                        <div className={st.preloader}>
                            <Preloader />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={st.content}>
                    <div className={st.popular__wrapper}>
                        <h1 className={st.popular__title}>
                            Popular today
                        </h1>
                        <div className={st.popular__list}>
                            <Popular toggleIsFetching={toggleIsFetching} />
                        </div>
                    </div>
                    <div className={st.popular__wrapper}>
                        <h1 className={st.popular__title}>
                            Upcoming in cinema
                        </h1>
                        <div className={st.popular__list}>
                            <Upcoming />
                        </div>
                    </div>
                </div>
            )
        }
}

export default Content;