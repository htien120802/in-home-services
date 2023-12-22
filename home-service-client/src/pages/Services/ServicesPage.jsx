import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllCategory } from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import ServiceList from './ServiceList/ServiceList';

function Services() {
  const location = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Category.categories);

  const params = new URLSearchParams(location.search);
  const initialName = params.get('name') || '';
  const initialCategorySlug = params.get('categorySlug') || '';

  const [queryParams, setQueryParams] = useState({
    name: initialName,
    sortBy: '',
    sortDirection: '',
    categorySlug: initialCategorySlug,
  });

  const handleInputChange = (e) => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(actionGetAllCategory());
  }, []);

  useEffect(() => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      name: initialName,
      categorySlug: initialCategorySlug,
    }));
  }, [location]);

  return (
    <>
      <BannerSlider title="Services" />

      <section className="wsus__services_page mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <form id="search_service_form">
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-lg-3">
                <div className="wsus__service_search">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={queryParams.name}
                    onChange={handleInputChange}
                    className="select2-selection select2-selection--single"
                    placeholder="Enter name to search"
                  />
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 col-lg-3">
                <div className="wsus__service_search">
                  <label>Category</label>
                  <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-iiho" style={{ width: '113px' }}>
                    <span className="selection">
                      <select
                        name="categorySlug"
                        className="select2 select2-container select2-container--default select_2 search_service_item select2-selection select2-selection--single"
                        value={queryParams.categorySlug}
                        onChange={handleInputChange}
                      >
                        <option className="select2-selection__rendered" id="select2-category-qs-container" value="">Select</option>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>

                        {categories.map((category) => (
                          <option key={category.id} value={category.slug}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                    </span>
                  </span>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 col-lg-3">
                <div className="wsus__service_search">
                  <label>Sort By</label>
                  <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '113px' }}>
                    <span className="selection">
                      <select
                        name="sortBy"
                        className="select2 select2-container select2-container--default select_2 search_service_item select2-selection select2-selection--single"
                        value={queryParams.sortBy}
                        onChange={handleInputChange}
                      >
                        <option className="select2-selection__rendered" id="select2-sortby-qs-container" value="">Select</option>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                        <option value="distance">Distance</option>
                        <option value="avgRating">Rating</option>
                      </select>
                    </span>
                  </span>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 col-lg-3">
                <div className="wsus__service_search">
                  <label>Sort Direction</label>
                  <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '113px' }}>
                    <span className="selection">
                      <select
                        name="sortDirection"
                        className="select2 select2-container select2-container--default select_2 search_service_item select2-selection select2-selection--single"
                        value={queryParams.sortDirection}
                        onChange={handleInputChange}
                      >
                        <option className="select2-selection__rendered" id="select2-sortdirection-qs-container" value="">Select</option>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                        <option value="DESC">Descending</option>
                        <option value="ASC">Ascending</option>
                      </select>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </form>

          <ServiceList queryParams={queryParams} />

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
