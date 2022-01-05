import React, {useEffect} from "react";
import st from './TopRated.module.css';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {ApiKey} from "../../API/ApiKey";
import {getPopularAction, getTopRatedAction} from "../../Redux/Reducers";



const TopRated = () => {
    const movie = useSelector((state) => state.movieReducer.movie);
    const dispatch = useDispatch();

    const fetchGetTopRated = async () => {
        const response = await axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`)
            .catch((err) => {
                console.log("Error ", err);
            });
        dispatch(getTopRatedAction(response.data.results))
    }

    useEffect(() => {
        fetchGetTopRated();
    }, []);

    return (
        <div className={st.content}>
            <div className={st.rated__wrapper}>
                <h1 className={st.rated__title}>
                    Top rated films
                </h1>
                {movie.map( (movie) => {
                    const { id, title, poster_path, release_date, vote_average } = movie;
                    return (<div className={st.rated__list}>
                        <div className={st.header__items}>
                            <p className={st.header__poster}></p>
                            <p className={st.header__title}>Title</p>
                            <p className={st.header__vote}>Vote average</p>
                            <p className={st.header__date}>Release date</p>
                        </div>
                        <div className={st.rated__item}>
                            <img className={st.item__poster} src={"http://image.tmdb.org/t/p/w300/"+movie.poster_path} alt={movie.title} />
                            <a href="#" className={st.item__title}>{movie.title}</a>
                            <p className={st.item__vote}>{movie.vote_average}</p>
                            <p className={st.item__date}>{movie.release_date}</p>
                        </div>
                    </div>)
                })}

            </div>
        </div>
    )
}


export  default TopRated;