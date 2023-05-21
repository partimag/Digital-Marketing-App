import React from "react";
import ".//Style.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <main className="wrapper" id="home">
        <section data-scroll-index="0" className="home-section bg-gray">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-6">
                <div className="home-intro one-page-nav text-center text-lg-start">
                  <h6 className="krinky-text">
                    👋, Hi, We provides Digital Marketing Services
                  </h6>
                  <h1 className="typing-text-heading">
                    Our Services :
                    <p className="typing-text">
                      <Typewriter
                        loop={true}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString("SEO Marketing")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Content Writing")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Social Media Marketing")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("E-Commerce Marketing")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Email Marketing")
                            .start();
                        }}
                      />
                    </p>
                  </h1>
                  <p>Based in Los Angeles, California.</p>
                  <div className="btn-bar">
                    <a className="main-btn main-btn-theme" href="#contact">
                      Let's Start
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <div className="home-image text-center">
                  <img
                    className="vert-move"
                    src="home-banner.png"
                    alt="home-banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
