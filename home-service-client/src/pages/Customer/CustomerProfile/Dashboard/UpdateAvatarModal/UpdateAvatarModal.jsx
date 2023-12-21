import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import PropTypes from 'prop-types';
import { actionImageUpload, actionUpdateCustomerAvatar } from 'store/actions';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 1000000,
  },
  content: {
    width: '50%',
    maxHeight: '80vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000001,
  },
};

function UpdateAvatarModal({ customerState, isOpen, onClose }) {
  const dispatch = useDispatch();

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);
    setIsAvatarChanged(true);
  };

  const handleUpdateAvatar = async () => {
    if (!isAvatarChanged) {
      onClose();
      return;
    }

    const formData = new FormData();
    formData.append('avatar', selectedAvatar);

    const { data: { imageUrl } } = await dispatch(actionImageUpload(formData));

    dispatch(actionUpdateCustomerAvatar({
      avatar: imageUrl,
    }));

    onClose();
  };

  useEffect(() => {
    setSelectedAvatar(customerState.customer?.avatar || null);
    setIsAvatarChanged(false);
  }, [customerState.customer, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <div className="col-xl-6">
        <fieldset>
          <legend>Avatar</legend>
          {selectedAvatar && (
          <img
            src={URL.createObjectURL(selectedAvatar)}
            alt="Avatar Preview"
            style={{ width: '100px', height: '100px' }}
          />
          )}
          <input name="image" type="file" onChange={handleAvatarChange} />
        </fieldset>
        <button
          type="button"
          onClick={handleUpdateAvatar}
          className="common_btn mt_20"
          disabled={!isAvatarChanged}
        >
          Save Avatar
        </button>
      </div>
    </Modal>
  );
}

UpdateAvatarModal.propTypes = {
  customerState: PropTypes.shape({
    customer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      avatar: PropTypes.string,
      addresses: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          number: PropTypes.string,
          street: PropTypes.string,
          ward: PropTypes.string,
          district: PropTypes.string,
          city: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateAvatarModal;
