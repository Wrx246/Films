import React, { useEffect } from "react";
import st from './MyList.module.css';
import MyCard from "../../UI/Cards/MyCard/MyCard";
import { useDispatch, useSelector } from "react-redux";
import { getWatchList, removeFromWatchList } from "../../API/Services/AccountService";

const MyList = () => {
    const watchList = useSelector((state) => state.accountReducer.watchList);
    // console.log(watchList)
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWatchList())
    }, [])

    const removeFilm = (id) => {
        dispatch(removeFromWatchList(id));
    }

    const watch = localStorage.getItem('watchList')

    return (
        <div className={st.myList__wrapper}>
            <div className={st.myList__body}>
                <h1 className={st.myList__title}>My watch list</h1>
                <div className={st.myList__line}></div>
                <div className={st.myList__group}>
                    {watchList.map((watchList) => {
                        return ( <MyCard removeFilm={removeFilm} watchList={watchList} /> )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyList;