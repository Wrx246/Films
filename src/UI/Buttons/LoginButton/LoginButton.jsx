import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import st from './LoginButton.module.css';

const LoginButton = ({name}) => {
    return (
        <div className={st.logout__wrapper}>
            <Link to='/registration'>
                <button className={st.logout__body}>{name}</button>
            </Link>
        </div>
    )
}

export default LoginButton;