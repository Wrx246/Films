import React from "react";
import st from './Logout.module.css';

const Logout = () => {
    return (
        <div className={st.logout__wrapper}>
            <button className={st.logout__body}>Sign in</button>
        </div>
    )
}

export default Logout;