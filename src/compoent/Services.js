import React from "react";
import ".//Style.css";

function Services() {
  return (
    <>
      <section
        data-scroll-index="1"
        className="section services-section bg-gray"
      >
        <div className="container">
          <div className="row section-heading justify-content-center">
            <div className="col-lg-6 text-center">
              <h3 id="services" className="heading-texts">
                <p>Our Services</p>
              </h3>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="service-box-01 bg-1">
                <div className="icon">
                  <i className="fa-thin fa-mobile-button"></i>
                </div>
                <div className="service-content">
                  <h5>SEO Marketing</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box-01 bg-2">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-laptop"></i>
                </div>
                <div className="service-content">
                  <h5>Content Writing</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box-01 bg-3">
                <div className="icon">
                  <i className="fa-solid fa-caret-up"></i>
                </div>
                <div className="service-content">
                  <h5>PR Management</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box-01 bg-4">
                <div className="icon">
                  <i className="fa-brands fa-figma"></i>
                </div>
                <div className="service-content">
                  <h5>Web Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box-01 bg-5">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-laptop"></i>
                </div>
                <div className="service-content">
                  <h5>Web Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box-01 bg-6">
                <div className="icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="service-content">
                  <h5>Social Media Marketing</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
