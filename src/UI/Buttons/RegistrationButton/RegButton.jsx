import React from 'react';
import st from './RegButton.module.css';


const RegButton = ({ name, setRequestToken }) => {

    const handlerSubmit = (e) => {
        e.preventDefault();
        setRequestToken();
    }

    return (
        <div className={st.regButton__wrapper}>
            <button
                type='submit'
                onClick={handlerSubmit}
                className={st.regButton__body}>
                {name}
            </button>
        </div>
    )
}

export default RegButton;