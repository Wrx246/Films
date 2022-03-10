import React from "react";
import st from './SignIn.module.css';
import { useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import RegButton from '../../UI/Buttons/RegistrationButton/RegButton';


const SignIn = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email")
                .required("Required"),
            password: Yup.string()
                .min(5, "Must be 5 characters or more")
                .max(15, "Must be 15 characters or less")
                .required("Required"),
        })
    });

    return (
        <div className={st.signIn__wrapper}>
            <div className={st.signIn__body}>
                <h2 className={st.signIn__title}>Sign In</h2>
                <form>
                    <div className={st.signIn__form}>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className={st.signIn__input}
                            type='email'
                            placeholder='Email'
                            onChange={formik.handleChange}
                            value={formik.values.email} />
                        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className={st.signIn__input}
                            type='password'
                            placeholder='Password'
                            onChange={formik.handleChange}
                            value={formik.values.password} />
                        {formik.errors.password ? <p>{formik.errors.password}</p> : null}
                    </div>
                    <RegButton name='Sign In' />
                </form>
                <div className={st.signIn__description}>
                    <p>
                        If you don't have an account you can <Link to='/registration'>Registration</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn;