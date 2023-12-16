import React from 'react';

function Counter() {
  return (
    <section className="wsus__counter" style={{ background: 'url(https://demo.websolutionus.com/aabcserv/uploads/website-images/counter-bg--2022-09-29-12-43-47-5215.jpg)' }}>
      <div className="wsus__counter_overlay">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-lg-3">
              <div className="wsus__single_counter">
                <span>
                  <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/counter--2022-09-29-12-40-42-5094.png" alt="counter" className="img-fluid w-100" />
                </span>
                <h4 className="counter">2547</h4>
                <p>Total Orders</p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-3">
              <div className="wsus__single_counter">
                <span>
                  <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/counter--2022-09-29-12-41-15-9354.png" alt="counter" className="img-fluid w-100" />
                </span>
                <h4 className="counter">1532</h4>
                <p>Active Clients</p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-3">
              <div className="wsus__single_counter">
                <span>
                  <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/counter--2022-09-29-12-41-37-4353.png" alt="counter" className="img-fluid w-100" />
                </span>
                <h4 className="counter">2103</h4>
                <p>Team Members</p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-3">
              <div className="wsus__single_counter">
                <span>
                  <img src="https://demo.websolutionus.com/aabcserv/uploads/custom-images/counter--2022-09-29-12-42-06-6458.png" alt="counter" className="img-fluid w-100" />
                </span>
                <h4 className="counter">25</h4>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
