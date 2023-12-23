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
    maxHeight: '80vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    background: 'white',
    zIndex: 1000001,
  },
};

function ProviderReviewModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      className="main-content"
    >
      <section className="section">
        <div className="section-header">
          <h1>user.Review Details</h1>
        </div>

        <div className="section-body">
          <a href="{{ route('provider.review-list')" className="btn btn-primary">
            <i className="fas fa-list" />
            {' '}
            user.Review List
          </a>
          <div className="row mt-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive table-invoice">
                    <table className="table table-striped table-bordered">
                      <tr>
                        <td>user.Client</td>
                        <td>review-&gt;user-&gt;name</td>
                      </tr>
                      <tr>
                        <td>user.Client Email</td>
                        <td>review-&gt;user-&gt;email</td>
                      </tr>
                      <tr>
                        <td>user.Service</td>
                        <td><a href="{{ route('provider.service.edit', $review-&gt;service_id)">review-&gt;service-&gt;name</a></td>
                      </tr>
                      <tr>
                        <td>user.Rating</td>
                        <td>review-&gt;rating</td>
                      </tr>
                      <tr>
                        <td>user.Review</td>
                        <td>review-&gt;review</td>
                      </tr>
                      <tr>
                        <td>user.Created At</td>
                        <td>review-&gt;created_at-&gt;format('H:i A, d-m-Y')</td>
                      </tr>
                      <tr>
                        <td>user.Status</td>
                        <td>
                          @if ($review-&gt;status==1)
                          <span className="badge badge-success">user.Active</span>
                          @else
                          <span className="badge badge-danger">user.Inactive</span>
                          @endif
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
}

ProviderReviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProviderReviewModal;
