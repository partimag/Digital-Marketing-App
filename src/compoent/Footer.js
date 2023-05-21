import React from "react";
import ".//StyleLogin.css";

function Footer() {
  const feedbackAlert = () => {
    alert("Thank You for contacting us");
  };
  return (
    <>
      <section
        data-scroll-index="4"
        className="section contactus-section"
        style={{
          background: "url(assets/img/effect/bg-effect-3.png)",
          backgroundSize: "cover",
          backgroundposition: "center",
        }}
      >
        <div className="container" id="contact">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="form-box">
                <div className="header-text text-bold">Get in touch</div>
                <div className="contact-form">
                  <h3>Our friendly team would love to hear from you.</h3>
                  <form
                    action="https://formsubmit.co/partimag55@gmail.com"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_subject"
                      value="New submission!"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for your valuable feedback"
                    />
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="hidden"
                      name="_next"
                      value="http://localhost:3000/#home"
                    />
                    <input
                      type="text"
                      name="First Name"
                      placeholder="Email First Name"
                      required
                    />
                    <input
                      type="text"
                      name="Last Name"
                      placeholder="Email Last Name"
                      required
                    />
                    <input
                      type="email"
                      name="Enter Email"
                      placeholder="Email Address"
                      required
                    />
                    <input
                      type="password"
                      name="Enter Password"
                      placeholder="Enter Password"
                      required
                    />
                    <textarea
                      type="text"
                      name=""
                      placeholder="Write to us"
                      rows="4"
                      style={{ width: "100%" }}
                    />
                    <button onClick={feedbackAlert}>login</button>
                  </form>
                </div>

                {/* <form id="contact-form" method="POST">
                  <div className="row gx-3 gy-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">First name</label>
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name "
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Your Email</label>
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email "
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input
                          name="Subject"
                          id="subject"
                          placeholder="Subject "
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Your message</label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message "
                          rows="4"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button
                          className="main-btn main-btn-theme2"
                          type="button"
                          value="Send"
                        >
                          {" "}
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
            <div className="col-lg-5 ms-auto col-xl-4">
              <div className="pb-5">
                <img className="w-100" src="contact-bg.png" />
              </div>
              <ul className="contact-infos">
                <li>
                  <div className="icon bg-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="col">
                    <h5>Phone</h5>
                    <p>+01 123 654 8096</p>
                  </div>
                </li>
                <li>
                  <div className="icon bg-2">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="col">
                    <h5>Mail</h5>
                    <p>info@domainname.com</p>
                  </div>
                </li>
                <li>
                  <div className="icon bg-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="col">
                    <h5>Visit My Studio</h5>
                    <p>
                      Warnwe Park Streetperrine, <br />
                      FL 33157 New York City
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-transparent text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/people/Partima-G/pfbid0264TZPA8sZSecgFYusY8iNub7BTjPUo5izmHKQ4mbUVFcQres7SRDRY6pwB3Xjm3l/?mibextid=ZbWKwL"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/g_partima"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/partimaghanghas/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/partima-ghanghas-788598259/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/partimag/"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://github.com/partimag/">
            Partima Ghanghas
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
