import React, {useEffect, useState} from "react";
import st from "./FilmDetails.module.css";
import axios from "axios";
import {ApiImage, ApiImageBig, ApiKey} from "../../API/ApiKey";
import {addToWatchListAction, getFilmDetailsAction, removeSelectedMovieAction} from "../../Redux/Reducers";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";


const FilmDetails = () => {
    const movieDetails = useSelector((state) => state.movieReducer.movieDetails);
    const {id} = useParams();
    const dispatch = useDispatch();
    const { poster_path, release_date, title, runtime, budget, vote_average, overview} = movieDetails;

    const fetchGetDetails = (id) => async (dispatch) => {
        const response = await axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`)
            .catch((err) => {
                console.log("Error ", err);
            });
        dispatch(getFilmDetailsAction(response.data))
    }

    useEffect(() => {
        dispatch(fetchGetDetails(id));
        return () => {
            dispatch(removeSelectedMovieAction());
        }
    }, [dispatch, id])

    const addToWatch = (id) => {
        dispatch(addToWatchListAction(id));
    }

    return (
        <div className={st.details__wrapper}>
            <div className={st.details__body} key={id}>
                <h2 className={st.details__title}>{movieDetails.title}</h2>
                <div className={st.details__assets}>
                    <p className={st.details__date}>Release: <br/>{movieDetails.release_date}</p>
                    <p className={st.details__vote}>Vote: {movieDetails.vote_average}</p>
                    <p className={st.details__count}>Budget: <br/>{movieDetails.budget}$</p>
                    <p className={st.details__time}>Runtimve: <br/>{movieDetails.runtime} min</p>
                    <button type={"submit"} onClick={addToWatch(id)} className={st.details__button}>Add to favorite</button>
                </div>
                <p className={st.details__description}>{movieDetails.overview}</p>
                <img className={st.details__img}
                     src={`${ApiImageBig}` + movieDetails.poster_path}
                     alt={movieDetails.title}/>
            </div>
        </div>
    )
}

export default FilmDetails;