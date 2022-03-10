import React, {useEffect} from "react";
import st from './Popular.module.css';
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import {ApiImageNormal, ApiKey} from "../../../API/ApiKey";
import {Link} from "react-router-dom";

const Popular = () => {
    const movie = useSelector((state) => state.movieReducer.movie);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };
 
    const renderPopular = movie.map((movie) => {
        const {id, poster_path, title, vote_average} = movie;
        return (
            <div>
                <Link to={`/movie/${movie.id}`} className={st.title__body}>
                    <div className={st.popular__wrapper} key={id}>
                        <div className={st.popular__pic}>
                        <div className={st.popular__rate}>
                            <p>{vote_average}</p>
                        </div>
                            <img className={st.pic__body}
                                 src={`${ApiImageNormal}` + poster_path}
                                 alt={title}/>
                        </div>
                        {/* <div className={st.popular__title}>
                            <h3>{title}</h3>
                        </div> */}
                        {/* <div className={st.popular__rate}>
                            <p>{vote_average}</p>
                        </div> */}
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