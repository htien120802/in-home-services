import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionUpdateCategory } from 'store/actions';

function UpdateCategoryModalBody({ closeModal, extraObject }) {
  const dispatch = useDispatch();
  const [updatedThumbnail, setUpdatedThumbnail] = useState('');
  const [updatedCategoryName, setUpdatedCategoryName] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setUpdatedThumbnail(extraObject.thumbnail);
    setUpdatedCategoryName(extraObject.categoryName);
  }, [extraObject]);

  const handleUpdateCategory = async () => {
    if (isUpdated) {
      dispatch(actionUpdateCategory({
        categoryId: extraObject.id,
        updatedData: {
          thumbnail: updatedThumbnail,
          categoryName: updatedCategoryName,
        }
      }));
    } else {
      dispatch(actionUpdateCategory({
        categoryId: extraObject.id,
        updatedData: {
          categoryName: updatedCategoryName,
        }
      }))
    }

    closeModal();
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setUpdatedThumbnail(file);
    setIsUpdated(true);
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Update the category details:</p>

      <div className="mb-4">
        <label className="label">Thumbnail:</label>
        <input
          type="file"
          accept="image/*"
          className="input input-bordered w-full mb-4 pt-2 pb-2"
          onChange={handleThumbnailChange}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Category Name"
          value={updatedCategoryName}
          onChange={(e) => setUpdatedCategoryName(e.target.value)}
        />
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36 ml-4" onClick={handleUpdateCategory}>
          Update Category
        </button>
      </div>
    </>
  );
}

export default UpdateCategoryModalBody;
