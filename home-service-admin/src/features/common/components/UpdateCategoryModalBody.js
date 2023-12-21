import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionUpdateCategory } from 'store/actions';

function UpdateCategoryModalBody({ closeModal, extraObject }) {
  const dispatch = useDispatch();
  const [updatedNumberService, setUpdatedNumberService] = useState('');
  const [updatedThumbnail, setUpdatedThumbnail] = useState('');
  const [updatedCategoryName, setUpdatedCategoryName] = useState('');
  const [updatedSlug, setUpdatedSlug] = useState('');

  useEffect(() => {
    setUpdatedNumberService(extraObject.numberService);
    setUpdatedThumbnail(extraObject.thumbnail);
    setUpdatedCategoryName(extraObject.categoryName);
    setUpdatedSlug(extraObject.slug);
  }, [extraObject]);

  const handleUpdateCategory = async () => {
    dispatch(actionUpdateCategory({
      id: extraObject.id,
      numberService: updatedNumberService,
      thumbnail: updatedThumbnail,
      categoryName: updatedCategoryName,
      slug: updatedSlug,
    }));

    closeModal();
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">Update the category details:</p>

      <div className="mb-4">
        <input
          type="number"
          className="input input-bordered w-full mb-4"
          placeholder="Number of Services"
          value={updatedNumberService}
          onChange={(e) => setUpdatedNumberService(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Thumbnail URL"
          value={updatedThumbnail}
          onChange={(e) => setUpdatedThumbnail(e.target.value)}
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

      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Slug"
          value={updatedSlug}
          onChange={(e) => setUpdatedSlug(e.target.value)}
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
