import React from "react";
import st from "./SearchCard.module.css";
import { Link } from "react-router-dom";
import { ApiImageNormal } from "../../../API/ApiKey";
import { useSelector } from "react-redux";


const SearchCard = () => {
    const searchMovie = useSelector((state) => state.movieReducer.searchFilm);

    const renderSearchCard = searchMovie.map((searchMovie) => {
        const { id, poster_path, title, vote_average } = searchMovie;
        return (
            <div>
                <Link to={`/movie/${searchMovie.id}`} className={st.title__body}>
                    <div className={st.searchCard__wrapper} key={id}>
                        <div className={st.searchCard__pic}>
                            <div className={st.searchCard__rate}>
                                <p>{vote_average}</p>
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
        <div className={st.search__body}>{renderSearchCard}</div>
    )
}

export default SearchCard;