import React from 'react';

import BannerSlider from 'components/BannerSlider/BannerSlider';

function ContactPage() {
  return (
    <>
      <BannerSlider title="Contact us" />

      <section>
        <div className="container">
          <div className="row margin_top_50">
            <div className="col-md-12">
              <div className="row">
                <div className="col-sm-4">
                  <div className="full cont_info">
                    <i className="fa fa-map-marker" />
                    <span>Location</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="full cont_info">
                    <i className="fa fa-phone" />
                    <span>Call +01 1234 567 890</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="full cont_info">
                    <i className="fa fa-envelope" style={{ fontSize: '17px' }} />
                    <span>demo@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding request_form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="full text_align_center">
                <h3>Request A Call Back</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
              <div className="full">
                <form className="form_main">
                  <fieldset>
                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <div className="full field">
                          <input type="text" name="name" placeholder="Your Name" required="" />
                        </div>
                        <div className="full field">
                          <input type="text" name="number" placeholder="Phone Number" required="" />
                        </div>
                        <div className="full field">
                          <input type="email" name="email" placeholder="Email" required="" />
                        </div>
                        <div className="full field">
                          <textarea placeholder="Message" />
                        </div>
                        <div className="full field center">
                          <button type="button">Send</button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
