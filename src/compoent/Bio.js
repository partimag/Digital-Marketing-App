import React from "react";
import ".//Style.css";

function Bio() {
  return (
    <>
      <section
        className="section  bio-section"
        data-scroll-index="6"
        style={{
          background: "url(assets/img/effect/bg-effect-3.png)",
          backgroundSize: "cover",
          backgroundposition: "center",
        }}
      >
        <div className="container" id="bio">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6 text-center">
              <img src="aboutme-banner.png" />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="about-text">
                <h3 className="h1">
                  Accelerate Your Online Success with our Expert Digital
                  Marketing Services
                </h3>
                <p>
                  We are a global creative agency that combines design expertise
                  with technology and intelligence to revolutionize your
                  business.
                </p>
                <div className="row pt-2">
                  <div className="col-6 col-md-4">
                    <h5>285+</h5>
                    <p>Projet Completed </p>
                  </div>
                  <div className="col-6 col-md-4">
                    <h5>190+</h5>

                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="btn-bar pt-4">
                  <a className="main-btn main-btn-theme me-4" href="#contactus">
                    Contact Me
                  </a>
                  <a className="main-btn main-btn-dark" href="#portfolio">
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bio;
