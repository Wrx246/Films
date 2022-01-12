import React from "react";
import st from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className={st.navbar__wrapper}>
            <div className={st.navbar__list}>
                <Link to='/' className={st.navbar__item}>Home</Link>
                <Link to='/about' className={st.navbar__item}>About</Link>
                <Link to='/top_rated' className={st.navbar__item}>Top Rated</Link>
                <Link to='/my_list' className={st.navbar__item}>My watch list</Link>
            </div>
        </div>
    )
}

export default Navbar