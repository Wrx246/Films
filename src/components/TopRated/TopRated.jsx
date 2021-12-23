import React from "react";
import st from './TopRated.module.css';



const TopRated = () => {
    return (
        <div className={st.content}>
            <div className={st.rated__wrapper}>
                <h1 className={st.rated__title}>
                    Top rated films
                </h1>
                <div className={st.rated__list}>
                    <div className={st.header__items}>
                        <p className={st.header__poster}></p>
                        <p className={st.header__title}>Title</p>
                        <p className={st.header__vote}>Vote average</p>
                        <p className={st.header__date}>Release date</p>
                    </div>
                    <div className={st.rated__item}>
                        <p className={st.item__poster}>Poster</p>
                        <a href="#" className={st.item__title}>Title</a>
                        <p className={st.item__vote}>Vote average</p>
                        <p className={st.item__date}>Release date</p>
                    </div>
                    <div className={st.rated__item}>
                        <p className={st.item__poster}>Poster</p>
                        <a href="#" className={st.item__title}>Title</a>
                        <p className={st.item__vote}>Vote average</p>
                        <p className={st.item__date}>Release date</p>
                    </div>
                    <div className={st.rated__item}>
                        <p className={st.item__poster}>Poster</p>
                        <a href="#" className={st.item__title}>Title</a>
                        <p className={st.item__vote}>Vote average</p>
                        <p className={st.item__date}>Release date</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export  default TopRated;