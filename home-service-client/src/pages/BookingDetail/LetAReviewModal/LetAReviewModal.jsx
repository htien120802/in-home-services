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

function LetAReviewModal({
  isOpen, onClose, handleReviewChange, handleRatingChange, review, rating, handleSubmit,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <label htmlFor="rating">Rating:</label>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <i
            key={value}
            className={`fa${value <= rating ? 's' : 'r'} fa-star`}
            onClick={() => handleRatingChange({ target: { value } })}
            aria-hidden="true"
          />
        ))}
      </div>
      <span id="show_rating">{rating}</span>

      <label htmlFor="review">Review:</label>
      <textarea
        id="review"
        value={review}
        onChange={handleReviewChange}
      />

      <button type="button" onClick={handleSubmit}>Submit Review</button>
    </Modal>
  );
}

LetAReviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleReviewChange: PropTypes.func.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LetAReviewModal;
