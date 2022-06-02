import React from "react";
import st from './Popular.module.css';
import Slider from "react-slick";
import {useSelector} from "react-redux";
import {ApiImageNormal} from "../../../API/ApiKey";
import {Link} from "react-router-dom";

const Popular = (toggleIsFetching) => {
    const movie = useSelector((state) => state.movieReducer.movie);
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

    const renderPopular = movie.map((movie) => {
        const {id, poster_path, title, vote_average} = movie;
        return (
            <div>
                <Link to={`/movie/${movie.id}`} className={st.title__body}>
                    <div className={st.popular__wrapper} key={id} >
                        <div className={st.popular__pic}>
                        <div className={st.popular__rate}>
                            <p>{vote_average}</p>
                        </div>
                            <img className={st.pic__body}
                                 src={`${ApiImageNormal}` + poster_path}
                                 alt={title}/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <Slider {...settings}>
            {renderPopular}
        </Slider>
    )
}



export default Popular;