import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './index.module.css';
import { actionResetPassword, actionResetPasswordToken } from 'store/actions';

function ForgetPasswordPage() {
  const { token } = useParams();
  const dispatch = useDispatch();

  const [resetPasswordMode, setResetPasswordMode] = useState(false);

  const validation = useFormik({
    initialValues: {
      username: '',
      email: '',
      resetToken: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .required('Username is required.'),
      email: Yup.string()
        .trim()
        .email('Invalid email format'),
      resetToken: Yup.string().trim(),
      password: Yup.string()
        .trim()
        .min(6, 'Password must be at least 6 characters long'),
      passwordConfirm: Yup.string()
        .trim()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      dispatch(actionResetPassword(values));
    },
  });

  const switchMode = () => {
    dispatch(actionResetPasswordToken({ loginName: validation.values.username }));
  };

  useEffect(() => {
    if (token) {
      setResetPasswordMode(true);
    }
  }, [token]);

  return (
    <div className={styles.Container}>
      <div className={`${styles.Card} ${resetPasswordMode ? styles.ResetPasswordMode : ''}`}>
        <div className={styles.Logo}>
          <img src="/assets/img/logo.png" alt="logo" />
        </div>

        <div className={styles.TopContainer}>
          <div className={styles.Title}>
            {resetPasswordMode ? 'Reset Password' : 'Forget Password'}
          </div>

          <div className={styles.SubTitle2}>
            {resetPasswordMode
              ? 'Enter your new password below'
              : 'Enter your username to reset your password'}
          </div>
        </div>

        <form className={styles.Form} onSubmit={validation.handleSubmit}>
          {resetPasswordMode && (
            <div>
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
            </div>
          )}

          <label htmlFor="username" className={styles.Label}>USERNAME</label>

          <div className={styles.EmailContainer}>
            <input
              type="username"
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

          {!resetPasswordMode && (
            <button type="button" className={styles.Button} onClick={switchMode}>
              Next
            </button>
          )}

          {resetPasswordMode && (
            <>
              <label htmlFor="password" className={styles.Label}>PASSWORD</label>

              <div className={styles.PasswordContainer}>
                <input
                  type="password"
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
              </div>

              <label htmlFor="passwordConfirm" className={styles.Label}>CONFIRM PASSWORD</label>

              <div className={styles.PasswordContainer}>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.passwordConfirm || ''}
                  className={styles.Input}
                />

                {validation.touched.passwordConfirm && validation.errors.passwordConfirm
                  ? <div className={styles.Errors}>{validation.errors.passwordConfirm}</div>
                  : null}
              </div>

              <button type="submit" className={styles.Button}>
                Reset Password
              </button>
            </>
          )}

          <div>
            Remember your password?
            {' '}
            <Link to="/login" className={styles.Link}>Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
