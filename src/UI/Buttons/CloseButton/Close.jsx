import React from "react";
import st from './Close.module.css';

const CloseButton = ({setSearchBar}) => {
    return (
        <div className={st.close__wrapper}>
            <button onClick={ () => setSearchBar(false)} className={st.close__body} type='button'>X</button>
        </div>
    )
}

export default CloseButton;