import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import {
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
      addresses: customerState.customer?.addresses || [],
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
      addresses: Yup.array().of(
        Yup.object().shape({
          number: Yup.string().trim(),
          street: Yup.string().trim(),
          ward: Yup.string().trim(),
          district: Yup.string().trim(),
          city: Yup.string().trim(),
        }),
      ),
    }),

    onSubmit: (values) => {
      dispatch(actionUpdateCustomerProfile({
        values,
      }));

      onClose();
    },
  });

  const handleAddressChange = (index, field, value) => {
    validation.setFieldValue(`addresses[${index}].${field}`, value);
  };

  const handleAddAddress = () => {
    validation.setFieldValue('addresses', [
      ...validation.values.addresses,
      {
        number: '',
        street: '',
        ward: '',
        district: '',
        city: '',
      },
    ]);
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = [...validation.values.addresses];
    updatedAddresses.splice(index, 1);
    validation.setFieldValue('addresses', updatedAddresses);
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
              <fieldset>
                <legend>address*</legend>
                {validation.values.addresses.map((address, index) => (
                  <div key={address.id}>
                    <input
                      type="text"
                      name={`number-${index}`}
                      value={address.number}
                      onChange={(e) => handleAddressChange(index, 'number', e.target.value)}
                      placeholder="Number"
                    />
                    <input
                      type="text"
                      name={`street-${index}`}
                      value={address.street}
                      onChange={(e) => handleAddressChange(index, 'street', e.target.value)}
                      placeholder="Street"
                    />
                    <input
                      type="text"
                      name={`ward-${index}`}
                      value={address.ward}
                      onChange={(e) => handleAddressChange(index, 'ward', e.target.value)}
                      placeholder="Ward"
                    />
                    <input
                      type="text"
                      name={`district-${index}`}
                      value={address.district}
                      onChange={(e) => handleAddressChange(index, 'district', e.target.value)}
                      placeholder="District"
                    />
                    <input
                      type="text"
                      name={`city-${index}`}
                      value={address.city}
                      onChange={(e) => handleAddressChange(index, 'city', e.target.value)}
                      placeholder="City"
                    />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleRemoveAddress(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddAddress}
                >
                  Add Address
                </button>
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
