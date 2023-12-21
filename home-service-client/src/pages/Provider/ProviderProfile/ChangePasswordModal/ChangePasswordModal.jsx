import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionUpdateCustomerPassword } from 'store/actions';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 1000000,
  },
  content: {
    width: '50%',
    maxHeight: '80vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    background: 'white',
    zIndex: 1000001,
  },
};

function ChangePassword({ isOpen, onClose }) {
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
        values,
      }));
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
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
                    name="current_password"
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
                    name="password"
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
                    name="password_confirmation"
                    value={validation.values.confirmNewPassword}
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                  />
                </fieldset>
                <button type="submit" className="btn btn-warning btn-block btn-lg my-2">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

ChangePassword.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChangePassword;
