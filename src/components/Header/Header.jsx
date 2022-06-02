import React, { useState } from 'react';
import st from './Header.module.css';
import Input from "../../UI/Input/Input";
import Navbar from "./Navbar/Navbar";
import Close from "../../UI/Buttons/CloseButton/Close";
import LoginButton from '../../UI/Buttons/LoginButton/LoginButton';
import { useSelector } from 'react-redux';
import BurgerButton from '../../UI/Buttons/BurgerButton/BurgerButton';

const Header = () => {
    const [searchBar, setSearchBar] = useState(false);
    const session_id = localStorage.getItem('sessionId');
    const username = JSON.parse(localStorage.getItem('username'))
    const isLogin = useSelector((state) => state.authReducer.isLogin)



    if (searchBar === false) {
        return (
            <div className={st.header}>
                <div className={st.logo__wrapper}>
                    <a href="#"><div className={st.logo__body} /></a>
                </div>
                <div className={st.burger__wrapper}>
                    <BurgerButton />
                </div>
                <div className={st.modal__wrapper}>
                    <Navbar setSearchBar={setSearchBar} />
                </div>
                <div className={st.logout__wrapper}>
                    {isLogin === true || session_id ?
                        <LoginButton name={username} /> :
                        <LoginButton name={"Login"} />}

                </div>
            </div>
        )
    } else {
        return (
            <div className={st.header}>
                <div className={st.logo__wrapper}>
                    <a href="#"><div className={st.logo__body} /></a>
                </div>
                <div className={st.modal__wrapper}>
                    <Input />
                    <Close setSearchBar={setSearchBar} />
                </div>
                <div className={st.logout__wrapper}>
                    {isLogin === true || session_id ?
                        <LoginButton name={username} /> :
                        <LoginButton name={"Login"} />}
                </div>
            </div>
        )
    }
}

export default Header;