import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../../../API/Services/AccountService";
import st from './FavoriteButton.module.css';


const FavoriteButton = ({ addToWatch, inWatchList, checkWatchList, movieId }) => {

    const dispatch = useDispatch();

    const [ disabled, setDisabled ] = useState(false)

    const rootStyle = [st.favoriteButton]

    if (disabled) {
        rootStyle.push(st.disabled)
    }

    useEffect(()=> {
        if(checkWatchList === movieId) {
            inWatchList = true
        } else {
            inWatchList = false
        } 
    },[checkWatchList, movieId])

    const handlerClick = (e) => {
        e.preventDefault();
        if(checkWatchList !== movieId) {
            addToWatch();
            setDisabled(true)
        } else {
            dispatch(removeFromWatchList(movieId))
            setDisabled(false)
        }
    }

    return (
        <>
            <button type="submit" onClick={handlerClick} className={rootStyle.join(' ')} >
                {checkWatchList !== movieId || inWatchList === false ? "Add to watchlist" : "Remove from watchlist"}
            </ button>
        </>
    )
}

export default FavoriteButton;