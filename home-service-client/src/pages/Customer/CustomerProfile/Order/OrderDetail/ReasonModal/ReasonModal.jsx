import React from 'react';
import Modal from 'react-modal';

import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 1000001,
  },
  content: {
    width: '50%',
    maxHeight: '80vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    border: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000002,
  },
};

function ReasonModal({
  isOpen, onClose, handleReasonChange, cancellationReason, handleCancel,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <label htmlFor="cancellationReason">Cancellation Reason:</label>
      <textarea
        id="cancellationReason"
        value={cancellationReason}
        onChange={handleReasonChange}
      />
      <button type="button" onClick={handleCancel}>Cancel Order</button>
    </Modal>
  );
}

ReasonModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleReasonChange: PropTypes.func.isRequired,
  cancellationReason: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default ReasonModal;
