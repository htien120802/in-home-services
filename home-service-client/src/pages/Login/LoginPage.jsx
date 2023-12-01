import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionLogin } from 'store/actions';

import {
  TEXT_LENGTH_LIMIT, LOCATION,
} from 'constants/index';

import unsee from 'assets/icons/invisible.png';
import see from 'assets/icons/eye.png';

import styles from './index.module.css';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.Login.loading);

  const [showPassword, setShowPassword] = useState(false);

  const onToggleShowPassWord = () => {
    setShowPassword(!showPassword);
  };

  const callbackLoginSuccess = useCallback(() => {
    navigate(LOCATION.HOME);
  }, [navigate]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .required('Username không được bỏ trống.'),
      password: Yup.string()
        .trim()
        .required('Mật khẩu không được bỏ trống.')
        .min(TEXT_LENGTH_LIMIT.PASSWORD, 'Mật khẩu không được ít hơn 6 kí tự')
        .max(TEXT_LENGTH_LIMIT.SHORT, `Mật khẩu không được vượt quá ${TEXT_LENGTH_LIMIT.SHORT} kí tự`),
    }),

    onSubmit: (values) => {
      dispatch(actionLogin({ values, callback: callbackLoginSuccess }));
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
            Log In
          </div>

          <div className={styles.SubTitle2}>
            Enter your username and password below
          </div>
        </div>

        <form className={styles.Form} onSubmit={validation.handleSubmit}>
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

          <label htmlFor="password" className={styles.LabelContainer}>
            <div className={styles.Label}>PASSWORD</div>

            <button type="button" className={styles.Label1}>Forgot password?</button>
          </label>

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
              onClick={onToggleShowPassWord}
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

          {loading ? (
            <button type="submit" className={styles.Button} disabled>
              <div className={styles.Loader} />
            </button>
          ) : (
            <button type="submit" className={styles.Button}>
              Log In
            </button>
          )}
        </form>

        <div>
          Don&apos;t have account yet?
          {' '}
          <Link to={LOCATION.REGISTER} className={styles.Link}>Sign up now</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
