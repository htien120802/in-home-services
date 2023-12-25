import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  actionGetServiceById, actionGetAllServiceReviews, actionSetSelectedWorks, actionCreateCustomerServiceReview,
} from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';

import { v4 as uuidv4 } from 'uuid';
import { formatPriceWithCommas } from 'utils';

import './index.module.css';
import { toast } from 'react-toastify';

function ServiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Services);
  const reviews = useSelector((state) => state.Review.serviceReviews);
  const selectedWorks = useSelector((state) => state.Booking.works);
  const totalPrice = useSelector((state) => state.Booking.totalPrice);

  const {
    name,
    descriptions,
    thumbnail,
    openTime,
    closeTime,
    works,
    provider,
  } = data.serviceDetails || {};

  const [activeTab, setActiveTab] = useState('description');
  const [userRating, setUserRating] = useState(5);
  const [comment, setComment] = useState('');
  const [selectedWorksQuantity, setSelectedWorksQuantity] = useState({});

  const handleUserRating = (rating) => {
    setUserRating(rating);
  };

  const handleCheck = (event) => {
    if (selectedWorks.length <= 0) {
      event.preventDefault();
      toast.error('You need to select at least a workspace');
    }
  };

  const handleQuantityChange = (event, workDescription) => {
    const quantity = parseInt(event.target.value, 10) || 0;

    setSelectedWorksQuantity((prevQuantities) => ({
      ...prevQuantities,
      [workDescription]: quantity,
    }));

    dispatchSelectedWorks();
  };

  const handleIncrementQuantity = (workDescription) => {
    setSelectedWorksQuantity((prevQuantities) => ({
      ...prevQuantities,
      [workDescription]: (prevQuantities[workDescription] || 0) + 1,
    }));

    dispatchSelectedWorks();
  };

  const handleDecrementQuantity = (workDescription) => {
    setSelectedWorksQuantity((prevQuantities) => {
      const updatedQuantity = (prevQuantities[workDescription] || 0) - 1;
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantity > 0) {
        updatedQuantities[workDescription] = updatedQuantity;
      } else {
        delete updatedQuantities[workDescription];
      }
      return updatedQuantities;
    });

    dispatchSelectedWorks();
  };

  const calculateTotalPrice = () => Object.entries(selectedWorksQuantity).reduce((acc, [workDescription, quantity]) => {
    const work = works.find((item) => item.description === workDescription);
    if (work) {
      return acc + work.pricePerUnit * quantity;
    }
    return acc;
  }, 0);

  const dispatchSelectedWorks = () => {
    const updatedSelectedWorks = Object.keys(selectedWorksQuantity).map((workDescription) => {
      const work = works.find((item) => item.description === workDescription);

      if (work) {
        return {
          work,
          quantity: selectedWorksQuantity[workDescription],
        };
      }

      return null;
    }).filter(Boolean);

    const tp = calculateTotalPrice();

    dispatch(actionSetSelectedWorks({ selectedWorks: updatedSelectedWorks, totalPrice: tp }));
    sessionStorage.setItem('selectedWorks', JSON.stringify(updatedSelectedWorks));
    sessionStorage.setItem('totalPrice', JSON.stringify(tp));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    dispatch(actionCreateCustomerServiceReview(id, {
      rating: userRating,
      comment,
    }));
  };

  const openGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(provider?.email)}`, '_blank');
  };

  useEffect(() => {
    dispatchSelectedWorks();
  }, [selectedWorksQuantity]);

  useEffect(() => {
    dispatch(actionGetServiceById({ id }));
    dispatch(actionGetAllServiceReviews({ id }));
  }, []);

  useEffect(() => {
    const savedSelectedWorks = JSON.parse(sessionStorage.getItem('selectedWorks')) || [];
    const savedTotalPrice = JSON.parse(sessionStorage.getItem('totalPrice')) || 0;

    dispatch(actionSetSelectedWorks({
      selectedWorks: savedSelectedWorks,
      totalPrice: savedTotalPrice,
    }));
  }, []);

  return (
    <>
      <BannerSlider title="Services" />

      <section className="wsus__service_details mt_100 xs_mt_70 mb_90 xs_mb_60">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="wsus__service_details_content">
                <div className="wsus__service_details_img">
                  <img src={thumbnail} alt="service setails" className="imf-fluid w-100 h-100" />
                </div>
                <div className="wsus__service_details_text">
                  <h2>{name}</h2>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        type="button"
                        className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => handleTabClick('description')}
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        type="button"
                        className={`nav-link ${activeTab === 'availability' ? 'active' : ''}`}
                        onClick={() => handleTabClick('availability')}
                      >
                        Availability
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        type="button"
                        className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => handleTabClick('reviews')}
                      >
                        Client Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content tab_details" id="pills-tabContent">
                    <div className={`tab-pane fade show ${activeTab === 'description' ? 'active' : ''}`} role="tabpanel">
                      <p>
                        {descriptions}
                        <br />
                      </p>

                      <div className="row">
                        <div className="col-xl-12 col-md-12">
                          <div className="wsus_details_list_item">
                            <h4>What you will get:</h4>
                            <ul className="list">
                              {works && works.map((work) => (
                                <li key={work.id} className="d-flex justify-content-between align-items-center">
                                  <label htmlFor={`work_${work.id}`}>
                                    {work.description}
                                    {' '}
                                    -
                                    {' '}
                                    {work.pricePerUnit}
                                    đ
                                  </label>

                                  <div className="align-items-center">
                                    <div className="input-group">
                                      <div className="input-group-prepend">
                                        <button
                                          className="btn-outline-secondary"
                                          type="button"
                                          style={{ border: '1px solid #ced4da', padding: '5px', width: '35px' }}
                                          onClick={() => handleDecrementQuantity(work.description)}
                                        >
                                          -
                                        </button>
                                      </div>
                                      <input
                                        type="text"
                                        className="form-control"
                                        style={{ width: '40px', textAlign: 'center' }}
                                        value={selectedWorksQuantity[work.description] || 0}
                                        onChange={(e) => handleQuantityChange(e, work.description)}
                                      />
                                      <div className="input-group-append">
                                        <button
                                          className="btn-outline-secondary"
                                          type="button"
                                          style={{ border: '1px solid #ced4da', padding: '5px', width: '35px' }}
                                          onClick={() => handleIncrementQuantity(work.description)}
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 'availability' ? 'show active' : ''}`} role="tabpanel">
                      <h4>Service Availability  </h4>
                      <ul className="details_time">
                        <li>
                          <span>Every Day</span>
                          {' '}
                          {openTime}
                          {' '}
                          -
                          {' '}
                          {closeTime}
                        </li>
                      </ul>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`} role="tabpanel">
                      <div className="col-12 mt_25">
                        <div className="wsus__pagination">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination" />
                          </nav>
                        </div>
                      </div>

                      <div className="other-reviews">
                        <h4>Other Reviews</h4>
                        <ul className="list-unstyled">
                          {reviews && reviews.content && reviews.content.map((review) => (
                            <li key={review.id} className="card mb-3" style={{ borderColor: '#fcbf49' }}>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-1">
                                    <img
                                      src={review.customer.avatar}
                                      alt={`Avatar of ${review.customer.firstName}`}
                                      className="rounded-circle"
                                      style={{ width: '50px', height: '50px' }}
                                    />
                                  </div>
                                  <div className="col-md-10">
                                    <strong>{`${review.customer.firstName} ${review.customer.lastName}`}</strong>
                                    <p className="mb-2">
                                      {[1, 2, 3, 4, 5].map((value) => (
                                        <i
                                          key={value}
                                          className={`fa${value <= review.rating ? 's' : 'r'} fa-star ml-1`}
                                          onClick={() => handleUserRating(value)}
                                          aria-hidden="true"
                                          style={{ color: '#fcbf49' }}
                                        />
                                      ))}
                                      {' '}
                                      <span style={{ fontSize: '12px' }}>
                                        {new Date(review.date).toLocaleDateString()}
                                      </span>
                                    </p>

                                    <p className="mb-2 mt-2">{review.comment}</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="wsus__review_input mt_65 xs_mt_35">
                        <form onSubmit={(e) => handleSubmitReview(e)}>
                          <h4>Write Your Reviews</h4>
                          <p>
                            <span>Rating : </span>
                            {[1, 2, 3, 4, 5].map((value) => (
                              <i
                                key={value}
                                className={`fa${value <= userRating ? 's' : 'r'} fa-star`}
                                onClick={() => handleUserRating(value)}
                                aria-hidden="true"
                              />
                            ))}
                            <span id="show_rating">{userRating}</span>
                          </p>
                          <div className="row">
                            <div className="col-xl-12">
                              <fieldset>
                                <legend>Comment*</legend>
                                <textarea
                                  rows="5"
                                  name="comment"
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                  placeholder="Write a Comment"
                                />
                              </fieldset>
                            </div>

                            <div className="col-xl-12">
                              <button type="submit" className="btn common_btn mt_20">
                                Submit Review
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
            <div className="col-xl-4 col-lg-4" style={{ position: 'relative' }}>
              <div
                className="wsus__sidebar stick"
                id="sticky_sidebar"
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0px)',
                  width: '356px',
                  left: '841.5px',
                  zIndex: '100',
                  top: '95px',
                }}
              >
                <div className="row">
                  <div id="providerInfo" className="col-12 col-md-6 col-lg-12">
                    <div className="wsus__service_provider">
                      <img id="providerAvatar" src={provider?.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=mp'} alt="service provider" className="img-fluid w-100" />
                      <h3><a id="providerLink" href="#">{`${provider?.firstName} ${provider?.lastName}`}</a></h3>
                      <div className="info">
                        {/* <p>
                          Order Complete
                          <span id="orderComplete">0</span>
                        </p>
                        <p>
                          Provider Rating
                          <b>
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <span id="providerRating">(0)</span>
                          </b>
                        </p>
                        <hr /> */}

                        <a id="providerPhone" href="tel:">
                          <i className="fas fa-phone-alt" aria-hidden="true" />
                          {' '}
                          {provider?.phone}
                        </a>
                        <a id="providerEmail" href="mailto:">
                          <i className="fas fa-envelope" aria-hidden="true" />
                          {provider?.email}
                        </a>

                        <a href="javascript:;" className="contact_provider_btn" onClick={openGmail}>Contact Here</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-12">
                    <div className="wsus__package mt_25">
                      <p>My Package</p>
                      <h2>
                        {formatPriceWithCommas(totalPrice || 0)}
                        đ
                      </h2>
                      <ul>
                        {selectedWorks.map((selectedWork) => (
                          <li key={uuidv4()}>
                            {selectedWork.work.description}
                            :
                            {' '}
                            {selectedWork.quantity}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/booking/${id}`}
                        onClick={handleCheck}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetails;
