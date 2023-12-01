import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetServiceDetails } from 'store/actions';

import { v4 as uuidv4 } from 'uuid';

import BannerSlider from 'components/BannerSlider/BannerSlider';

import './index.module.css';

function ServiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Services);

  const {
    name,
    descriptions,
    price,
    category,
    images,
    reviews,
  } = data.service || {};

  useEffect(() => {
    dispatch(actionGetServiceDetails({ id }));
  }, []);

  return (
    <>
      <BannerSlider title="Services" />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {images?.length > 0 && (
            <div className="service-images">
              {images.map((image, index) => (
                <img
                  key={uuidv4()}
                  src={image}
                  alt={`Service ${index + 1}`}
                />
              ))}
            </div>
            )}
          </div>

          <div className="col-md-6">
            <h2>{name}</h2>

            <p>
              Category:
              {' '}
              {category?.categoryName}
            </p>

            <p>
              Price: $
              {price}
            </p>

            <h3>Description:</h3>

            <ul>
              {descriptions?.map((description) => (
                <li key={uuidv4()}>{description.statement}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {reviews?.length > 0 && (
            <div className="service-reviews">
              <h3>Reviews:</h3>

              <ul>
                {reviews.map((review) => (
                  <li key={uuidv4()}>{review}</li>
                ))}
              </ul>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetails;
