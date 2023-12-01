import React from 'react';

import BannerSlider from 'components/BannerSlider/BannerSlider';

function AboutPage() {
  return (
    <>
      <BannerSlider title="About us" />

      <section className="layout_padding what_we_do">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm1.png" alt="#" />
                <a className="decorate_blog_bt" href="hd.html">Home Decorate</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm2.png" alt="#" />
                <a className="decorate_blog_bt" href="od.html">Office Decorate</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm3.png" alt="#" />
                <a className="decorate_blog_bt" href="fd.html">Furniture Decorate</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm4.png" alt="#" />
                <a className="decorate_blog_bt" href="ld.html">Lighting Decorate</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm1.png" alt="#" />
                <a className="decorate_blog_bt" href="hd.html">Home Decorate</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm2.png" alt="#" />
                <a className="decorate_blog_bt" href="od.html">Office Decorate</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm3.png" alt="#" />
                <a className="decorate_blog_bt" href="fd.html">Furniture Decorate</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm4.png" alt="#" />
                <a className="decorate_blog_bt" href="ld.html">Lighting Decorate</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="full">
                <a className="read_more_bt float-right" href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 p-relative r-left">
              <div className="full back_blog text_align_center padding_right_left_15">
                <img src="assets/images/wd_1.png" alt="#" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="full heading_s1">
                <h3>Best Home Decoration</h3>
                <p>
                  It is a long established fact that a reader
                  will be distracted by the readable content of
                  a page when looking at its layout. The point of
                  using Lorem Ipsum..
                </p>
              </div>
              <div className="full">
                <a className="read_more_bt" href="/">Get A Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 p-relative r-left">
              <div className="full back_blog text_align_center padding_right_left_15">
                <img src="assets/images/wd_2.png" alt="#" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="full heading_s1">
                <h3>Best office Lighting</h3>
                <p>
                  It is a long established fact that a reader will
                  be distracted by the readable content of a page
                  when looking at its layout. The point of using
                  Lorem Ipsum..
                </p>
              </div>
              <div className="full">
                <a className="read_more_bt" href="/">Get A Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
