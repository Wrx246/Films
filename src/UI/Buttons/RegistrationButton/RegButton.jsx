import React from 'react';
import { useDispatch } from 'react-redux';
import st from './RegButton.module.css';


const RegButton = ({ firstName, password, name, postRegistrationData}) => {

    const dispatch = useDispatch();

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(postRegistrationData({firstName, password}));
    }

    return (
        <div>
            <button type='submit' onClick={handlerSubmit} className={st.regButton__body}>{name}</button>
        </div>
    )
}

export default RegButton;