import React from "react";
import ".//Style.css";

function Portfolio() {
  return (
    <>
      <section data-scroll-index="3" className="section work-section bg-gray">
        <div className="container" id="portfolio">
          <div className="row section-heading justify-content-center">
            <div className="col-lg-6 text-center">
              <h3 className="heading-texts">Latest Projects</h3>
            </div>
          </div>

          <div className="img-fluid">
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
              <div className="col-md-6 col-lg-5">
                <div
                  className="portfolio-img"
                  style={{
                    width: "500px",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <img src="project-1.jpg" />
                  <a
                    href="project-2.jpg"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6 style={{ background: "#FEC447" }}>Web Design</h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div className="btn-bar">
                    <a
                      className="main-btn main-btn-theme"
                      data-scroll-nav="4"
                      href="#contactus"
                    >
                      View Project{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="project-2.jpg"
                    style={{
                      width: "500px",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  />
                  <a
                    href="project-3.jpg"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <p style={{ background: "#FEC447" }}>Web Design</p>
                  </h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div className="btn-bar">
                    <a
                      className="main-btn main-btn-theme"
                      data-scroll-nav="4"
                      href="#contactus"
                    >
                      View Project{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="project-2.jpg"
                    style={{
                      width: "500px",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  />
                  <a
                    href="project-1.jpg"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <p style={{ background: "#FEC447" }}>Web Design</p>
                  </h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div className="btn-bar">
                    <a
                      className="main-btn main-btn-theme"
                      data-scroll-nav="4"
                      href="#contactus"
                    >
                      View Project{" "}
                    </a>
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

export default Portfolio;
