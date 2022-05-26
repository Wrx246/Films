import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { ApiImageNormal } from '../../../API/ApiKey';
import { fetchGetSimilarMovies } from '../../../API/Services/FilmService';
import st from './SimilarCard.module.css'

const SimilarCard = ({ movieId }) => {
    const similarMovies = useSelector((state) => state.movieReducer.similarMovies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetSimilarMovies(movieId))
    }, [movieId])



    return (
        <div className={st.similar__wrapper}>
            <h1 className={st.similar__title}>
                Similar films
            </h1>
            <div className={st.similar__group}>
                {similarMovies.map((movie) => {
                    const { id, poster_path, title, vote_average } = movie;
                    return (
                        <Link to={`/movie/${movie.id}`} className={st.title__body}>
                            <div className={st.similar__body} key={id}>
                                <div className={st.similar__pic}>
                                    <div className={st.similar__rate}>
                                        <p>{Math.round( vote_average * 10 ) / 10}</p>
                                    </div>
                                    <img className={st.pic__body}
                                        src={`${ApiImageNormal}` + poster_path}
                                        alt={title} />
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SimilarCard