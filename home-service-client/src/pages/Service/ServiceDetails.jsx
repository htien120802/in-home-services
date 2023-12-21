import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetServiceById, actionGetAllServiceReviews } from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import ServicesRelated from './ServicesRelated/ServicesRelated';

import { formatPriceWithCommas } from 'utils';

import './index.module.css';

function ServiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Services);

  const {
    name,
    descriptions,
    category,
    images,
    works,
  } = data.serviceDetails || {};

  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    dispatch(actionGetServiceById({ id }));
    dispatch(actionGetAllServiceReviews({ id }));
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
                  <img src={images && images[0]?.url} alt="service setails" className="imf-fluid w-100 h-100" />
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
                        <div className="col-xl-7 col-md-7">
                          <div className="wsus_details_list_item">
                            <h4>What you will get:</h4>
                            <ul className="list">
                              <li>Washroom Cleaning</li>
                              <li>Page Load (time, size, number of requests).</li>
                              <li>Company Profile Build</li>
                              <li>Adance Data analysis operation.</li>
                              <li>Page Load (time, size, number of requests)</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-xl-7 col-md-7">
                          <div className="wsus_details_list_item">
                            <h4>Benifits of the Package:</h4>
                            <ul className="list">
                              <li>Home Service</li>
                              <li>Service Gurantee</li>
                              <li>Quality Service</li>
                              <li>Page Load (time, size, number of requests)</li>
                              <li>Kitchenroom Cleaning</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 'availability' ? 'show active' : ''}`} role="tabpanel">
                      <h4>Service Availability  </h4>
                      <ul className="details_time">
                        <li>
                          <span>Sunday</span>
                          {' '}
                          08:00 AM - 02:00 PM
                        </li>
                        <li>
                          <span>Monday</span>
                          {' '}
                          08:00 AM - 02:00 PM
                        </li>
                        <li>
                          <span>Tuesday</span>
                          {' '}
                          08:00 AM - 02:00 PM
                        </li>
                        <li>
                          <span>Wednesday</span>
                          {' '}
                          08:00 AM - 02:00 PM
                        </li>
                        <li>
                          <span>Thursday</span>
                          {' '}
                          08:00 AM - 02:00 PM
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

                      <div className="wsus__review_input mt_65 xs_mt_35">
                        <form id="serviceReviewForm">
                          <input type="hidden" name="_token" value="d7jmTeUP8xuGr7OBDDdSLphIk3RnZ82L0RbOsp1D" />

                          <h4>Write Your Reviews</h4>
                          <p>
                            <span>Rating : </span>
                            <i className="fas fa-star service_rat" data-rating="1" onClick="productReview(1)" aria-hidden="true" />
                            <i className="fas fa-star service_rat" data-rating="2" onClick="productReview(2)" aria-hidden="true" />
                            <i className="fas fa-star service_rat" data-rating="3" onClick="productReview(3)" aria-hidden="true" />
                            <i className="fas fa-star service_rat" data-rating="4" onClick="productReview(4)" aria-hidden="true" />
                            <i className="fas fa-star service_rat" data-rating="5" onClick="productReview(5)" aria-hidden="true" />
                            <span id="show_rating">(5.0)</span>
                          </p>
                          <div className="row">

                            <input type="hidden" id="service_id" name="service_id" value="11" />
                            <input type="hidden" id="service_id" name="provider_id" value="2" />
                            <input type="hidden" name="rating" value="5" id="service_rating" />

                            <div className="col-xl-12">
                              <fieldset>
                                <legend>Comment*</legend>
                                <textarea rows="5" name="comment" placeholder="Write a Comment" />
                              </fieldset>
                            </div>

                            <div className="col-xl-12">
                              <button type="button" id="after_login" className="common_btn mt_20">

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
                  <div className="col-12 col-md-6 col-lg-12">
                    <div className="wsus__package">
                      <p>My Package</p>
                      <h2>
                        {works && formatPriceWithCommas(works.reduce((total, work) => total + work.pricePerUnit, 0))}
                        đ
                      </h2>
                      <ul>
                        {works && works.map((work) => (
                          <li key={work.id}>{work.description}</li>
                        ))}
                      </ul>
                      <Link to={`/booking/${id}`}>Book Now</Link>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12">
                    <div className="wsus__service_provider mt_25">
                      <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/david-simmons-2023-05-07-10-44-34-5733.png" alt="service provider" className="img-fluid w-100" />
                      <h3><a href="https://demo.websolutionus.com/aabcserv/providers/david-simmons83">David Simmons</a></h3>
                      <h6>Member Since Sep 2022</h6>
                      <div className="info">
                        <p>
                          Order Complete
                          <span>10</span>
                        </p>
                        <p>
                          Provider Rating
                          <b>
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <span>(2)</span>
                          </b>
                        </p>
                        <hr />

                        <a href="callto:123-343-4444">
                          <i className="fas fa-phone-alt" aria-hidden="true" />
                          {' '}
                          123-343-4444
                        </a>
                        <a href="mailto:provider@gmail.com">
                          <i className="fas fa-envelope" aria-hidden="true" />
                          provider@gmail.com

                        </a>

                        <a href="javascript:;" className="contact_provider_btn" onClick="sendNewMessagePrevLogin()">Contact Here</a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesRelated category={category} />
    </>
  );
}

export default ServiceDetails;
