import React from 'react';
import st from './RegButton.module.css';


const RegButton = ({ name, fetchRegistration}) => {

    const handlerSubmit = (e) => {
        e.preventDefault();
        fetchRegistration()
    }

    return (
        <div>
            <button type='submit' onClick={handlerSubmit} className={st.regButton__body}>{name}</button>
        </div>
    )
}

export default RegButton;