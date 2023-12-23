import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import {
  actionAddCustomerAddress,
  actionUpdateCustomerProfile,
} from 'store/actions';

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
    zIndex: 1000001,
  },
};

function EditProfileModal({ customerState, isOpen, onClose }) {
  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      firstName: customerState.customer?.firstName || '',
      lastName: customerState.customer?.lastName || '',
      phone: customerState.customer?.phone || '',
      address: customerState.customer?.addresses[0] || {
        number: '',
        street: '',
        ward: '',
        district: '',
        city: '',
      },
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .required('Firstname không được bỏ trống.'),
      lastName: Yup.string()
        .trim()
        .required('Lastname không được bỏ trống.'),
      phone: Yup.string()
        .trim()
        .required('Phone không được bỏ trống.'),
      address: Yup.object().shape({
        number: Yup.string().trim(),
        street: Yup.string().trim(),
        ward: Yup.string().trim(),
        district: Yup.string().trim(),
        city: Yup.string().trim(),
      }),
    }),

    onSubmit: (values) => {
      dispatch(actionUpdateCustomerProfile({
        values,
      }));

      onClose();
    },
  });

  const handleAddressChange = (field, value) => {
    validation.setFieldValue(`address.${field}`, value);
  };

  const handleAddAddress = () => {
    dispatch(actionAddCustomerAddress({
      number: '',
      street: '',
      ward: '',
      district: '',
      city: '',
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      id="profile_edit_section"
      style={customStyles}
    >
      <div className="wsus__review_input">
        <form onSubmit={validation.handleSubmit} id="editProfileFormId">
          <div className="row">
            <div className="col-xl-6">
              <fieldset>
                <legend>First Name*</legend>
                <input
                  type="text"
                  name="name"
                  value={validation.values.firstName}
                  onBlur={validation.handleBlur}
                  onChange={validation.handleChange}
                />
              </fieldset>
            </div>
            <div className="col-xl-6">
              <fieldset>
                <legend>Last Name*</legend>
                <input
                  type="text"
                  name="name"
                  value={validation.values.lastName}
                  onBlur={validation.handleBlur}
                  onChange={validation.handleChange}
                />
              </fieldset>
            </div>
            <div className="col-xl-6">
              <fieldset>
                <legend>phone*</legend>
                <input
                  type="text"
                  name="phone"
                  value={validation.values.phone}
                  onBlur={validation.handleBlur}
                  onChange={validation.handleChange}
                />
              </fieldset>
            </div>

            <div className="col-xl-12">
              <fieldset className="p-2">
                <legend>Address*</legend>
                {Object.keys(validation.values.address).map((field) => (
                  field.toLowerCase() !== 'id' && (
                  <div key={field}>
                    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <input
                      type="text"
                      name={field}
                      value={validation.values.address[field]}
                      onChange={(e) => handleAddressChange(field, e.target.value)}
                      placeholder={`Enter ${field}`}
                      {...(validation.values.address[field] && { id: field })}
                    />
                  </div>
                  )
                ))}

                {!validation.values.address && (
                <>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddAddress}
                  >
                    Add Address
                  </button>
                  {validation.touched.address && validation.errors.address && (
                  <div className="text-danger">{validation.errors.address}</div>
                  )}
                </>
                )}
              </fieldset>

              <button type="submit" className="btn btn-primary mt_20">
                Save Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}

EditProfileModal.propTypes = {
  customerState: PropTypes.shape({
    customer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      avatar: PropTypes.string,
      addresses: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          number: PropTypes.string,
          street: PropTypes.string,
          ward: PropTypes.string,
          district: PropTypes.string,
          city: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditProfileModal;
