import React from "react";
import st from './Popular.module.css';

const Popular = () => {
    return (
        <div className={st.popular__wrapper}>
            <div className={st.popular__pic}>
                <p>Film poster</p>
            </div>
            <div className={st.popular__title}>
                <h3>Film Title</h3>
            </div>
            <div className={st.popular__rate}>
                <p>Rate</p>
            </div>
        </div>
    )
}

export default Popular;