import React, { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { actionGetAllPublicServices } from 'store/actions';

function ServiceList() {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const servicesState = useSelector((state) => state.Services);
  const { publicServices } = servicesState;

  console.log(publicServices);

  const totalPages = Array.isArray(publicServices) ? publicServices.length : 0;

  const organizeServices = (services) => {
    const groupedServices = [];
    for (let i = 0; i < services.length; i += 3) {
      groupedServices.push(services.slice(i, i + 3));
    }
    return groupedServices;
  };

  const generatePageNumbers = (currentPage) => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (!totalPages) {
      return [pageNumbers];
    }

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i += 1) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, parseInt(currentPage, 10) - Math.floor(maxVisiblePages / 2));
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (startPage > 1) {
        pageNumbers.push(1, '...');
      }

      for (let i = startPage; i <= endPage; i += 1) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers;
  };

  const renderServiceRows = () => {
    const groupedServices = organizeServices(publicServices.content || []);

    return groupedServices.map((serviceGroup) => (
      <div key={uuidv4()} className="row">
        {serviceGroup.map((service) => (
          <div key={uuidv4()} className="col-md-4">
            <div className="full decorate_blog">
              <img src={`assets/images/${service.images}`} alt="#" />
              <Link className="decorate_blog_bt" to={`/services/${service.id}`}>
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
      navigate('/services/page/1');
    } else {
      dispatch(actionGetAllPublicServices({ page: parseInt(pageNumber, 10), limit: 20 }));
    }
  }, [dispatch, pageNumber, navigate]);

  return (
    <div className="container">
      {renderServiceRows()}

      <div className="row">
        <div className="col-12 mt_25">
          <div className="wsus__pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {pageNumber && totalPages && +pageNumber > 1 && (
                <li>
                  <a
                    className="prev page-number"
                    href={`/cua-hang/page/${+pageNumber - 1}`}
                  >
                    <i className="icon-angle-left" />
                  </a>
                </li>
                )}

                {pageNumber && totalPages && generatePageNumbers(pageNumber).map((page) => (
                  <li key={page}>
                    {page === '...' ? (
                      <span className="page-number dots">{page}</span>
                    ) : (
                      <a
                        className={`page-number ${page === +pageNumber ? 'current' : ''}`}
                        href={`/cua-hang/page/${page}`}
                      >
                        {page}
                      </a>
                    )}
                  </li>
                ))}

                {pageNumber && totalPages && +pageNumber < totalPages && (
                <li>
                  <a
                    className="next page-number"
                    href={`/cua-hang/page/${+pageNumber + 1}`}
                  >
                    <i className="icon-angle-right" />
                  </a>
                </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
