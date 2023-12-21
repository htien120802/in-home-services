import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllProviderServices, actionGetProviderBookings, actionGetProviderProfile } from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import EditProfileModal from './EditProfile/EditProfile';
import ChangePassword from './ChangePasswordModal/ChangePasswordModal';
import ProviderReviewModal from './ProviderReviewModal/ProviderReviewModal';
import AddServiceModal from './AddServiceModal/AddServiceModal';

function ProviderProfilePage() {
  const dispatch = useDispatch();
  const providerState = useSelector((state) => state.Provider);
  const bookingState = useSelector((state) => state.Booking);
  const serviceState = useSelector((state) => state.Services);

  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [isAddServiceModalOpen, setAddServiceModalOpen] = useState(false);

  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };

  const closeChangePasswordModal = () => {
    setChangePasswordModalOpen(false);
  };

  const closeAddServiceModal = () => {
    setAddServiceModalOpen(false);
  };

  useEffect(() => {
    dispatch(actionGetProviderProfile());
    dispatch(actionGetProviderBookings());
    dispatch(actionGetAllProviderServices());
  }, []);

  return (
    <div className="main-content">
      <section className="section">
        <BannerSlider title="Profile" />

        <div className="section-body p-3">
          <div className="row mt-5">
            <div className="col-md-3">
              <div className="card card-statistic-1">
                <div className="card-icon bg-primary">
                  <i className="fas fa-coins" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Service Sold</h4>
                  </div>
                  <div className="card-body">
                    {bookingState?.bookings?.content?.filter((booking) => booking.status === 'DONE')
                      .reduce((total) => total + 1, 0)}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <Link to="/provider/services">
                <div className="card card-statistic-1">
                  <div className="card-icon bg-success">
                    <i className="fas fa-circle" />
                  </div>
                  <div className="card-wrap">
                    <div className="card-header">
                      <h4>Total Service</h4>
                    </div>
                    <div className="card-body">
                      {serviceState?.providerServices?.length}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row mt-sm-4">
            <div className="col-12 col-md-12 col-lg-5">
              <div className="card profile-widget">
                <div className="profile-widget-header">
                  {/* @if ($image)
                        <img alt="image" src="{{ asset($image)" class="rounded-circle profile-widget-picture">
                    @else
                        <img alt="image" src="{{ asset($default_avatar->image)" class="rounded-circle profile-widget-picture">
                    @endif */}
                </div>
                <div className="profile-widget-description">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <tr>
                        <td>Name</td>
                        <td>{`${providerState?.provider?.lastName} ${providerState?.provider?.firstName}`}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{providerState?.provider?.email}</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>
                          {providerState?.provider?.phone || (
                            'No phone information available'
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Addresses:</td>
                        <td>
                          {providerState?.provider?.addresses.map((address, index) => (
                            <React.Fragment key={address.id}>
                              {index > 0 && <br />}
                              {' '}
                              {`${address.number} ${address.street}, ${address.ward}, ${address.district}, ${address.city}`}
                            </React.Fragment>
                          ))}
                        </td>
                      </tr>

                    </table>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h1>Provider Action</h1>
                    </div>
                    <div className="card-body text-center">
                      <div className="row">
                        <div className="col-12">
                          <a href="javascript:;" onClick={() => setReviewModalOpen(true)} className="btn btn-primary btn-block btn-lg my-2">My Reviews</a>
                        </div>

                        <div className="col-12">
                          <a href="javascript:;" onClick={() => setChangePasswordModalOpen(true)} className="btn btn-warning btn-block btn-lg my-2">Change Password</a>
                        </div>

                        <div className="col-12">
                          <a href="javascript:;" onClick={() => setAddServiceModalOpen(true)} className="btn btn-primary btn-block btn-lg my-2">Add Service</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <EditProfileModal providerState={providerState} />
          </div>
        </div>
      </section>

      <ChangePassword isOpen={isChangePasswordModalOpen} onClose={closeChangePasswordModal} />
      <ProviderReviewModal isOpen={isReviewModalOpen} onClose={closeReviewModal} />
      <AddServiceModal isOpen={isAddServiceModalOpen} onClose={closeAddServiceModal} />
    </div>
  );
}

export default ProviderProfilePage;
