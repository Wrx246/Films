import React, { useEffect } from "react";
import st from './Search.module.css';
import { useSelector } from "react-redux";
import SearchCard from "../../UI/Cards/SearchCard/SearchCard";
import Input from "../../UI/Input/Input";


const Search = () => {
    const searchFilm = useSelector((state) => state.movieReducer.searchFilm);


    if (searchFilm.length === 0) {
        return (
            <div className={st.content}>
                <div className={st.search__wrapper}>
                    <h1 className={st.search__title}>
                        What movie do you want to find?
                    </h1>
                    <div className={st.search__panel}>
                        <Input />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={st.content}>
                <div className={st.search__wrapper}>
                    <h1 className={st.search__title}>
                        Found the following:
                    </h1>
                    <div className={st.search__panel}>
                        <Input />
                    </div>
                    <div className={st.search__list}>
                        <SearchCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;