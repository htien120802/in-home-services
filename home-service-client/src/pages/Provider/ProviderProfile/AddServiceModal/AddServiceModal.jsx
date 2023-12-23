import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import PropTypes from 'prop-types';

import { actionGetAllCategory, actionRegisterProviderService } from 'store/actions';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { v4 as uuidv4 } from 'uuid';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 1000000,
  },
  content: {
    width: '70%',
    maxHeight: '80vh',
    overflowY: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    background: 'white',
    zIndex: 1000001,
  },
};

function AddServiceModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Category.categories);
  const loading = useSelector((state) => state.Services.loading);

  const validationSchema = Yup.object({
    thumbnail: Yup.mixed().required('Thumbnail is required'),
    name: Yup.string().required('Service Name is required'),
    openTime: Yup.string().required('Open Time is required'),
    closeTime: Yup.string().required('Close Time is required'),
    category: Yup.string().required('Category is required'),
    works: Yup.array().of(
      Yup.object().shape({
        description: Yup.string().required('Description is required'),
        unit: Yup.string().required('Unit is required'),
        pricePerUnit: Yup.number().required('Price Per Unit is required'),
      }),
    ),
  });

  const formik = useFormik({
    initialValues: {
      thumbnail: null,
      name: '',
      works: [
        {
          description: '',
          unit: '',
          pricePerUnit: 0,
        },
      ],
      openTime: '',
      closeTime: '',
      category: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      dispatch(actionRegisterProviderService({
        thumbnail: values.thumbnail,
        service: JSON.stringify({
          name: values.name,
          works: values.works,
          openTime: values.openTime,
          closeTime: values.closeTime,
          category: values.category,
        }),
      }));

      setIsSubmitting(true);
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (event) => {
    formik.setFieldValue('thumbnail', event.target.files[0]);
  };

  const handleDescriptionChange = (e, index) => {
    const newWorks = [...formik.values.works];
    newWorks[index].description = e.target.value;
    formik.setFieldValue('works', newWorks);
  };

  const handleUnitChange = (e, index) => {
    const newWorks = [...formik.values.works];
    newWorks[index].unit = e.target.value;
    formik.setFieldValue('works', newWorks);
  };

  const handlePricePerUnitChange = (e, index) => {
    const newWorks = [...formik.values.works];
    newWorks[index].pricePerUnit = e.target.value;
    formik.setFieldValue('works', newWorks);
  };

  useEffect(() => {
    dispatch(actionGetAllCategory());
  }, []);

  useEffect(() => {
    if (isSubmitting && !loading) {
      onClose();

      setIsSubmitting(false);
      formik.resetForm();
    }
  }, [loading, isSubmitting, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      className="main-content"
    >
      <section className="section">
        <div className="section-header">
          <h1>Create Service</h1>
        </div>

        <form onSubmit={formik.handleSubmit} id="serviceForm" className="p-5">
          <div className="section-body">
            <div className="card">
              <div className="card-header">
                <h4>Basic Information</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Service Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                  <div className="text-danger">{formik.errors.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Open Time</label>
                  <input
                    type="text"
                    className="form-control"
                    name="openTime"
                    value={formik.values.openTime}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.openTime && formik.errors.openTime && (
                  <div className="text-danger">{formik.errors.openTime}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Close Time</label>
                  <input
                    type="text"
                    className="form-control"
                    name="closeTime"
                    value={formik.values.closeTime}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.closeTime && formik.errors.closeTime && (
                  <div className="text-danger">{formik.errors.closeTime}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select
                    className="form-control"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.categoryName}
                      </option>
                    ))}
                  </select>
                  {formik.touched.category && formik.errors.category && (
                  <div className="text-danger">{formik.errors.category}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="section-body">
            <div className="card">
              <div className="card-header">
                <h4>Works</h4>
              </div>

              <div className="card-body">
                {formik.values.works.map((work, index) => (
                  <div key={uuidv4()}>
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        type="text"
                        className="form-control"
                        name={`works[${index}].description`}
                        value={work.description}
                        onChange={(e) => handleDescriptionChange(e, index)}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.works && formik.touched.works[index] && formik.errors.works && formik.errors.works[index] && (
                      <div className="text-danger">{formik.errors.works[index].description}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Unit</label>
                      <input
                        type="text"
                        className="form-control"
                        name={`works[${index}].unit`}
                        value={work.unit}
                        onChange={(e) => handleUnitChange(e, index)}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.works && formik.touched.works[index] && formik.errors.works && formik.errors.works[index] && (
                      <div className="text-danger">{formik.errors.works[index].unit}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Price Per Unit</label>
                      <input
                        type="text"
                        className="form-control"
                        name={`works[${index}].pricePerUnit`}
                        value={work.pricePerUnit}
                        onChange={(e) => handlePricePerUnitChange(e, index)}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.works && formik.touched.works[index] && formik.errors.works && formik.errors.works[index] && (
                      <div className="text-danger">{formik.errors.works[index].pricePerUnit}</div>
                      )}
                    </div>

                    {index === formik.values.works.length - 1 && (
                    <button
                      type="button"
                      className="btn"
                      onClick={() => formik.setFieldValue(`works[${index + 1}]`, { description: '', unit: '', pricePerUnit: '' })}
                    >
                      Add New Work
                    </button>
                    )}

                    {formik.values.works.length > 1 && (
                    <button
                      type="button"
                      className="btn"
                      onClick={() => formik.setFieldValue('works', formik.values.works.filter((_, i) => i !== index))}
                    >
                      Delete Work
                    </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-body">
            <div className="card">
              <div className="card-header">
                <h4>Thumbnail</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Thumbnail</label>
                  {formik.values.thumbnail && (
                  <img
                    src={URL.createObjectURL(formik.values.thumbnail)}
                    alt="Avatar Preview"
                    style={{ width: '100px', height: '100px' }}
                  />
                  )}
                  <input
                    type="file"
                    className="form-control-file"
                    onChange={(e) => handleImageUpload(e)}
                  />
                  {formik.touched.thumbnail && formik.errors.thumbnail && (
                  <div className="text-danger">{formik.errors.thumbnail}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="section-body">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden text-white">Loading...</span>
                </div>
              ) : 'Create Service'}
            </button>
          </div>
        </form>

      </section>
    </Modal>
  );
}

AddServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddServiceModal;
