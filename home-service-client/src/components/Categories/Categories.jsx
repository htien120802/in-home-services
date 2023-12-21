import React from 'react';
import Slider from 'react-slick';

import PropTypes from 'prop-types';

import CategoryCard from './CategoryCard/CategoryCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Categories({ categoriesState }) {
  const { categories } = categoriesState;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="wsus__categories mt_90 xs_mt_60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="wsus__section_heading text-center mb_45">
              <h2>Our Categories</h2>
              <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration</p>
            </div>
          </div>
        </div>

        <div className="row category_slider slick-initialized slick-slider slick-dotted">
          <Slider {...sliderSettings}>
            {categories.map((category, index) => (
              <CategoryCard key={category.id} slickIndex={index} {...category} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

Categories.propTypes = {
  categoriesState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      numberService: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      categoryName: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Categories;
