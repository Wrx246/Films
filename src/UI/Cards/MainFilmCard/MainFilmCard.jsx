import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ApiImageOriginal } from '../../../API/ApiKey'
import { fetchGetTrailer } from '../../../API/Services/FilmService'
import WatchButton from '../../Buttons/WatchButton/WatchButton'
import Modal from '../Modal/Modal'
import st from './MainFilmCard.module.css'

const MainFilmCard = () => {
    const film = useSelector((state) => state.movieReducer.mainMovie)
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [playTrailer, setPlayTrailer] = useState(false);
    const trailerKey = localStorage.getItem('trailerKey');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/movie/${film.id}`)
    }

    useEffect(() => {
        dispatch(fetchGetTrailer(film.id));
    }, [])

    const watchTrailer = () => {
        setPlayTrailer(true);
        setModal(true);
    }

    return (
        <div className={st.film__wrapper}>
            <Modal visible={modal} setVisible={setModal} setPlayTrailer={setPlayTrailer}>
                <ReactPlayer playing={playTrailer} controls url={`https://www.youtube.com/watch?v=${trailerKey}`} />
            </Modal>
            <img
                src={`${ApiImageOriginal}` + film.poster_path}
                alt={film.title} />
            <div className={st.film__info}>
                <h3>{film.title}</h3>
                <p>{film.overview}</p>
                <WatchButton watchTrailer={watchTrailer} />
                <button onClick={handleClick} className={st.film__button} type='button'>Info</button>
            </div>

        </div>
    )
}

export default MainFilmCard