import React from "react";
import ".//Style.css";
function Navbar() {
  return (
    <>
      <section
        data-bs-spy="scroll"
        achadata-bs-target=".navbar"
        data-bs-offset="90"
      >
        <header className="header-wrapper">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-gray ="
            id="mainNavbar"
          >
            <div className="container-fluid">
              <a className="navbar-brand">
                <img src="/logo.svg" className="img-fluid" alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <p className="navbar-toggler-icon"></p>
              </button>

              <div
                className="nav-bar-text collapse navbar-collapse justify-content-end"
                id="navbar-collapse-toggle"
              >
                <ul className="navbar-nav mx-auto">
                  <li>
                    <a
                      className="nav-link "
                      data-scroll-nav="0"
                      href="#home"
                      id="nav1"
                    >
                      <p>Home</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      data-scroll-nav="1"
                      href="#services"
                      id="nav2"
                    >
                      <p>Services</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      data-scroll-nav="2"
                      href="#skills"
                      id="nav3"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      data-scroll-nav="3"
                      id="nav4"
                      href="#portfolio"
                    >
                      <p>Portfolio</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      data-scroll-nav="5"
                      id="nav6"
                      href="#bio"
                    >
                      <p>About us</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      data-scroll-nav="4"
                      href="#contact"
                      id="nav5"
                    >
                      <p>Contact</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ms-auto d-none d-lg-block">
                <a
                  className="main-btn main-btn-theme"
                  data-scroll-nav="4"
                  href="#contact"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
}

export default Navbar;
