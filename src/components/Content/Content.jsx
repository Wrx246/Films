import React from "react";
import st from './Content.module.css';
import Popular from "../../UI/Cards/Popular/Popular";

const Content = () => {
    return (
        <div className={st.content}>
            <div className={st.popular__wrapper}>
                <h1 className={st.popular__title}>
                    Popular today
                </h1>
                <div className={st.popular__list}>
                    <Popular/>
                    <Popular/>
                    <Popular/>
                </div>
            </div>
        </div>
    )
}

export default Content;