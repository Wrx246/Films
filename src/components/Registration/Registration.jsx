import { useFormik, validateYupSchema } from 'formik';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegButton from '../../UI/Buttons/RegistrationButton/RegButton';
import st from './Registration.module.css';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ApiKey } from '../../API/ApiKey';
import { registrationAction } from '../../Redux/AuthReducer';
import API, { fetchRegistration, postRegistrationData, redirectRegistration } from '../../API/Services/AuthService';


const Registration = () => {

    const [ firstName, setFirstName ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email")
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
        // redirectRegistration();
        // if (localStorage.getItem('request_token')) {
        //     postRegistrationData(firstName, password);
        // }
    }, [])

    // const fetchRegistration = async () => {
    //     const response = await API
    //         .get (`https://api.themoviedb.org/3/authentication/token/new?api_key=${ApiKey}`)
    //         .catch((err) => {
    //             console.log("Error ", err);
    //         });
    //         localStorage.setItem('request_token', response.data.request_token)
    //         dispatch(registrationAction(response.data))
            
    //     console.log(response);
    // }

    return (
        <div className={st.reg__wrapper}>
            <div className={st.reg__body}>
                <h2 className={st.reg__title}>Registration</h2>
                <form>
                    <div className={st.reg__form}>
                        <label htmlFor='name'>Name</label>
                        <input
                            id='firstName'
                            className={st.reg__input}
                            type='text'
                            placeholder='Name'
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName} />
                        {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
                        {/* <label htmlFor='lastname'>LastName</label>
                        <input
                            id='lastName'
                            className={st.reg__input}
                            type='text'
                            placeholder='LastName'
                            onChange={formik.handleChange}
                            value={formik.values.lastName} />
                        {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null} */}
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className={st.reg__input}
                            type='email'
                            placeholder='Email'
                            // onChange={ e => setEmail(e.target.value)}
                            // value={email} 
                            />
                        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className={st.reg__input}
                            type='password'
                            placeholder='Password'
                            onChange={ e => setPassword(e.target.password)}
                            value={password} />
                        {formik.errors.password ? <p>{formik.errors.password}</p> : null}
                        <label htmlFor='ConfirmPassword'>Confirm Password</label>
                        <input
                            id='confirmPassword'
                            className={st.reg__input}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword} />
                        {formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null}
                    </div>
                    <RegButton postRegistrationData={postRegistrationData} firstName={firstName} password={password} name='Registration' />
                </form>
                <div className={st.reg__description}>
                    <p>
                        If you already have an account you can <Link to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Registration;