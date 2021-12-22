import React, {useState} from 'react';
import st from './Header.module.css';
import Input from "../../UI/Input/Input";
import Logout from "../../UI/Buttons/LogoutButton/Logout";
import Navbar from "./Navbar/Navbar";
import Close from "../../UI/Buttons/CloseButton/Close";

const Header = () => {
    const [searchBar, setSearchBar] = useState(false);



    if (searchBar === false) {
        return (
            <div className={st.header}>
                <div className={st.logo__wrapper}>
                    <a href="#"><img className={st.logo__body} src="../../assets/img/logo.png" alt="logo"/></a>
                </div>
                <div className={st.modal__wrapper}>
                    <Navbar />
                    <a onClick={ () => setSearchBar(true)} className={st.search__body}>Search</a>
                </div>
                <div className={st.logout__wrapper}>
                    <Logout/>
                </div>
            </div>
        )
    } else {
        return (
            <div className={st.header}>
                <div className={st.logo__wrapper}>
                    <a href="#"><img className={st.logo__body} src="../../assets/img/logo.png" alt="logo"/></a>
                </div>
                <div className={st.modal__wrapper}>
                    <Input />
                    <Close setSearchBar={setSearchBar} />
                </div>
                <div className={st.logout__wrapper}>
                    <Logout/>
                </div>
            </div>
        )
    }
}

export default Header;