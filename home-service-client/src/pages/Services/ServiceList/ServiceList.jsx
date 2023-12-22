import React, { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { v4 as uuidv4 } from 'uuid';

import { actionGetAllPublicServices } from 'store/actions';

function ServiceList({ queryParams }) {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const servicesState = useSelector((state) => state.Services);
  const { publicServices } = servicesState;

  const organizeServices = (services) => {
    const groupedServices = [];
    for (let i = 0; i < services.length; i += 3) {
      groupedServices.push(services.slice(i, i + 3));
    }
    return groupedServices;
  };

  const renderPaginationLinks = () => {
    const links = [];

    for (let i = 0; i < publicServices.totalPages; i += 1) {
      links.push(
        <li key={i} className={`page-item ${i === pageNumber ? 'active' : ''}`}>
          <Link className="page-link" to={`/services/page/${i}`}>
            {i + 1}
          </Link>
        </li>,
      );
    }

    return links;
  };

  const renderServiceRows = () => {
    const groupedServices = organizeServices(publicServices.content || []);

    return groupedServices.map((serviceGroup) => (
      <div key={uuidv4()} className="row">
        {serviceGroup.map((service) => (
          <div key={service.id} className="col-md-4 d-flex">
            <div className="full decorate_blog flex-column">
              <img
                src={service.thumbnail}
                alt="#"
                className="img-fluid"
                style={{ objectFit: 'cover', height: '75%' }}
              />
              <Link className="decorate_blog_bt mt-auto" style={{ lineHeight: '35px' }} to={`/services/${service.id}`}>
                {service.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  useEffect(() => {
    if (pageNumber === undefined || Number.isNaN(Number(pageNumber))) {
      navigate('/services/page/0');
    } else {
      dispatch(actionGetAllPublicServices({
        pageNumber: parseInt(pageNumber, 10),
        size: 20,
        sortBy: queryParams.sortBy,
        sortDirection: queryParams.sortDirection,
        name: queryParams.name,
        categorySlug: queryParams.categorySlug,
      }));
    }
  }, [dispatch, pageNumber, navigate, queryParams]);

  return (
    <div className="container">
      {renderServiceRows()}

      <div className="row">
        <div className="col-12 mt_25">
          <div className="wsus__pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className={`page-item ${pageNumber === 0 ? 'disabled' : ''}`}>
                  <Link
                    className="page-link"
                    to={`/services/page/${parseInt(pageNumber, 10) - 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/services/page/${parseInt(pageNumber, 10) - 1}`);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </Link>
                </li>
                {renderPaginationLinks()}
                <li className={`page-item ${pageNumber === publicServices.totalPages - 1 ? 'disabled' : ''}`}>
                  <Link
                    className="page-link"
                    to={`/services/page/${parseInt(pageNumber, 10) + 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/services/page/${parseInt(pageNumber, 10) + 1}`);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceList.propTypes = {
  queryParams: PropTypes.shape({
    name: PropTypes.string,
    sortBy: PropTypes.oneOf(['distance', 'avgRating']),
    sortDirection: PropTypes.oneOf(['ASC', 'DESC']),
    categorySlug: PropTypes.string,
  }).isRequired,
};

export default ServiceList;
