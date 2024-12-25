import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        {/* <div className="footer-top-div">
          <div className="container">
            <div className="footer-top-div-text">
              <h2>ASR</h2>
              <h6>Providing premium rolling shutter solutions since 1985.</h6>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-start">
                <div className="col-lg-9">
                  <div
                    className="footer-text"
                    data-aos="zoom-in" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <h2>Why Choose Us?</h2>

                    <p>
                      Ashish Rolling Shutters is a trusted name in the
                      manufacturing and installation of high-quality rolling
                      shutters and industrial doors. With years of expertise and
                      a commitment to excellence, we provide durable,
                      innovative, and reliable solutions for residential,
                      commercial, and industrial properties.
                    </p>
                  </div>
                </div>

                <div className="row mt-lg-4">
                  <div
                    className="col-lg-3 mt-lg-0 mt-4"
                    data-aos="fade-right" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="footer-logo">
                      <NavLink to="/">
                        <img
                          src="/images/white-logo.png"
                          alt="logo"
                          width={"150px"}
                          height={"100px"}
                        />
                      </NavLink>
                    </div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <NavLink
                            to="https://www.facebook.com/ashishrollingshutter/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="https://www.instagram.com/ashish_rolling_shutter/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="https://www.linkedin.com/company/ashish-rolling-shutters"
                            target="_blank"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="https://x.com/AshishShutter"
                            target="_blank"
                          >
                            <i className="fa-brands fa-twitter"></i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-lg-0 mt-4"
                    data-aos="fade-right" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="quick-links">
                      {/* <h6 className="footer-titles">Quick Links</h6> */}

                      <h6 className="footer-titles about-subtitle">
                        <span>
                          <img src="/images/white-small-logo.png" alt="logo" />
                        </span>
                        <span>Quick Links</span>{" "}
                        <span>
                          <img src="/images/white-small-logo.png" alt="logo" />
                        </span>
                      </h6>
                      <ul>
                        <li>
                          <NavLink to="/about-us">About Us</NavLink>
                        </li>
                        {/* <li>
                          <NavLink to="/brochures">Brochures</NavLink>
                        </li> */}
                        <li>
                          <NavLink to="/support">Support</NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact-us">Contact Us</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-lg-0 mt-4"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="address-div">
                      <h6 className="footer-titles about-subtitle">
                        <span>
                          <img src="/images/white-small-logo.png" alt="logo" />
                        </span>
                        <span>Find Us Here</span>{" "}
                        <span>
                          <img src="/images/white-small-logo.png" alt="logo" />
                        </span>
                      </h6>

                      {/* <h6 className="footer-titles ">Find Us Here</h6> */}

                      <NavLink
                        to="https://maps.app.goo.gl/WLWWsUsBeST3Yhrt9"
                        className="contact-links"
                        target="_blank"
                      >
                        <div className="address-text">
                          <i className="fa-solid fa-location-dot footer-icon"></i>
                          <p>
                            Kalyan - Badlapur Rd, opp. Ashok Anil Multiplex,
                            Press Bazar, Ulhasnagar, Maharashtra 421003
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-lg-0 mt-4"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="phone-mail-div">
                      {/* <h6 className="footer-titles">Reach Out</h6> */}
                      <h6 className="footer-titles about-subtitle">
                        <span>
                          <img src="/images/white-small-logo.png" alt="logo" />
                        </span>
                        <span>Reach Out</span>{" "}
                        <span>
                          <img src="/images/white-small-logo.png" alt="logo" />
                        </span>
                      </h6>

                      <a href="tel:+918850366693" className="contact-links">
                        <div className="phone-mail-text">
                          <i className="fa-solid fa-phone footer-icon"></i>
                          <p>+918850366693</p>
                        </div>
                      </a>
                      <a
                        href="mailto:ashishrollingshutter@gmail.com"
                        className="contact-links"
                      >
                        <div className="phone-mail-text">
                          <i className="fa-solid fa-envelope footer-icon"></i>
                          <p>ashishrollingshutter@gmail.com</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 d-none">
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Motorized Gates</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Motorized Rolling Gates</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Industrial Gates</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Fire Rated Shutters & Doors</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Hangar Doors</NavLink>
                  </div>
                </div>
              </div>

              <div
                className="row mt-5 " // Fade in as you scroll
                data-aos-duration="1500"
              >
                <div className="copyright-text text-center">
                  <p>
                    Copyright © 2024 <span>Ashish Rolling Shutter</span>. All
                    Rights Reserved.
                  </p>
                </div>
              </div>
              {/* <div className="go-up-btn">
              <NavLink to="/#home-banner">
                <i className="fa-solid fa-arrow-up"></i>
              </NavLink>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
