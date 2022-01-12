import React from "react";
import st from "./SearchCard.module.css";
import {Link} from "react-router-dom";
import {ApiImageNormal} from "../../../API/ApiKey";
import Slider from "react-slick";
import {useSelector} from "react-redux";


const SearchCard = () => {
    const searchMovie = useSelector((state) => state.movieReducer.searchFilm);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };

    const renderSearchCard = searchMovie.map((searchMovie) => {
        const {id, poster_path, title, vote_average} = searchMovie;
        return (
            <div>
                <Link to={`/movie/${searchMovie.id}`} className={st.title__body}>
                    <div className={st.searchCard__wrapper} key={id}>
                        <div className={st.searchCard__pic}>
                            <img className={st.pic__body}
                                 src={`${ApiImageNormal}` + poster_path}
                                 alt={title}/>
                        </div>
                        <div className={st.searchCard__title}>
                            <h3>{title}</h3>
                        </div>
                        <div className={st.searchCard__rate}>
                            <p>{vote_average}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div className={st.search__body}>{renderSearchCard}</div>
        // <Slider {...settings}>

        // </Slider>
    )
}

export default SearchCard;