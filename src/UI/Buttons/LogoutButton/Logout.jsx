import React from "react";
import { Link } from "react-router-dom";
import st from './Logout.module.css';

const Logout = () => {

    return (
        <div className={st.logout__wrapper}>
            <Link to='/registration'>
                <button className={st.logout__body}>Sign up</button>
            </Link>
        </div>
    )
}

export default Logout;