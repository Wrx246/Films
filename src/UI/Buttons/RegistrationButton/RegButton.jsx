import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSessionId } from '../../../API/Services/AuthService';
import st from './RegButton.module.css';


const RegButton = ({ name, setRequestToken }) => {


    const handlerSubmit = (e) => {
        e.preventDefault();
        setRequestToken();
    }

    return (
        <div>
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