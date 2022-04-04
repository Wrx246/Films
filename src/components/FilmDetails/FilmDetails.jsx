import React, { useEffect } from "react";
import st from "./FilmDetails.module.css";
import axios from "axios";
import { ApiImage, ApiImageBig, ApiKey } from "../../API/ApiKey";
import { getFilmDetailsAction, removeSelectedMovieAction } from "../../Redux/Reducers";
import { addToWatchListAction } from "../../Redux/AccountReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import WatchButton from "../../UI/Buttons/WatchButton/WatchButton";
import Preloader from "../../UI/Preloader/Preloader";
import { fetchGetDetails } from "../../API/Services/FilmService";


const FilmDetails = () => {
    const movieDetails = useSelector((state) => state.movieReducer.movieDetails);
    const toggleIsFetching = useSelector((state) => state.movieReducer.isFetching);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { poster_path, release_date, title, runtime, budget, vote_average, overview } = movieDetails;

    useEffect(() => {
        dispatch(fetchGetDetails(id));
        return () => {
            dispatch(removeSelectedMovieAction());
        }
    }, [dispatch, id])

    const addToWatch = (movieDetails) => {
        // dispatch(addToWatchListAction(movieDetails));
    }

    if (toggleIsFetching === true) {
        return (
            <div className={st.details__wrapper}>
                <div className={st.preloader}>
                    <Preloader />
                </div>
            </div>
        )
    } else {
        return (
            <div className={st.details__wrapper}>
                <div className={st.details__body} key={id}>
                    <h2 className={st.details__title}>{movieDetails.title}</h2>
                    <div className={st.details__assets}>
                        <p className={st.details__date}>Release: <br />{movieDetails.release_date}</p>
                        <p className={st.details__vote}>Vote: {movieDetails.vote_average}</p>
                        <p className={st.details__count}>Budget: <br />{movieDetails.budget}$</p>
                        <p className={st.details__time}>Runtime: <br />{movieDetails.runtime} min</p>
                        <button type={"submit"} onClick={addToWatch(movieDetails)} className={st.details__button}>Add to favorite</button>
                    </div>
                    <div className={st.details__bottom}>
                        <p className={st.details__description}>{movieDetails.overview}</p>
                        <WatchButton />
                    </div>
                    <img className={st.details__img}
                        src={`${ApiImageBig}` + movieDetails.poster_path}
                        alt={movieDetails.title} />
                </div>
            </div>
        )
    }
}

export default FilmDetails;