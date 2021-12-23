import React from "react";
import st from './MyCard.module.css';

const MyCard = () => {
    return (
        <div className={st.myCard__wrapper}>
            <a href="#">
                <img className={st.myCard__poster} src="../../../assets/img/logo.png" alt=""/>
                <button className={st.myCard__button} type="button">X</button>
                <p className={st.MyCard__title}>Title</p>
            </a>
        </div>
    )
}

export default MyCard;