import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { actionImageUpload } from 'store/actions';

function CreateServicePage() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Service Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
    category: Yup.string().required('Category is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      category: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });

  const handleImageUpload = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      dispatch(actionImageUpload(file))
        .then((response) => {
          formik.setFieldValue('thumbnail', response.url);
        });
    }
  };

  return (
    <div>
      <h2>Create Service</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Service Name:</label>

          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label>Description:</label>

          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />

          {formik.errors.description && formik.touched.description && (
            <div className="error">{formik.errors.description}</div>
          )}
        </div>

        <div>
          <label>Price:</label>

          <input
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />

          {formik.errors.price && formik.touched.price && (
            <div className="error">{formik.errors.price}</div>
          )}
        </div>

        <div>
          <label>Category:</label>

          <input
            type="text"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          />

          {formik.errors.category && formik.touched.category && (
            <div className="error">{formik.errors.category}</div>
          )}
        </div>

        <div>
          <label>Upload Thumbnail (Image):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <button type="submit">Create Service</button>
      </form>
    </div>
  );
}

export default CreateServicePage;
