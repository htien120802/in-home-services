import React from 'react';

import BannerSlider from 'components/BannerSlider/BannerSlider';

function Reviews() {
  return (
    <>
      <BannerSlider title="Reviews" />

      <section className="layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full heading_s1 text_align_center">
                <h3>Reviews</h3>
              </div>
              <div className="testimonial_slider">
                <div className="full">
                  <div className="client_slider_main2">
                    <div id="testimonial2" className="client_slider_main owl-carousel owl-theme">
                      <div className="item">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="full">
                              <div className="center">
                                {' '}
                                <img src="assets/images/layout_img/testimo_profile.png" alt="#" />
                                {' '}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="full">
                              <div className="testi_head">
                                <h4>Lianna john</h4>
                                <p>Home Rentel</p>
                              </div>
                            </div>
                            <div className="full testi_slide">
                              <p>
                                <img src="assets/images/layout_img/quate_left_test.png" alt="#" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua..
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="full">
                              <div className="center">
                                {' '}
                                <img src="assets/images/layout_img/testimo_profile.png" alt="#" />
                                {' '}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="full">
                              <div className="testi_head">
                                <h4>Rosy Mike</h4>
                                <p>Home Rentel</p>
                              </div>
                            </div>
                            <div className="full testi_slide">
                              <p>
                                <img src="assets/images/layout_img/quate_left_test.png" alt="#" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua..
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="full">
                              <div className="center">
                                {' '}
                                <img src="assets/images/layout_img/testimo_profile.png" alt="#" />
                                {' '}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="full">
                              <div className="testi_head">
                                <h4>William Butter</h4>
                                <p>Home Rentel</p>
                              </div>
                            </div>
                            <div className="full testi_slide">
                              <p>
                                <img src="assets/images/layout_img/quate_left_test.png" alt="#" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua..
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Reviews;
