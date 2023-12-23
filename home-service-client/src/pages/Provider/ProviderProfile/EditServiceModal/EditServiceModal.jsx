import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { actionUpdateProviderService } from 'store/actions';
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

function EditServiceModal({ isOpen, onClose, serviceDetails }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Category.categories);

  const validationSchema = Yup.object({
    thumbnail: Yup.string().required('Thumbnail is required'),
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
      thumbnail: serviceDetails.thumbnail || '',
      name: serviceDetails.name || '',
      works: serviceDetails.works || [
        {
          description: '',
          unit: '',
          pricePerUnit: '',
        },
      ],
      openTime: serviceDetails.openTime || '',
      closeTime: serviceDetails.closeTime || '',
      category: serviceDetails.category?.id || '',
    },
    validationSchema,
    onSubmit: (values) => {
      const selectedCategory = categories.find((category) => category.id === values.category);
      dispatch(actionUpdateProviderService({ ...values, id: serviceDetails.id, category: selectedCategory }));

      onClose();
    },
  });

  useEffect(() => {
    // Update form values when serviceDetails change (e.g., when editing a different service)
    formik.setValues({
      thumbnail: serviceDetails.thumbnail || '',
      name: serviceDetails.name || '',
      works: serviceDetails.works || [
        {
          description: '',
          unit: '',
          pricePerUnit: '',
        },
      ],
      openTime: serviceDetails.openTime || '',
      closeTime: serviceDetails.closeTime || '',
      category: serviceDetails.category?.id || '',
    });
  }, [serviceDetails]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      className="main-content"
    >
      <section className="section">
        <div className="section-header">
          <h1>Edit Service</h1>
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
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
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
                  <input
                    type="text"
                    className="form-control"
                    name="thumbnail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.thumbnail}
                  />
                  {formik.touched.thumbnail && formik.errors.thumbnail && (
                  <div className="text-danger">{formik.errors.thumbnail}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="section-body">
            <button type="submit" className="btn btn-primary">
              Complete
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
}

EditServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  serviceDetails: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    name: PropTypes.string,
    works: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string,
        unit: PropTypes.string,
        pricePerUnit: PropTypes.number,
      }),
    ),
    openTime: PropTypes.string,
    closeTime: PropTypes.string,
    category: PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryName: PropTypes.string,
      slug: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    avgRating: PropTypes.number,
    distance: PropTypes.number,
  }),
};

EditServiceModal.defaultProps = {
  serviceDetails: {
    id: '',
    thumbnail: '',
    name: '',
    works: [
      {
        id: '',
        description: '',
        unit: '',
        pricePerUnit: 0,
      },
    ],
    openTime: '',
    closeTime: '',
    category: {
      id: '',
      categoryName: '',
      slug: '',
      thumbnail: '',
    },
    avgRating: 0,
    distance: 0,
  },
};

export default EditServiceModal;
