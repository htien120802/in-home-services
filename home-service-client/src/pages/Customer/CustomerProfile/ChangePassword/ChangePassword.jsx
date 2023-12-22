import React from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionUpdateCustomerPassword } from 'store/actions';

function ChangePassword() {
  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },

    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .trim()
        .required('Không được bỏ trống.'),
      newPassword: Yup.string()
        .trim()
        .required('Không được bỏ trống.'),
      confirmNewPassword: Yup.string()
        .trim()
        .required('Không được bỏ trống.'),
    }),

    onSubmit: (values) => {
      dispatch(actionUpdateCustomerPassword({
        newPassword: {
          password: values.newPassword,
          passwordConfirm: values.confirmNewPassword,
        },
      }));
    },
  });

  return (
    <div
      className="tab-pane"
      id="v-pills-settings"
      role="tabpanel"
      aria-labelledby="v-pills-settings-tab"
    >
      <div className="wsus_dashboard_body">
        <div className="wsus__review_input">
          <h3>change password</h3>
          <form onSubmit={validation.handleSubmit} id="changePasswordFormId">
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <legend>Current Password*</legend>
                  <input
                    type="password"
                    name="currentPassword"
                    value={validation.values.currentPassword}
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                  />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <legend>New Password*</legend>
                  <input
                    type="password"
                    name="newPassword"
                    value={validation.values.newPassword}
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                  />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <legend>Confirm New Password*</legend>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    value={validation.values.confirmNewPassword}
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                  />
                </fieldset>
                <button type="submit" className="common_btn mt_20">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
