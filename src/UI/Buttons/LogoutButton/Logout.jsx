import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import st from './Logout.module.css';

const Logout = ({username}) => {
    const session_id = useSelector((state) => state.authReducer.session_id)

    if(session_id) {
        return (
            <div className={st.logout__wrapper}>
                <Link to='/registration'>
                    <button className={st.logout__body}>{username}</button>
                </Link>
            </div>
        )
    }
    return (
        <div className={st.logout__wrapper}>
            <Link to='/registration'>
                <button className={st.logout__body}>Login</button>
            </Link>
        </div>
    )
    
}

export default Logout;