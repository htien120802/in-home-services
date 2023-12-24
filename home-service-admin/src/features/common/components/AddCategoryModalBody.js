import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreateCategory } from 'store/actions';

function AddCategoryModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleAddCategory = async () => {
    dispatch(actionCreateCategory({newData: {
      categoryName,
      thumbnail,
    }}));

    closeModal();
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Enter the category details:</p>
  
      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="label">Upload Thumbnail:</label>
        <input
          type="file"
          accept="image/*"
          className="input input-bordered w-full pt-2 pb-2"
          onChange={handleThumbnailChange}
        />
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36 ml-4" onClick={handleAddCategory}>
          Add Category
        </button>
      </div>
    </>
  );  
}

export default AddCategoryModalBody;
