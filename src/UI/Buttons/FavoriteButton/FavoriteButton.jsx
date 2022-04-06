import React from "react";
import st from './FavoriteButton.module.css';


const FavoriteButton = ({ addToWatch, children, disabled, setDisabled }) => {

    const rootStyle = [st.favoriteButton]

    if (disabled) {
        rootStyle.push(st.disabled)
    }

    const handlerClick = (e) => {
        e.preventDefault();
        // setDisabled(false)
        addToWatch();
    }

    return (
        <>
        <button type = "submit" onClick = { handlerClick } className = { rootStyle.join(' ') } > Add to watchlist </ button>
        </>  
    )
}

export default FavoriteButton;