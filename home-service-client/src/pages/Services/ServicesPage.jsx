import React from 'react';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import ServiceList from './ServiceList/ServiceList';

function Services() {
  return (
    <>
      <BannerSlider title="Services" />

      <section className="wsus__services_page mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <form action="https://demo.websolutionus.com/aabcserv/services" id="search_service_form">
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-lg-3">
                <div className="wsus__service_search">
                  <label>Location</label>
                  <select name="service_area" className="select_2 search_service_item select2-hidden-accessible" data-select2-id="select2-data-1-smhj" tabIndex="-1" aria-hidden="true">
                    <option value="" data-select2-id="select2-data-3-fjvy">Select</option>

                    <option value="chandigarh">Chandigarh</option>
                    <option value="florida-city">Florida City</option>
                    <option value="gandhinagar">Gandhinagar</option>
                    <option value="london">London</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="san-diego">San Diego</option>
                    <option value="san-jose">San Jose</option>
                    <option value="tallahassee">Tallahassee</option>
                    <option value="weston">Weston</option>

                  </select>
                  <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-tjlr" style={{ width: '115px' }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-service_area-0j-container" aria-controls="select2-service_area-0j-container">
                        <span className="select2-selection__rendered" id="select2-service_area-0j-container" role="textbox" aria-readonly="true" title="Select">Select</span>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-3">
                <div className="wsus__service_search">
                  <label>Category</label>
                  <select name="category" className="select_2 search_service_item select2-hidden-accessible" data-select2-id="select2-data-4-x8p0" tabIndex="-1" aria-hidden="true">
                    <option value="" data-select2-id="select2-data-6-d5xb">Select</option>

                    <option value="ac-repair">AC Repair</option>
                    <option value="car-services">Car Services</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="painting">Painting</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="plumbing">Plumbing</option>
                  </select>
                  <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-a5p9" style={{ width: '113px' }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-category-mj-container" aria-controls="select2-category-mj-container">
                        <span className="select2-selection__rendered" id="select2-category-mj-container" role="textbox" aria-readonly="true" title="Select">Select</span>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-3">
                <div className="wsus__service_search">
                  <label>Price Range</label>
                  <select name="price_range" className="select_2 search_service_item select2-hidden-accessible" data-select2-id="select2-data-7-8n7m" tabIndex="-1" aria-hidden="true">
                    <option value="" data-select2-id="select2-data-9-7t1y">Select</option>
                    <option value="low_price">low Price</option>
                    <option value="high_price">high Price</option>
                  </select>
                  <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-8-nibu" style={{ width: '95px' }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-price_range-bc-container" aria-controls="select2-price_range-bc-container">
                        <span className="select2-selection__rendered" id="select2-price_range-bc-container" role="textbox" aria-readonly="true" title="Select">Select</span>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-3">
                <div className="wsus__service_search ">
                  <label>Others</label>
                  <select name="others" className="select_2 search_service_item select2-hidden-accessible" data-select2-id="select2-data-10-81s2" tabIndex="-1" aria-hidden="true">

                    <option value="" data-select2-id="select2-data-12-fcd1">Select</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                  <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-11-0mqa" style={{ width: '108px' }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-others-fu-container" aria-controls="select2-others-fu-container">
                        <span className="select2-selection__rendered" id="select2-others-fu-container" role="textbox" aria-readonly="true" title="Select">Select</span>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </form>

          <ServiceList />

          <div className="row mt_75 xs_mt_45">
            <div className="col-12">
              <div className="wsus__brand_list">
                <div className="row justify-content-center">
                  <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                    <div className="wsus__single_brand">
                      <a href="https://websolutionus.com/">
                        <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/our-partner-2022-09-29-12-53-34-4755.jpg" alt="brand" className="img-fluid w-100" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                    <div className="wsus__single_brand">
                      <a href="https://websolutionus.com/service">
                        <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/our-partner-2022-09-29-12-54-08-8857.jpg" alt="brand" className="img-fluid w-100" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                    <div className="wsus__single_brand">
                      <a href="https://codecanyon.net/user/websolutionus/portfolio">
                        <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/our-partner-2022-09-29-12-54-34-2602.jpg" alt="brand" className="img-fluid w-100" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                    <div className="wsus__single_brand">
                      <a href="https://www.google.com/">
                        <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/-2023-01-15-03-30-10-1839.png" alt="brand" className="img-fluid w-100" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                    <div className="wsus__single_brand">
                      <a href="javascript:;">
                        <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/our-partner-2022-09-29-12-55-08-6101.jpg" alt="brand" className="img-fluid w-100" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                    <div className="wsus__single_brand">
                      <a href="javascript:;">
                        <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/our-partner-2022-09-29-12-55-25-2540.jpg" alt="brand" className="img-fluid w-100" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                    <div className="wsus__single_brand">
                      <a href="javascript:;">
                        <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/our-partner-2022-09-29-12-55-42-2263.jpg" alt="brand" className="img-fluid w-100" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-2 col-sm-6 col-md-4 col-lg-3">
                    <div className="wsus__single_brand">
                      <a href="javascript:;">
                        <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/our-partner-2022-09-29-12-55-55-5814.jpg" alt="brand" className="img-fluid w-100" />
                      </a>
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

export default Services;
