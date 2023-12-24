import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { actionUpdateService, actionGetAllCategory, actionApproveOrUnapproveRegisterService } from 'store/actions';

function UpdateServiceModalBody({ closeModal, extraObject }) {
  const dispatch = useDispatch();
  const [serviceDetails, setServiceDetails] = useState({
    thumbnail: extraObject?.thumbnail,
    name: extraObject?.name,
    works: extraObject?.works?.map((work) => ({ ...work })),
    openTime: extraObject?.openTime,
    closeTime: extraObject?.closeTime,
    category: extraObject?.category,
    status: extraObject?.status,
  });

  const categories = useSelector((state) => state.Category.categories);

  useEffect(() => {
    dispatch(actionGetAllCategory());
  }, [dispatch]);

  const handleUpdateService = async () => {
    if (
      serviceDetails.thumbnail === '' ||
      serviceDetails.name.trim() === '' ||
      serviceDetails.works.some((work) => work.description.trim() === '' || work.unit.trim() === '' || work.pricePerUnit <= 0) ||
      serviceDetails.openTime.trim() === '' ||
      serviceDetails.closeTime.trim() === ''
    ) {
      toast.error('Please fill in all the required fields.');
      return;
    }

    dispatch(actionUpdateService({ serviceId: extraObject.id, updatedData: serviceDetails }));
    closeModal();
  };

  const handleApproveOrUnapproveService = () => {
    dispatch(actionApproveOrUnapproveRegisterService({
      serviceId: extraObject.id,
      approve: !extraObject.approve,
    }))
  }

  const handleChange = (field, value) => {
    setServiceDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleWorkChange = (index, field, value) => {
    const updatedWorks = [...serviceDetails.works];
    updatedWorks[index] = { ...updatedWorks[index], [field]: value };
    setServiceDetails((prevDetails) => ({
      ...prevDetails,
      works: updatedWorks,
    }));
  };

  const handleAddWork = () => {
    setServiceDetails((prevDetails) => ({
      ...prevDetails,
      works: [...prevDetails.works, { description: '', unit: '', pricePerUnit: 0 }],
    }));
  };

  const handleRemoveWork = (index) => {
    const updatedWorks = [...serviceDetails.works];
    updatedWorks.splice(index, 1);
    setServiceDetails((prevDetails) => ({
      ...prevDetails,
      works: updatedWorks,
    }));
  };

  useEffect(() => {
    dispatch(actionGetAllCategory());
  }, [dispatch]);

  return (
    <>
      <p className="text-xl mt-8 text-center">Update the service details:</p>

      <div className="mb-4">
        <label className="label">Thumbnail:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4 pt-2 pb-2"
          placeholder="Url"
          value={serviceDetails.thumbnail}
          onChange={(e) => handleChange('thumbnail', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="label">Service Name:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Service Name"
          value={serviceDetails.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="label">Works:</label>
        {serviceDetails.works?.map((work, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center">
              <input
                type="text"
                className="input input-bordered w-full mb-2"
                placeholder="Description"
                value={work.description}
                onChange={(e) => handleWorkChange(index, 'description', e.target.value)}
              />
              {serviceDetails.works.length > 1 && (
                <button
                  className="btn btn-outline ml-2"
                  onClick={() => handleRemoveWork(index)}
                >
                  Remove
                </button>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="input input-bordered w-full mb-2"
                placeholder="Unit"
                value={work.unit}
                onChange={(e) => handleWorkChange(index, 'unit', e.target.value)}
              />
              <input
                type="number"
                className="input input-bordered w-full ml-2"
                placeholder="Price per Unit"
                value={work.pricePerUnit}
                onChange={(e) => handleWorkChange(index, 'pricePerUnit', e.target.value)}
              />
            </div>
          </div>
        ))}
        <button className="btn btn-outline" onClick={handleAddWork}>
          Add Work
        </button>
      </div>

      <div className="mb-4">
        <label className="label">Open Time:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Open Time"
          value={serviceDetails.openTime}
          onChange={(e) => handleChange('openTime', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="label">Close Time:</label>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Close Time"
          value={serviceDetails.closeTime}
          onChange={(e) => handleChange('closeTime', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="label">Select Category:</label>
        <select
          className="select select-bordered w-full mb-4"
          value={serviceDetails.category.id}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="label">Status:</label>
        <div>{serviceDetails.status}</div>
      </div>

      <div className="modal-action mt-4">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary w-36 ml-4" onClick={handleUpdateService}>
          Update Service
        </button>

        {(serviceDetails.status === 'UNAPPROVED' || serviceDetails.status === 'APPROVING') && (
          <button className="btn btn-success w-36 ml-4" onClick={handleApproveOrUnapproveService}>
            Approve
          </button>
        )}
        {serviceDetails.status === 'APPROVED' && (
          <button className="btn btn-warning w-36 ml-4" onClick={handleApproveOrUnapproveService}>
            Unapprove
          </button>
        )}
      </div>
    </>
  );
}

export default UpdateServiceModalBody;
