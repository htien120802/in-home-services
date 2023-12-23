import React from 'react';
import Modal from 'react-modal';

import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 1000000,
  },
  content: {
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    border: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000001,
  },
};

function LogoutModal({
  isOpen, onClose, handleLogout, firstName,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirm"
      style={customStyles}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Confirm</h5>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
        </div>
        <div className="modal-body">
          <p>
            Are you sure you want to Logout
            {' '}
            <b>{firstName}</b>
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="common_btn" onClick={handleLogout}>Yes! Logout</button>

          <button type="button" className="common_btn del_btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

LogoutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default LogoutModal;
