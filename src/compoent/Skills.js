import React from "react";
import ".//Style.css";

function Skills() {
  return (
    <>
      <section data-scroll-index="2" className="experience pb-0">
        <div className="container" id="skills">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="experience">
                <h3 className="heading-texts">
                  <p>Key Skills</p>
                </h3>
              </div>
              <div className="skill-box">
                <div className="row g-3">
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="skill-box-02 bg-1">
                      <div className="icon">
                        <i className="fab fa-html5"></i>
                      </div>
                      <h6>HTML</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="skill-box-02 bg-2">
                      <div className="icon">
                        <i className="fab fa-css3"></i>
                      </div>
                      <h6>CSS</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="skill-box-02 bg-3">
                      <div className="icon">
                        <i className="fab fa-react"></i>
                      </div>
                      <h6>React JS</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="skill-box-02 bg-4">
                      <div className="icon">
                        <i className="fab fa-angular"></i>
                      </div>
                      <h6>Angular</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="skill-box-02 bg-5">
                      <div className="icon">
                        <i className="fab fa-apple"></i>
                      </div>
                      <h6>iOs App</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="skill-box-02 bg-6">
                      <div className="icon">
                        <i className="fab fa-android"></i>
                      </div>
                      <h6>App Dev</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img src="skills.png" className="vert-move" alt="skill-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
