import React from "react";
import st from "./NowPlaying.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ApiImageNormal } from "../../../API/ApiKey";
import Slider from "react-slick";



const NowPlaying = () => {
    const movie = useSelector((state) => state.movieReducer.nowPlaying);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };

    const renderNowPlaying = movie.map((movie) => {
        const { id, poster_path, title, vote_average } = movie;
        return (
            <div>
                <Link to={`/movie/${movie.id}`} className={st.title__body}>
                    <div className={st.nowPlaying__wrapper} key={id}>
                        <div className={st.nowPlaying__pic}>
                            <div className={st.nowPlaying__rate}>
                                <p>{vote_average}</p>
                            </div>
                            <img className={st.pic__body}
                                src={`${ApiImageNormal}` + poster_path}
                                alt={title} />
                        </div>
                        {/* <div className={st.upcoming__title}>
                            <h3>{title}</h3>
                        </div> */}

                    </div>
                </Link>
            </div>
        )
    })
    return (
        <Slider {...settings}>
            {renderNowPlaying}
        </Slider>
    )
}

export default NowPlaying;