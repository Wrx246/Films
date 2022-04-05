import React from "react";
import st from "./WatchButton.module.css";

const WatchButton = ({watchTrailer}) => {

    const handlerSubmit = (e) => {
        e.preventDefault()
        watchTrailer();
    }

    return (
        <button type="button" onClick={handlerSubmit} className={st.watchButton}>Watch trailer</button>
    )
}

export default WatchButton;