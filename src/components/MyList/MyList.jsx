import React, { useEffect } from "react";
import st from './MyList.module.css';
import MyCard from "../../UI/Cards/MyCard/MyCard";
import { useDispatch, useSelector } from "react-redux";
import { getWatchList } from "../../API/Services/AccountService";

const MyList = () => {
    const watchList = useSelector((state) => state.accountReducer.watchList);
    console.log(watchList)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWatchList())
    }, [])

    const watch = localStorage.getItem('watchList')

    return (
        <div className={st.myList__wrapper}>
            <div className={st.myList__body}>
                <h1 className={st.myList__title}>My watch list</h1>
                <div className={st.myList__line}></div>
                <div className={st.myList__group}>
                    {watchList.map((watchList) => {
                        const { id, title, poster_path } = watchList
                        return ( <MyCard title={title} poster_path={poster_path} key={id} watchList={watchList} /> )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyList;