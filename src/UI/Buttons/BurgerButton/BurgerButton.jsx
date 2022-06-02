import React, { useState } from 'react'
import st from './BurgerButton.module.css';
import { Link } from 'react-router-dom';

const BurgerButton = () => {
    const [burger, setBurger] = useState(false);

    const rootStyle = [st.burger__body]
    const topStyle = [st.top__bun]
    const meatStyle = [st.meat]
    const botStyle = [st.bottom__bun]

    if (burger) {
        rootStyle.push(st.active)
        topStyle.push(st.activeTop)
        meatStyle.push(st.activeMeat)
        botStyle.push(st.activeBot)
    }

    const handleClick = (e) => {
        e.preventDefault();
        setBurger(!burger)
    }

    return (
        <div>
            <div onClick={handleClick}>
                <div className={topStyle.join(' ')}></div>
                <div className={meatStyle.join(' ')}></div>
                <div className={botStyle.join(' ')}></div>
            </div>
            <ul className={rootStyle.join(' ')}>
                <Link to='/' className={st.navbar__item}>Home</Link>
                <Link to='/top_rated' className={st.navbar__item}>Top Rated</Link>
                <Link to='/my_list' className={st.navbar__item}>My watch list</Link>
                <Link to='/search' className={st.navbar__item}>Search</Link>
            </ul>
        </div>
    )
}

export default BurgerButton