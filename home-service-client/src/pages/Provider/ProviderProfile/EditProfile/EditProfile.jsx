import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import {
  actionUpdateProviderProfile,
} from 'store/actions';

function EditProfileModal({ providerState }) {
  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      firstName: providerState.provider?.firstName || '',
      lastName: providerState.provider?.lastName || '',
      phone: providerState.provider?.phone || '',
      addresses: providerState.provider?.addresses || [],
      image: null,
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
      dispatch(actionUpdateProviderProfile({
        values,
      }));
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
    <div className="col-12 col-md-12 col-lg-7">
      <div className="card">
        <form
          action="{{ route('provider.update-provider-profile') }}"
          encType="multipart/form-data"
          method="POST"
          onSubmit={validation.handleSubmit}
        >
          <div className="card-header">
            <h4>Edit Profile</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="form-group col-12">
                <label>New Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="image"
                  onChange={(event) => {
                    validation.setFieldValue('image', event.currentTarget.files[0]);
                  }}
                />
              </div>

              <div className="form-group col-6">
                <label>
                  First Name
                  {' '}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={validation.values.firstName}
                  name="firstName"
                  onChange={validation.handleChange}
                />
                {validation.touched.firstName && validation.errors.firstName && (
                  <div className="text-danger">{validation.errors.firstName}</div>
                )}
              </div>

              <div className="form-group col-6">
                <label>
                  Last Name
                  {' '}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={validation.values.lastName}
                  name="lastName"
                  onChange={validation.handleChange}
                />
                {validation.touched.lastName && validation.errors.lastName && (
                  <div className="text-danger">{validation.errors.lastName}</div>
                )}
              </div>

              <div className="form-group col-6">
                <label>
                  Phone
                  {' '}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={validation.values.phone}
                  name="phone"
                  onChange={validation.handleChange}
                />
                {validation.touched.phone && validation.errors.phone && (
                  <div className="text-danger">{validation.errors.phone}</div>
                )}
              </div>

              <div className="form-group col-6">
                <label>
                  Addresses
                  {' '}
                  <span className="text-danger">*</span>
                </label>
                {validation.values.addresses.map((address, index) => (
                  <div key={address.id}>
                    <input
                      type="text"
                      name={`addresses[${index}].number`}
                      value={address.number}
                      onChange={(e) => handleAddressChange(index, 'number', e.target.value)}
                      placeholder="Number"
                    />
                    <input
                      type="text"
                      name={`addresses[${index}].street`}
                      value={address.street}
                      onChange={(e) => handleAddressChange(index, 'street', e.target.value)}
                      placeholder="Street"
                    />
                    <input
                      type="text"
                      name={`addresses[${index}].ward`}
                      value={address.ward}
                      onChange={(e) => handleAddressChange(index, 'ward', e.target.value)}
                      placeholder="Ward"
                    />
                    <input
                      type="text"
                      name={`addresses[${index}].district`}
                      value={address.district}
                      onChange={(e) => handleAddressChange(index, 'district', e.target.value)}
                      placeholder="District"
                    />
                    <input
                      type="text"
                      name={`addresses[${index}].city`}
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
                {validation.touched.addresses && validation.errors.addresses && (
                  <div className="text-danger">{validation.errors.addresses}</div>
                )}
              </div>

              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

EditProfileModal.propTypes = {
  providerState: PropTypes.shape({
    provider: PropTypes.shape({
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
};

export default EditProfileModal;
