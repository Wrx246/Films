import React, {useState} from 'react';
import st from './Header.module.css';
import Input from "../../UI/Input/Input";
import Logout from "../../UI/Buttons/LogoutButton/Logout";
import Navbar from "./Navbar/Navbar";
import Close from "../../UI/Buttons/CloseButton/Close";
import {useSelector} from "react-redux";

const Header = () => {
    const [searchBar, setSearchBar] = useState(false);
    const username = useSelector((state) => state.authReducer.username);



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
                    <Logout username={username} />
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
                    <Logout username={username} />
                </div>
            </div>
        )
    }
}

export default Header;