import React from "react";
import st from './FavoriteButton.module.css';


const FavoriteButton = ({ addToWatch }) => {

    // const [ disabled, setDisabled ] = useState(false)

    const rootStyle = [st.favoriteButton]

    // if (disabled) {
    //     rootStyle.push(st.disabled)
    // }

    const handlerClick = (e) => {
        e.preventDefault();
        addToWatch();
    }

    return (
        <>
        <button type = "submit" onClick = { handlerClick } className = { rootStyle.join(' ') } > Add to watchlist </ button>
        </>  
    )
}

export default FavoriteButton;