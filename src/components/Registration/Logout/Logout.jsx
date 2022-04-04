import React from "react";
import st from './Logout.module.css';


const Logout = ({deleteSession}) => {


    const handlerSubmit = (e) => {
        e.preventDefault();
        deleteSession();
    }

    return (
        <div className={st.logout__wrapper}>
                <div className={st.logout__body}>
                    <h2 className={st.logout__title}>Sign out?</h2>
                    <div className={st.logout__description}>
                        <button
                            type='submit'
                            onClick={handlerSubmit}
                            className={st.logoutButton__body}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Logout;