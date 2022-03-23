import { useFormik, validateYupSchema } from 'formik';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegButton from '../../UI/Buttons/RegistrationButton/RegButton';
import st from './Registration.module.css';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API, { createSessionId, fetchRegistration, postRegistrationData } from '../../API/Services/AuthService';


const Registration = () => {
    const session_id = useSelector((state) => state.authReducer.session_id)   
    const request_token = useSelector((state) => state.authReducer.request_token);
    const confirmed_token = useSelector((state) => state.authReducer.confirmed_token);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            password: Yup.string()
                .min(5, "Must be 5 characters or more")
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required("Required"),
        })
    });
    
    useEffect(() => {
        dispatch(fetchRegistration());
        if(confirmed_token){
            dispatch(createSessionId(confirmed_token)); 
        }
    }, [dispatch, confirmed_token])

    const setRequestToken = () => {
        dispatch(postRegistrationData(username, password, request_token));
        
    };

    if(session_id) {
        return (
            <div className={st.reg__wrapper}>
                <div className={st.reg__body}>
                    <h2 className={st.reg__title}>Login successfull</h2>
                    <div className={st.reg__description}>
                    <Link to='/'>Home</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={st.reg__wrapper}>
            <div className={st.reg__body}>
                <h2 className={st.reg__title}>Login to your account</h2>
                <form>
                    <div className={st.reg__form}>
                        <label htmlFor='name'>Username</label>
                        <input
                            id='username'
                            className={st.reg__input}
                            type='text'
                            placeholder='Username'
                            onChange={e => setUsername(e.target.value)}
                            value={username} />
                        {formik.errors.username ? <p>{formik.errors.username}</p> : null}
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className={st.reg__input}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                            value={password} />
                        {formik.errors.password ? <p>{formik.errors.password}</p> : null}
                        {/* <label htmlFor='ConfirmPassword'>Confirm Password</label>
                        <input
                            id='confirmPassword'
                            className={st.reg__input}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword} />
                        {formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null} */}
                    </div>
                    <RegButton
                        postRegistrationData={postRegistrationData}
                        setRequestToken={setRequestToken}
                        username={username}
                        password={password}
                        name='Login' />
                </form>
                <div className={st.reg__description}>
                    <p>
                        In order to use the service, you must first register on:
                        <a href="https://www.themoviedb.org/signup">The Movie DB website</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Registration;