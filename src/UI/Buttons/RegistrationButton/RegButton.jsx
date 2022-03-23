import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSessionId } from '../../../API/Services/AuthService';
import st from './RegButton.module.css';


const RegButton = ({ username, password, name, postRegistrationData, setRequestToken }) => {
    // const request_token = useSelector((state) => state.authReducer.request_token);
    // const confirmed_token = useSelector((state) => state.authReducer.confirmed_token);

    const dispatch = useDispatch();

    const handlerSubmit = (e) => {
        e.preventDefault();
        setRequestToken();
        // dispatch(postRegistrationData(username, password, request_token));
        // dispatch(createSessionId(confirmed_token));
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