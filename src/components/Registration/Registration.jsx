import { useFormik, validateYupSchema } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import RegButton from '../../UI/Buttons/RegistrationButton/RegButton';
import st from './Registration.module.css';
import * as Yup from 'yup';


const Registration = () => {

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
                            placeholder='FirstName'
                            onChange={formik.handleChange}
                            value={formik.values.firstName} />
                        {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
                        <label htmlFor='lastname'>LastName</label>
                        <input
                            id='lastName'
                            className={st.reg__input}
                            type='text'
                            placeholder='LastName'
                            onChange={formik.handleChange}
                            value={formik.values.lastName} />
                        {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className={st.reg__input}
                            type='email'
                            placeholder='Email'
                            onChange={formik.handleChange}
                            value={formik.values.email} />
                        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className={st.reg__input}
                            type='password'
                            placeholder='Password'
                            onChange={formik.handleChange}
                            value={formik.values.password} />
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
                    <RegButton name='Registration' />
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