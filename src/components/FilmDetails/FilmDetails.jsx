import React, { useEffect, useState } from "react";
import Moment from 'moment';
import st from "./FilmDetails.module.css";
import { ApiImageBig, ApiImageOriginal } from "../../API/ApiKey";
import { checkFavoriteMovieAction } from "../../Redux/AccountReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import WatchButton from "../../UI/Buttons/WatchButton/WatchButton";
import Preloader from "../../UI/Preloader/Preloader";
import { fetchGetCasts, fetchGetDetails, fetchGetReviews, fetchGetTrailer, fetchPostRateFilm } from "../../API/Services/FilmService";
import Modal from "../../UI/Cards/Modal/Modal";
import ReactPlayer from "react-player";
import { addToWatchList, getWatchList } from "../../API/Services/AccountService";
import FavoriteButton from "../../UI/Buttons/FavoriteButton/FavoriteButton";
import SimilarCard from "../../UI/Cards/SimilarCard/SimilarCard";
import RateCard from "../../UI/Cards/RateCard/RateCard";
import ReviewsCard from "../../UI/Cards/ReviewsCard/ReviewsCard";
import CastCard from "../../UI/Cards/CastCard/CastCard";


const FilmDetails = () => {
    const movieDetails = useSelector((state) => state.movieReducer.movieDetails);
    const toggleIsFetching = useSelector((state) => state.movieReducer.isFetching);
    const inWatchList = useSelector((state) => state.accountReducer.inWatchList)
    const watchList = useSelector((state) => state.accountReducer.watchList)
    const checkWatchList = useSelector((state) => state.accountReducer.checkWatchList);

    const { id } = useParams();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [playTrailer, setPlayTrailer] = useState(false);
    const movieId = movieDetails.id;
    const trailerKey = localStorage.getItem('trailerKey');

    const formatDate = Moment(movieDetails.release_date).format("MMM Do YY");

    useEffect(() => {
        dispatch(fetchGetDetails(id));
        dispatch(fetchGetTrailer(id));
        dispatch(fetchGetReviews(movieId));
        dispatch(getWatchList(movieId));
        dispatch(fetchGetCasts(movieId));
    }, [id, movieId, watchList])

    const addToWatch = () => {
        dispatch(addToWatchList(movieId))
    }

    const watchTrailer = () => {
        setPlayTrailer(true);
        setModal(true);
    }

    const rateFilm = (rating) => {
        dispatch(fetchPostRateFilm(movieId, rating))
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
            <div className={st.details__wrapper}
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${ApiImageOriginal}${movieDetails.poster_path})`,
                backgroundPosition: 'no-repeat center center fixed'
            }}
            >
                <Modal visible={modal} setVisible={setModal} setPlayTrailer={setPlayTrailer}>
                    <ReactPlayer playing={playTrailer} controls url={`https://www.youtube.com/watch?v=${trailerKey}`} />
                </Modal>
                <div className={st.details__body} key={id}>
                    <h2 className={st.details__title}>{movieDetails.title}</h2>
                    <div className={st.details__assets}>
                        <p className={st.details__date}>Release: <br />{formatDate}</p>
                        <p className={st.details__vote}>Vote: {movieDetails.vote_average}</p>
                        <p className={st.details__count}>Budget: <br />{movieDetails.budget}$</p>
                        <p className={st.details__time}>Runtime: <br />{movieDetails.runtime} min</p>
                        <FavoriteButton
                            checkWatchList={checkWatchList}
                            movieId={movieId}
                            watchList={watchList}
                            inWatchList={inWatchList}
                            addToWatch={addToWatch}></FavoriteButton>
                    </div>
                    <div className={st.details__bottom}>
                        <p className={st.details__description}>{movieDetails.overview}</p>
                        <WatchButton watchTrailer={watchTrailer} />
                        <h3>Casts</h3>
                        <CastCard />
                    </div>
                    <img className={st.details__img}
                        src={`${ApiImageOriginal}` + movieDetails.poster_path}
                        alt={movieDetails.title} />
                </div>
                <div className={st.similar__body}>
                    <SimilarCard movieId={movieId} />
                </div>
                <div>
                    <ReviewsCard />
                </div>
            </div>
        )
    }
}

export default FilmDetails;