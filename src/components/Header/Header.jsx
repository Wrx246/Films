import React, {useState} from 'react';
import st from './Header.module.css';
import Input from "../../UI/Input/Input";
import Navbar from "./Navbar/Navbar";
import Close from "../../UI/Buttons/CloseButton/Close";
import {useSelector} from "react-redux";
import LoginButton from '../../UI/Buttons/LoginButton/LoginButton';

const Header = () => {
    const [searchBar, setSearchBar] = useState(false);
    // const username = useSelector((state) => state.authReducer.username);
    const session_id = localStorage.getItem('sessionId');
    const username = JSON.parse(localStorage.getItem('username'))



    if (searchBar === false) {
        return (
            <div className={st.header}>
                <div className={st.logo__wrapper}>
                    <a href="#"><div className={st.logo__body} /></a>
                </div>
                <div className={st.modal__wrapper}>
                    <Navbar />
                    <a onClick={ () => setSearchBar(true)} className={st.search__body}>Search</a>
                </div>
                <div className={st.logout__wrapper}>
                    { session_id ? 
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
                    <LoginButton username={username} session_id={session_id} />
                </div>
            </div>
        )
    }
}

export default Header;