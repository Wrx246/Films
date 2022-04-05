import React, { useEffect, useState } from "react";
import st from "./FilmDetails.module.css";
import axios from "axios";
import { ApiImage, ApiImageBig, ApiKey } from "../../API/ApiKey";
import { getFilmDetailsAction, removeSelectedMovieAction } from "../../Redux/Reducers";
import { addToWatchListAction } from "../../Redux/AccountReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import WatchButton from "../../UI/Buttons/WatchButton/WatchButton";
import Preloader from "../../UI/Preloader/Preloader";
import { fetchGetDetails, fetchGetTrailer } from "../../API/Services/FilmService";
import Modal from "../../UI/Cards/Modal/Modal";
import ReactPlayer from "react-player";


const FilmDetails = () => {
    const movieDetails = useSelector((state) => state.movieReducer.movieDetails);
    const toggleIsFetching = useSelector((state) => state.movieReducer.isFetching);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [playTrailer, setPlayTrailer] = useState(false);

    
    const trailerKey = localStorage.getItem('trailerKey');

    useEffect(() => {
        dispatch(fetchGetDetails(id));
        dispatch(fetchGetTrailer(id));
        return () => {
            dispatch(removeSelectedMovieAction());
        }
    }, [dispatch, id])

    const addToWatch = (movieDetails) => {
        // dispatch(addToWatchListAction(movieDetails));
    }

    const watchTrailer = () => {
        setPlayTrailer(true);
        setModal(true);
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
                <Modal visible={modal} setVisible={setModal} setPlayTrailer={setPlayTrailer}>
                    <ReactPlayer playing={playTrailer} controls url={`https://www.youtube.com/watch?v=${trailerKey}`} />
                </Modal>
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
                        <WatchButton watchTrailer={watchTrailer} />
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