import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import { ApiImageNormal } from '../../../API/ApiKey';
import { fetchGetSimilarMovies } from '../../../API/Services/FilmService';
import st from './SimilarCard.module.css'

const SimilarCard = ({ movieId }) => {
    const similarMovies = useSelector((state) => state.movieReducer.similarMovies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetSimilarMovies(movieId))
    }, [movieId])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
          ]
    };

    const renderPopular = similarMovies.map((movie) => {
        const { id, poster_path, title, vote_average } = movie;
        return (
            <div>
                <Link to={`/movie/${movie.id}`} className={st.title__body}>
                    <div className={st.similar__wrapper} key={id}>
                        <div className={st.similar__pic}>
                            <div className={st.similar__rate}>
                                <p>{Math.round(vote_average * 10) / 10}</p>
                            </div>
                            <img className={st.pic__body}
                                src={`${ApiImageNormal}` + poster_path}
                                alt={title} />
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div>
            <h1 className={st.similar__title}>
                Similar films
            </h1>
            <Slider {...settings}>
                {renderPopular}
            </Slider>
        </div>
    )

}

export default SimilarCard