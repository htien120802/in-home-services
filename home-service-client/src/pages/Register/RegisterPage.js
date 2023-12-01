import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionRegister } from 'store/actions';

import {
  EMAIL_REGEX, TEXT_LENGTH_LIMIT, LOCATION,
} from 'constants/index';

import unsee from 'assets/icons/invisible.png';
import see from 'assets/icons/eye.png';

import styles from './index.module.css';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const callbackRegisterSuccess = useCallback(() => {
    navigate(LOCATION.LOGIN);
  }, [navigate]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: '',
      password: '',
      username: '',
      firstName: '',
      lastName: '',
      roleName: 'customer',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .required('Email is required.')
        .matches(EMAIL_REGEX, 'Invalid email format'),
      username: Yup.string()
        .trim()
        .required('Username is required.'),
      password: Yup.string()
        .trim()
        .required('Password is required.')
        .min(TEXT_LENGTH_LIMIT.PASSWORD, 'Password must be at least 6 characters long')
        .max(TEXT_LENGTH_LIMIT.SHORT, `Password must not exceed ${TEXT_LENGTH_LIMIT.SHORT} characters`),
      firstName: Yup.string().trim().required('First Name is required.'),
      lastName: Yup.string().trim().required('Last Name is required.'),
      roleName: Yup.string()
        .required('Role is required.')
        .oneOf(['customer', 'provider'], 'Invalid role'),
    }),

    onSubmit: (values) => {
      dispatch(actionRegister({ values, callback: callbackRegisterSuccess }));
    },
  });

  return (
    <div className={styles.Container}>
      <div className={styles.Card}>
        <div className={styles.Logo}>
          <img src="/assets/img/logo.png" alt="logo" />
        </div>

        <div className={styles.TopContainer}>
          <div className={styles.Title}>
            Register
          </div>

          <div className={styles.SubTitle2}>
            Create your account below
          </div>
        </div>

        <form className={styles.Form} onSubmit={validation.handleSubmit}>
          <label htmlFor="email" className={styles.Label}>EMAIL</label>
          <div className={styles.EmailContainer}>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.email || ''}
              className={styles.Input}
            />

            {validation.touched.email && validation.errors.email
              ? <div className={styles.Errors}>{validation.errors.email}</div>
              : null}
          </div>

          <label htmlFor="username" className={styles.Label}>USERNAME</label>
          <div className={styles.EmailContainer}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.username || ''}
              className={styles.Input}
            />
            {validation.touched.username && validation.errors.username
              ? <div className={styles.Errors}>{validation.errors.username}</div>
              : null}
          </div>

          <label htmlFor="password" className={styles.Label}>PASSWORD</label>
          <div className={styles.PasswordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.password || ''}
              className={styles.Input}
            />

            {validation.touched.password && validation.errors.password
              ? <div className={styles.Errors}>{validation.errors.password}</div>
              : null}

            <button
              type="button"
              className={styles.Unsee}
              onClick={onToggleShowPassword}
            >
              {showPassword ? (
                <img
                  src={see}
                  alt="see"
                />
              ) : (
                <img
                  src={unsee}
                  alt="unsee"
                />
              )}
            </button>
          </div>

          <label htmlFor="firstName" className={styles.Label}>FIRST NAME</label>
          <div className={styles.EmailContainer}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.firstName || ''}
              className={styles.Input}
            />
            {validation.touched.firstName && validation.errors.firstName
              ? <div className={styles.Errors}>{validation.errors.firstName}</div>
              : null}
          </div>

          <label htmlFor="lastName" className={styles.Label}>LAST NAME</label>
          <div className={styles.EmailContainer}>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.lastName || ''}
              className={styles.Input}
            />
            {validation.touched.lastName && validation.errors.lastName
              ? <div className={styles.Errors}>{validation.errors.lastName}</div>
              : null}
          </div>

          <label htmlFor="roleName" className={styles.Label}>ROLE</label>
          <div className={styles.EmailContainer}>
            <select
              name="roleName"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.roleName || 'customer'}
              className={styles.Input}
            >
              <option value="customer">Customer</option>
              <option value="provider">Provider</option>
            </select>
            {validation.touched.roleName && validation.errors.roleName
              ? <div className={styles.Errors}>{validation.errors.roleName}</div>
              : null}
          </div>

          <button type="submit" className={styles.Button}>
            Register
          </button>
        </form>

        <div>
          Already have an account?
          {' '}
          <Link to={LOCATION.LOGIN} className={styles.Link}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
