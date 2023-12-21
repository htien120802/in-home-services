import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CategoryCard(props) {
  const {
    thumbnail, slug, categoryName, numberService, slickIndex,
  } = props;

  return (
    <div className="slick-slide slick-cloned" data-slick-index={slickIndex} style={{ width: '270px' }}>
      <div>
        <div style={{ width: '100%' }}>
          <div className="wsus__single_categories">
            <span>
              <img src={thumbnail} alt="categories" className="img-fluid w-100" />
            </span>
            <Link to={`/category/${slug}`}>
              {categoryName}
            </Link>
            <p>{`${numberService}+ Services`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  slickIndex: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  numberService: PropTypes.number.isRequired,
};

export default CategoryCard;
