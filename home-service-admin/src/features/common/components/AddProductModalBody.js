import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateService, actionGetAllCategory } from 'store/actions';

function AddProductModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({
    code: '',
    name: '',
    description: '',
    shortDescription: '',
    images: [],
    category: '',
    room: '',
    specs: [{ k: '', v: '' }],
    price: 0,
    quantity: 0,
  });

  const categories = useSelector((state) => state.Category.categories);
  const rooms = useSelector((state) => state.Room.rooms);

  useEffect(() => {
    dispatch(actionGetAllCategory());
  }, [dispatch]);

  const handleAddProduct = async () => {
    // Additional validation can be added based on your requirements

    dispatch(actionCreateService(productDetails));
    closeModal();
  };

  const handleChange = (field, value) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleSpecChange = (index, field, value) => {
    const updatedSpecs = [...productDetails.specs];
    updatedSpecs[index] = { ...updatedSpecs[index], [field]: value };
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      specs: updatedSpecs,
    }));
  };
  
  const handleAddSpec = () => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      specs: [...prevDetails.specs, { k: '', v: '' }],
    }));
  };
  
  const handleRemoveSpec = (index) => {
    const updatedSpecs = [...productDetails.specs];
    updatedSpecs.splice(index, 1);
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      specs: updatedSpecs,
    }));
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Enter the product details:</p>
      <div className="mb-4">
        <label className="label">Code:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Product Code"
          value={productDetails.code}
          onChange={(e) => handleChange('code', e.target.value)}
        />
        <label className="label">Product Name:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Product Name"
          value={productDetails.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <label className="label">Description:</label>
        <textarea
          className="textarea textarea-bordered w-full mb-4"
          placeholder="Product Description"
          value={productDetails.description}
          onChange={(e) => handleChange('description', e.target.value)}
        ></textarea>
        <label className="label">Short Description:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Short Description"
          value={productDetails.shortDescription}
          onChange={(e) => handleChange('shortDescription', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="label">Product Images:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-2"
          placeholder="Image URL"
          value={productDetails.images}
          onChange={(e) => handleChange('images', [e.target.value])}
        />
        <p className="text-xs text-gray-500 mb-2">Enter image URLs separated by commas</p>
      </div>

      <div className="mb-4">
        <label className="label">Select Category:</label>
        <select
          className="select select-bordered w-full mb-2"
          value={productDetails.category}
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
        <label className="label">Select Room:</label>
        <select
          className="select select-bordered w-full mb-2"
          value={productDetails.room}
          onChange={(e) => handleChange('room', e.target.value)}
        >
          <option value="" disabled>
            Select Room
          </option>
          {rooms.map((room) => (
            <option key={room._id} value={room._id}>
              {room.nameRoom}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="label">Specifications:</label>
        {productDetails.specs.map((spec, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center">
              <input
                type="text"
                className="input input-bordered w-full mb-2"
                placeholder="Key"
                value={spec.k}
                onChange={(e) => handleSpecChange(index, 'k', e.target.value)}
              />
              {productDetails.specs.length > 1 && (
                <button
                  className="btn btn-outline btn-square ml-2"
                  onClick={() => handleRemoveSpec(index)}
                >
                  Remove
                </button>
              )}
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Value"
              value={spec.v}
              onChange={(e) => handleSpecChange(index, 'v', e.target.value)}
            />
          </div>
        ))}
        <button className="btn btn-outline" onClick={handleAddSpec}>
          Add Specification
        </button>
      </div>

      <div className="mb-4">
        <label className="label">Price:</label>
        <input
          type="number"
          className="input input-bordered w-full mb-2"
          placeholder="Product Price"
          value={productDetails.price}
          onChange={(e) => handleChange('price', e.target.value)}
        />
        <label className="label">Quantity:</label>
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="Product Quantity"
          value={productDetails.quantity}
          onChange={(e) => handleChange('quantity', e.target.value)}
        />
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary w-36 ml-4" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </>
  );
}

export default AddProductModalBody;
