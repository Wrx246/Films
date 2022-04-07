import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import st from './Registration.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccountId, createSessionId, deleteSessionId, fetchRegistration, postRegistrationData } from '../../API/Services/AuthService';
import Logout from './Logout/Logout';
import RegistrationForm from './RegistrationForm/RegistrationForm';


const Registration = () => {
    const session_id = useSelector((state) => state.authReducer.session_id)
    const request_token = useSelector((state) => state.authReducer.request_token);
    const confirmed_token = useSelector((state) => state.authReducer.confirmed_token);
    const isLogin = useSelector((state) => state.authReducer.isLogin)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const accountId = localStorage.getItem('accountId');
    const session = localStorage.getItem('sessionId');

    useEffect(() => {
        dispatch(fetchRegistration());
        if (confirmed_token) {
            dispatch(createSessionId(confirmed_token));
        }
        if (session_id) {
            dispatch(createAccountId(session_id))
        }
    }, [confirmed_token, session_id])

    const setRequestToken = () => {
        dispatch(postRegistrationData(username, password, request_token));
    };

    const deleteSession = () => {
        dispatch(deleteSessionId(session));
    }

    if (accountId) {
        return (
            <Logout deleteSession={deleteSession} />
        )
    } else if (isLogin === false) {
        return (
            <RegistrationForm 
            setRequestToken={setRequestToken} 
            username={username} 
            setUsername={setUsername} 
            password={password}
            setPassword={setPassword} />
        )
    }

    if (session_id) {
        return (
            <div className={st.reg__wrapper}>
                <div className={st.reg__body}>
                    <h2 className={st.reg__title}>Login successfull</h2>
                    <div className={st.reg__description}> 
                        <Link to='/' className={st.home__button}>Return to home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;