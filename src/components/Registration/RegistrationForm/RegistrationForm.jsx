import { useFormik } from 'formik';
import React from 'react';
import RegButton from '../../../UI/Buttons/RegistrationButton/RegButton';
import st from './RegistrationForm.module.css';
import * as Yup from 'yup';


const RegistrationForm = ({ setRequestToken, username, setUsername, password, setPassword }) => {


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
                    </div>
                    <RegButton
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

export default RegistrationForm;