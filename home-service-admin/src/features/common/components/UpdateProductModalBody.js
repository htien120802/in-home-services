import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetAllCategory, actionUpdateService } from 'store/actions';

function UpdateProductModalBody({ extraObject, closeModal }) {
  const dispatch = useDispatch();
  const [updatedProductDetails, setUpdatedProductDetails] = useState({ ...extraObject });

  const categories = useSelector((state) => state.Category.categories);

  useEffect(() => {
    dispatch(actionGetAllCategory());
  }, [dispatch]);

  const handleUpdateProduct = async () => {

    dispatch(actionUpdateService(updatedProductDetails));
    closeModal();
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...updatedProductDetails.images];
    updatedImages[index] = { ...updatedImages[index], url: value };
    setUpdatedProductDetails((prevDetails) => ({
      ...prevDetails,
      images: updatedImages,
    }));
  };
  
  const handleAddImage = () => {
    setUpdatedProductDetails((prevDetails) => ({
      ...prevDetails,
      images: [...prevDetails.images, { url: '' }],
    }));
  };
  
  const handleRemoveImage = (index) => {
    const updatedImages = [...updatedProductDetails.images];
    updatedImages.splice(index, 1);
    setUpdatedProductDetails((prevDetails) => ({
      ...prevDetails,
      images: updatedImages,
    }));
  };
  

  const handleSpecChange = (index, field, value) => {
    const updatedSpecs = [...updatedProductDetails.specs];
    updatedSpecs[index] = { ...updatedSpecs[index], [field]: value };
    setUpdatedProductDetails((prevDetails) => ({
      ...prevDetails,
      specs: updatedSpecs,
    }));
  };

  const handleAddSpec = () => {
    setUpdatedProductDetails((prevDetails) => ({
      ...prevDetails,
      specs: [...prevDetails.specs, { k: '', v: '' }],
    }));
  };

  const handleRemoveSpec = (index) => {
    const updatedSpecs = [...updatedProductDetails.specs];
    updatedSpecs.splice(index, 1);
    setUpdatedProductDetails((prevDetails) => ({
      ...prevDetails,
      specs: updatedSpecs,
    }));
  };

  const handleChange = (field, value) => {
    setUpdatedProductDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Update the product details:</p>

      <div className="mb-4">
        <label className="label">Code:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Product Code"
          value={updatedProductDetails.code}
          onChange={(e) => handleChange('code', e.target.value)}
        />
        <label className="label">Product Name:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Product Name"
          value={updatedProductDetails.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <label className="label">Description:</label>
        <textarea
          className="textarea textarea-bordered w-full mb-4"
          placeholder="Product Description"
          value={updatedProductDetails.description}
          onChange={(e) => handleChange('description', e.target.value)}
        ></textarea>
        <label className="label">Short Description:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Short Description"
          value={updatedProductDetails.shortDescription}
          onChange={(e) => handleChange('shortDescription', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="label">Product Images:</label>
        {updatedProductDetails.images.map((image, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              className="input input-bordered w-full mb-2"
              placeholder="Image URL"
              value={image.url}
              onChange={(e) => handleImageChange(index, e.target.value)}
            />
            <button
              className="btn btn-outline btn-sm ml-2"
              onClick={() => handleRemoveImage(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button className="btn btn-primary btn-sm" onClick={handleAddImage}>
          Add Image
        </button>
        <p className="text-xs text-gray-500 mb-2">Enter image URLs</p>
      </div>

      <div className="mb-4">
        <label className="label">Select Category:</label>
        <select
          className="select select-bordered w-full mb-2"
          value={updatedProductDetails.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.nameCate}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="label">Specifications:</label>
        {updatedProductDetails.specs.map((spec, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              className="input input-bordered w-full mb-2"
              placeholder="Key"
              value={spec.k}
              onChange={(e) => handleSpecChange(index, 'k', e.target.value)}
            />
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Value"
              value={spec.v}
              onChange={(e) => handleSpecChange(index, 'v', e.target.value)}
            />
            <button
              className="btn btn-outline btn-sm ml-2"
              onClick={() => handleRemoveSpec(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button className="btn btn-primary btn-sm" onClick={handleAddSpec}>
          Add Specification
        </button>
      </div>

      <div className="mb-4">
        <label className="label">Price:</label>
        <input
          type="number"
          className="input input-bordered w-full mb-2"
          placeholder="Product Price"
          value={updatedProductDetails.price}
          onChange={(e) => handleChange('price', e.target.value)}
        />
        <label className="label">Quantity:</label>
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="Product Quantity"
          value={updatedProductDetails.quantity}
          onChange={(e) => handleChange('quantity', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="label">Select Order Status:</label>
        <select
          className="select select-bordered w-full"
          value={updatedProductDetails.enable}
          onChange={(e) => handleChange('enable', e.target.value)}
        >
          <option value="Enable">Enable</option>
          <option value="Unable">Unable</option>
        </select>
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary w-36 ml-4" onClick={handleUpdateProduct}>
          Update Product
        </button>
      </div>
    </>
  );
}

export default UpdateProductModalBody;
