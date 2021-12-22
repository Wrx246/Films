import React from "react";
import st from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={st.navbar__wrapper}>
            <div className={st.navbar__list}>
                <Link to='/' className={st.navbar__item}>Home</Link>
                <Link to='/about' className={st.navbar__item}>About</Link>
            </div>
        </div>
    )
}

export default Navbar