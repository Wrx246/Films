import React from "react";
import st from './MyList.module.css';
import MyCard from "../../UI/Cards/MyCard/MyCard";
import {useSelector} from "react-redux";

const MyList = () => {
    const movieList = useSelector((state) => state.movieReducer.watchList);

    return (
        <div className={st.myList__wrapper}>
            <div className={st.myList__body}>
                <h1 className={st.myList__title}>My watch list</h1>
                <div className={st.myList__line}></div>
                <div className={st.myList__group}>
                    {movieList.map((movie) => {
                        return ( <MyCard /> )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyList;