import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  actionGetCustomerProfile, actionGetCustomerBookings,
} from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';

function ProfilePage() {
  const dispatch = useDispatch();

  const bookingState = useSelector((state) => state.Booking);
  const customerState = useSelector((state) => state.Customer);

  useEffect(() => {
    dispatch(actionGetCustomerProfile());
    dispatch(actionGetCustomerBookings());
  }, []);

  return (
    <>
      <BannerSlider title="Profile" />

      <section className="wsus__dashboard mt_90 xs_mt_60 mb_100 xs_mb_70">
        <div className="container">
          <div className="wsus__dashboard_area">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <div className="wsus__dashboard_menu">
                  <div className="dasboard_header d-flex flex-wrap align-items-center">
                    <img src="{{ $user->image ? asset($user->image) : asset($default_avatar->image" alt="user" className="img-fluid w-100 user_avatar" />
                    <div className="text">
                      <h2>{customerState?.customer?.name}</h2>
                    </div>
                  </div>
                  <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <span><i className="fas fa-user" /></span>
                      {' '}
                      dashboard

                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <span>
                        <i
                          className="fas fa-bags-shopping"
                        />
                      </span>
                      {' '}
                      Order

                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <span>
                        <i
                          className="fas fa-star"
                        />
                      </span>
                      {' '}
                      Reviews

                    </button>

                    <button
                      className="nav-link support_ticket_tab"
                      id="v-pills-messages-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages2"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages2"
                      aria-selected="false"
                    >
                      <span>
                        <i
                          className="fas fa-user-headset"
                        />
                      </span>
                      {' '}
                      Support Ticket

                    </button>

                    <button
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span>
                        <i
                          className="fas fa-user-lock"
                        />
                      </span>
                      {' '}
                      Change Password
                      {' '}

                    </button>

                    <button
                      className="nav-link"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <span>
                        {' '}
                        <i className="fas fa-sign-out-alt" />
                        {' '}
                      </span>
                      Logout

                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="wsus__dashboard_content">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >

                      <div className="wsus_dashboard_body">
                        <p>Hello, name</p>
                        <h3>Welcome to your Profile</h3>
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <div
                              className="wsus__dashboard_info"
                              style={{ background: "url('/assets/images/dash_ifo_bg.jpg')" }}
                            >
                              <span><i className="fas fa-bags-shopping" /></span>
                              <h5>Order Active</h5>
                              <h2>active_order</h2>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div
                              className="wsus__dashboard_info"
                              style={{ background: "url('/assets/images/dash_ifo_bg.jpg')" }}
                            >
                              <span><i className="fas fa-box-check" /></span>
                              <h5>Order Completed</h5>
                              <h2>complete_order</h2>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div
                              className="wsus__dashboard_info"
                              style={{ background: "url('/assets/images/dash_ifo_bg.jpg')" }}
                            >
                              <span><i className="far fa-clipboard-list-check" /></span>
                              <h5>Total Order</h5>
                              <h2>total_order</h2>
                            </div>
                          </div>
                        </div>
                        <div className="wsus_dash_personal_info">
                          <div
                            className="nav nav-pills d-flex flex-wrap justify-content-between align-items-center"
                            id="pills-tab"
                            role="tablist"
                          >
                            <h4>Personal Information</h4>
                            <button id="toggleProfileSection" className="nav-link" type="button" role="tab">edit</button>
                          </div>
                          <div className="tab-content">
                            <div id="profile_section">
                              <p>
                                <span>Name:</span>
                                {' '}
                                name
                              </p>
                              <p>
                                <span>Email:</span>
                                {' '}
                                email
                              </p>
                              <p>
                                <span>Phone:</span>
                                {' '}
                                phone
                              </p>
                              <p>
                                <span>Address:</span>
                                {' '}
                                address
                              </p>
                            </div>
                            <div id="profile_edit_section" className="d-none">
                              <div className="wsus__review_input">
                                <form id="editProfileFormId">
                                  @csrf
                                  <div className="row">
                                    <div className="col-xl-6">
                                      <fieldset>
                                        <legend>Name*</legend>
                                        <input type="text" name="name" value="name" />
                                      </fieldset>
                                    </div>
                                    <div className="col-xl-6">
                                      <fieldset>
                                        <legend>email*</legend>
                                        <input type="email" name="email" value="email" readOnly />
                                      </fieldset>
                                    </div>
                                    <div className="col-xl-6">
                                      <fieldset>
                                        <legend>phone*</legend>
                                        <input type="text" name="phone" value="phone" />
                                      </fieldset>
                                    </div>
                                    <div className="col-xl-6">
                                      <fieldset>
                                        <legend>Image</legend>
                                        <input name="image" type="file" />
                                      </fieldset>
                                    </div>

                                    <div className="col-xl-12">
                                      <fieldset>
                                        <legend>address*</legend>
                                        <input type="text" name="address" value="address" />
                                      </fieldset>
                                      <button type="submit" className="common_btn mt_20">
                                        Save Profile

                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="wsus_dashboard_body">
                        <div className="wsus_dashboard_order">
                          <div className="table-responsive">
                            <table className="table table-striped">
                              <tbody>
                                <tr className="t_header">
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Amount</th>
                                  <th>Action'</th>
                                </tr>
                                {bookingState && bookingState.bookings.map((order) => (
                                  <tr key={order._id}>
                                    <td>
                                      <h5>
                                        #
                                        {order.order_id}
                                      </h5>
                                    </td>
                                    <td>
                                      <p>{order.booking_date ? new Date(order.booking_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}</p>
                                    </td>
                                    <td>
                                      {order.order_status === 'approved_by_provider' && <span className="active">Active</span>}
                                      {order.order_status === 'complete' && <span className="complete">Completed</span>}
                                      {(order.order_status === 'order_declined_by_provider' || order.order_status === 'order_declined_by_client') && <span className="cancel">Declined</span>}
                                      {order.order_status === 'awaiting_for_provider_approval' && <span className="cancel">Pending</span>}
                                    </td>
                                    <td>
                                      <h5>
                                        đ
                                        {order.total_amount}
                                      </h5>
                                    </td>
                                    <td>
                                      <a href="javascript:;" className="view_invoice">View Details</a>
                                    </td>
                                  </tr>
                                ))}

                              </tbody>
                            </table>
                          </div>

                          <div className="row">
                            custom_pagination
                          </div>
                        </div>

                        <div className="wsus__invoice">
                          <a className="go_back">
                            <i className="fas fa-long-arrow-alt-left" />
                            {' '}
                            go back
                          </a>
                          <div id="invoice_box" />

                        </div>

                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="wsus_dashboard_body">
                        <div className="wsus__review_input">
                          <h3>change password</h3>
                          <form id="changePasswordFormId">
                            @csrf
                            <div className="row">
                              <div className="col-lg-6">
                                <fieldset>
                                  <legend>Current Password*</legend>
                                  <input type="password" name="current_password" />
                                </fieldset>
                              </div>
                              <div className="col-lg-6">
                                <fieldset>
                                  <legend>New Password*</legend>
                                  <input type="password" name="password" />
                                </fieldset>
                              </div>
                              <div className="col-lg-12">
                                <fieldset>
                                  <legend>Confirm New Password*</legend>
                                  <input type="password" name="password_confirmation" />
                                </fieldset>
                                <button type="submit" className="common_btn mt_20">Update</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Confirm</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <img src="{{ asset('frontend/images/logout_img.png'" alt="Logout" className="img-fluid w-100" />
                <p>
                  Are you sure you want to Logout
                  {' '}
                  <b>Kingserv</b>
                </p>
              </div>
              <div className="modal-footer">
                <a className="common_btn" href="{{ route('user.logout'">Yes! Logout</a>

                <button type="button" className="del_btn" data-bs-dismiss="modal">cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfilePage;
