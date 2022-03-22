import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import st from './RegButton.module.css';


const RegButton = ({ firstName, password, name, postRegistrationData}) => {
    const token = useSelector((state) => state.authReducer.token);

    const dispatch = useDispatch();

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(postRegistrationData(token));
    }

    return (
        <div>
            <button type='submit' onClick={handlerSubmit} className={st.regButton__body}>{name}</button>
        </div>
    )
}

export default RegButton;