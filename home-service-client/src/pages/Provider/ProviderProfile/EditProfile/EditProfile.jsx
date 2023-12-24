import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import {
  actionAddProviderAddress,
  actionUpdateProviderAvatar,
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
      address: providerState.provider?.addresses[0] || {
        number: '',
        street: '',
        ward: '',
        district: '',
        city: '',
      },
      avatar: providerState.provider?.avatar || '',
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
      dispatch(actionUpdateProviderProfile({
        values,
      }));

      if (values.avatar instanceof File) {
        const formData = new FormData();

        formData.append('avatar', values.avatar);

        dispatch(actionUpdateProviderAvatar(formData));
      }
    },
  });

  const handleAddressChange = (field, value) => {
    validation.setFieldValue(`address.${field}`, value);
  };

  const handleAddAddress = () => {
    dispatch(actionAddProviderAddress({
      number: validation.values.address.number || '',
      street: validation.values.address.street || '',
      ward: validation.values.address.ward || '',
      district: validation.values.address.district || '',
      city: validation.values.address.city || '',
    }));
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
                <img
                  src={validation.values.avatar instanceof File
                    ? URL.createObjectURL(validation.values.avatar)
                    : validation.values.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=mp'}
                  alt="user"
                  className="img-fluid user_avatar"
                  style={{ width: '100px', height: '100px' }}
                />
                <br />
                <label>New Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="avatar"
                  onChange={(event) => {
                    validation.setFieldValue('avatar', event.currentTarget.files[0]);
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
                  Address
                  {' '}
                  <span className="text-danger">*</span>
                </label>
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

                {!providerState.provider?.addresses[0] && (
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
