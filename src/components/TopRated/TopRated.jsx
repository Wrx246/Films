import React, { useEffect, useState } from "react";
import Moment from 'moment';
import st from './TopRated.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetTopRated } from "../../API/Services/FilmService";
import MySelect from "../../UI/Select/MySelect";
import { sortTopFilmsAction } from "../../Redux/Reducers";
import Preloader from "../../UI/Preloader/Preloader";



const TopRated = () => {
    const movie = useSelector((state) => state.movieReducer.movie);
    const toggleIsFetching = useSelector((state) => state.movieReducer.isFetching);

    const formatDate = Moment(movie.release_date).format("MMM Do YY");

    const dispatch = useDispatch();
    const [selectedSort, setSelectedSort] = useState('');

    useEffect(() => {
        dispatch(fetchGetTopRated());
    }, []);

    const sortFilms = (sort) => {
        setSelectedSort(sort);
        dispatch(sortTopFilmsAction(sort))
    }


    if (toggleIsFetching === true) {
        return (
            <div className={st.content}>
                <div className={st.rated__wrapper}>
                    <h1 className={st.rated__title}>
                        Top rated films
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
                <div className={st.rated__wrapper}>
                    <h1 className={st.rated__title}>
                        Top rated films
                    </h1>
                    <MySelect
                        value={selectedSort}
                        onChange={sortFilms}
                        options={[
                            { value: 'title', name: 'Title' },
                            { value: 'vote_average', name: 'Vote' },
                            { value: 'release_date', name: 'Release date' }
                        ]} />
                    <div className={st.rated__list}>
                        <div className={st.header__items}>
                            <p className={st.header__poster}></p>
                            <p className={st.header__title}>Title</p>
                            <p className={st.header__vote}>Vote average</p>
                            <p className={st.header__date}>Release date</p>
                        </div>
                        {movie.map((movie) => {
                            const { id } = movie;
                            return (
                                <Link to={`/movie/${movie.id}`} className={st.title__body}>
                                    <div className={st.rated__item} key={id}>
                                        <img className={st.item__poster}
                                            src={"http://image.tmdb.org/t/p/w300/" + movie.poster_path}
                                            alt={movie.title} />
                                        <p className={st.item__title}>{movie.title}</p>
                                        <p className={st.item__vote}>{movie.vote_average}</p>
                                        <p className={st.item__date}>{formatDate}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}


export default TopRated;