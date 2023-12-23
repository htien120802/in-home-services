import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateCategory } from 'store/actions';

function AddCategoryModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const rooms = useSelector((state) => state.Room.rooms);

  const handleAddCategory = async () => {
    dispatch(actionCreateCategory({ nameCate: categoryName, roomId: selectedRoomId }));

    closeModal();
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
        <label className="label">Select Room:</label>
        <select
          className="select select-bordered w-full"
          value={selectedRoomId}
          onChange={(e) => setSelectedRoomId(e.target.value)}
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
