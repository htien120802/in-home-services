import React from 'react';
import PropTypes from 'prop-types';

function CategoryCard(props) {
  const {
    imageSrc, categoryLink, categoryName, servicesCount, slickIndex,
  } = props;

  return (
    <div className="slick-slide slick-cloned" data-slick-index={slickIndex} aria-hidden="true" style={{ width: '228px' }} tabIndex="-1">
      <div>
        <div className="col-xl-2" style={{ width: '100%', display: 'inline-block' }}>
          <div className="wsus__single_categories">
            <span>
              <img src={imageSrc} alt="categories" className="img-fluid w-100" />
            </span>
            <a href={categoryLink} tabIndex="-1">
              {categoryName}
            </a>
            <p>{`${servicesCount}+ Services`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  slickIndex: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  categoryLink: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  servicesCount: PropTypes.number.isRequired,
};

export default CategoryCard;
