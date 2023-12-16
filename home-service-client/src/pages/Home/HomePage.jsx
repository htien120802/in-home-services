import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllPublicServices } from 'store/actions';

import { LOCATION } from 'constants/index';
import Categories from 'components/Categories/Categories';

function Home() {
  const dispatch = useDispatch();
  const servicesState = useSelector((state) => state.Services);

  useEffect(() => {
    dispatch(actionGetAllPublicServices());
  }, []);

  return (
    <>
      <div className="banner-slider">
        <div className="container-fluid">
          <div className="row">
            <div id="slider_main" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="full">
                    <div className="left_blog_top">
                      <h3>
                        Decorate
                        <br />
                        Service
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                      <Link className="bt_main" to={LOCATION.CONTACT}>Contact Us</Link>
                    </div>
                    <div className="right_blog_top">
                      <img src="assets/img/slide1_right.png" alt="#" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="full">
                    <div className="left_blog_top">
                      <h3>
                        Decorate
                        <br />
                        Service
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                      <Link className="bt_main" to={LOCATION.CONTACT}>Contact Us</Link>
                    </div>
                    <div className="right_blog_top">
                      <img src="assets/img/slide1_right.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide_arrow">
                <span>
                  <a className="carousel-control-prev" href="#slider_main" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a className="carousel-control-next" href="#slider_main" data-slide="next">
                    <span className="carousel-control-next-icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Categories />

      <section className="layout_padding what_we_do">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full heading_s1">
                <h3>Featured Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm1.png" alt="#" />
                <div className="decorate_blog_bt" href="hd.html">Home Decorate</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm2.png" alt="#" />
                <div className="decorate_blog_bt" href="od.html">Office Decorate</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm3.png" alt="#" />
                <div className="decorate_blog_bt" href="fd.html">Furniture Decorate</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full decorate_blog">
                <img src="assets/images/sm4.png" alt="#" />
                <div className="decorate_blog_bt" href="ld.html">Lighting Decorate</div>
              </div>
            </div> */}

            {servicesState.publicServices
            && servicesState.publicServices.slice(0, 4).map((service, index) => (
              <Link to={`services/${service.id}`} className="col-md-3" key={service.id}>
                <div className="full decorate_blog">
                  {/* Đổi ảnh lại sau khi sửa db */}
                  <img src={`assets/images/sm${index + 1}.png`} alt="#" />
                  <div className="decorate_blog_bt" href={`#${service.id}`}>{service.name}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="full">
                <Link className="read_more_bt float-right" to={LOCATION.SERVICES}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="row">
                  <div className="col-md-7 p-relative r-left">
                    <div className="full back_blog text_align_center padding_right_left_15">
                      <img src="assets/images/about_img.png" alt="#" />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="full heading_s1">
                      <h3>About</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum..
                      </p>
                    </div>
                    <div className="full">
                      <Link className="read_more_bt" to={LOCATION.ABOUT}>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding design_layout">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="full" />
            </div>
            <div className="col-md-5">
              <div className="full heading_s1">
                <h3>
                  Best
                  <br />
                  Decorating for
                  <br />
                  Your home
                </h3>
                <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
              </div>
              <div className="full">
                <a className="read_more_bt" href="/">Get A Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full heading_s1">
                <h3>Request A Call Back</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form action="#">
                <fieldset>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="full fieldset_blog">
                        <input type="text" placeholder="Your Name" name="name" />
                      </div>
                      <div className="full fieldset_blog">
                        <input type="text" placeholder="Phone Number" name="phone_no" />
                      </div>
                      <div className="full fieldset_blog">
                        <input type="email" placeholder="email" name="email" />
                      </div>
                      <div className="full fieldset_blog">
                        <textarea placeholder="Message" />
                      </div>
                      <div className="full fieldset_blog center">
                        <button type="button">Send</button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="col-md-6 p-relative">
              <div className="full back_blog">
                <img className="img-responsive" src="assets/images/call_back.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
