import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';

const categoryData = [
  {
    id: 'id',
    imageSrc: 'https://demo.websolutionus.com/aabcserv/uploads/custom-images/category-2022-12-04-05-49-57-3871.png',
    categoryLink: 'https://demo.websolutionus.com/aabcserv/services?category=car-services',
    categoryName: 'Car Services',
    servicesCount: 5,
  },
];

function Categories() {
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
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: '1', width: '3876px', transform: 'translate3d(-1824px, 0px, 0px)' }}>
              {categoryData.map((category, index) => (
                <CategoryCard key={category.id} slickIndex={index} {...category} />
              ))}
            </div>
          </div>
          <ul className="slick-dots" role="tablist">
            <li className="" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabIndex="-1">1</button></li>
            <li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" tabIndex="-1">2</button></li>
            <li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 2" tabIndex="-1">3</button></li>
            <li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 2" tabIndex="0" aria-selected="true">4</button></li>
            <li role="presentation"><button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 2" tabIndex="-1">5</button></li>
            <li role="presentation"><button type="button" role="tab" id="slick-slide-control05" aria-controls="slick-slide05" aria-label="6 of 2" tabIndex="-1">6</button></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Categories;
