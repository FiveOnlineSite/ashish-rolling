import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const handleOffcanvasHidden = () => {
      document.body.style.overflow = ""; // Reset the overflow
    };

    document.addEventListener("hidden.bs.offcanvas", handleOffcanvasHidden);

    // Disable closing of dropdown when clicking inside the dropdown
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    return () => {
      document.removeEventListener(
        "hidden.bs.offcanvas",
        handleOffcanvasHidden
      );
    };
  }, []);

  // Disable closing of dropdown when clicking inside the dropdown
  // const dropdownMenu = document.querySelector(".dropdown-menu");
  // dropdownMenu.addEventListener("click", function (e) {
  //   e.stopPropagation();
  // });

  return (
    <div>
      <header>
        <div className="container-fluid top-bar-div">
          <div className="row topbar ">
            <div className="col-lg-5">
              <h6
                className="topbar-title"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                provides custom, durable shutters for ultimate security
              </h6>
            </div>
            <div className="col-lg-5">
              <div
                className="contact-links-div"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <div className="contact-link">
                  <NavLink
                    to="mailto:contact@example.com"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <p>contact@example.com</p>
                  </NavLink>
                </div>

                <div className="contact-link">
                  <NavLink to="/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Worli, Mumbai, Maharashtra 400025/30</p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div
                className="social-links top-bar-links"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <ul>
                  <li>
                    <NavLink to="/" title="facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" title="instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" title="linkedin">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" title="youtube">
                      <i className="fa-brands fa-youtube"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg desktop-navbar">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand"
              to="/"
              title="logo"
              data-aos="fade-right" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <img
                src="/images/Ashish Rolling Shutter Logo.png"
                width={"105px"}
                height={"85px"}
                alt="logo"
              />
            </NavLink>

            <div
              className="navbar-collapse"
              id="navbarSupportedContent"
              data-aos="fade-left" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" title="Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about-us" title="About Us">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    to="/"
                    aria-expanded="false"
                    title="Products"
                  >
                    Products <i className="fa-solid fa-angle-down"></i>
                  </NavLink>

                  <ul className="dropdown-menu ">
                    {/* {CollectionData.map((collection, index) => (
                      <li key={index}>
                        {collection.products.map((product, productIndex) => (
                          <NavLink
                            key={productIndex}
                            className="dropdown-item"
                            to={`/${collection.category_slug}/${product.slug}`}
                            title={product.productName}
                          >
                            {product.productName}
                          </NavLink>
                        ))}
                      </li>
                    ))} */}

                    <div className="dropdown-flex">
                      {/* Group 1 with two columns side by side */}
                      <div className="dropdown-group">
                        <h5 className="dropdown-title">Rolling Shutters</h5>
                        <div className="dropdown-columns">
                          <div className="dropdown-column1">
                            <NavLink
                              to="/rolling-shutter/ms-rolling-shutter"
                              className="dropdown-item"
                            >
                              M.s Rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/galvanised-rolling-shutter"
                              className="dropdown-item"
                            >
                              Galvanised rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/sliding-shutter"
                              className="dropdown-item"
                            >
                              Sliding shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/aluminium-rolling-shutter"
                              className="dropdown-item"
                            >
                              Aluminium rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/polycarbonate-rolling-shutter"
                              className="dropdown-item"
                            >
                              Polycarbonate rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/grill-type-rolling-shutter"
                              className="dropdown-item"
                            >
                              Grill type rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/slotted-strip-rolling-shutter"
                              className="dropdown-item"
                            >
                              Slotted Strip rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/aluminium-rib-type-shutter"
                              className="dropdown-item"
                            >
                              Aluminium rib type shutter
                            </NavLink>
                          </div>

                          <div className="dropdown-column1">
                            <NavLink
                              to="/rolling-shutter/motorized-rolling-shutter"
                              className="dropdown-item"
                            >
                              Motorized rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/insulated-rolling-shutter"
                              className="dropdown-item"
                            >
                              Insulated rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/perforated-rolling-shutter"
                              className="dropdown-item"
                            >
                              Perforated rolling shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/aluminium-shutters-with-vision-panel"
                              className="dropdown-item"
                            >
                              Aluminium shutter with vision panel
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/sliding-polycarbonate-shutter"
                              className="dropdown-item"
                            >
                              Sliding polycarbonate shutter
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/high-speed-door"
                              className="dropdown-item"
                            >
                              High speed door
                            </NavLink>
                            <NavLink
                              to="/rolling-shutter/pvc-rolling-shutter"
                              className="dropdown-item"
                            >
                              PVC rolling shutter
                            </NavLink>
                          </div>
                        </div>
                      </div>

                      {/* Group 2 with one column */}
                      <div className="dropdown-group">
                        <h5 className="dropdown-title">Gates</h5>
                        <div className="dropdown-column">
                          <NavLink
                            to="/gates/swing-gate"
                            className="dropdown-item"
                          >
                            Swing gate
                          </NavLink>
                          <NavLink
                            to="/gates/industrial-sliding-gate"
                            className="dropdown-item"
                          >
                            Industrial sliding gate
                          </NavLink>
                          <NavLink
                            to="/gates/folding-gate"
                            className="dropdown-item"
                          >
                            Folding gate
                          </NavLink>
                          <NavLink
                            to="/gates/telescopic-gate"
                            className="dropdown-item"
                          >
                            Telescopic gate
                          </NavLink>
                          <NavLink
                            to="/gates/motorised-gate"
                            className="dropdown-item"
                          >
                            Motorised gate
                          </NavLink>
                          <NavLink
                            to="/gates/compound-gate"
                            className="dropdown-item"
                          >
                            Compound gate
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/brochures"
                    title="Brochures"
                  >
                    Brochures
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/support" title="Support">
                    Support
                  </NavLink>
                </li>

                <li className="nav-item contact-btn">
                  {/* <NavLink className="nav-link" to="/">
                    Contact Us
                  </NavLink> */}
                  <NavLink to="/contact-us" title="Contact Us">
                    <button className="explore-button contact-btn wow">
                      Contact Us
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="mobile-navbar-div">
          <div className="container-fluid mobile-top-bar-div">
            <div className="row topbar ">
              <div className="col-lg-5 col-md-5 col-sm-5">
                <h6
                  className="topbar-title"
                  data-aos="fade-right" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  provides custom, durable shutters for ultimate security
                </h6>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5">
                <div
                  className="contact-links-div"
                  data-aos="fade-left" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <div className="contact-link">
                    <NavLink to="mailto:contact@example.com" title="mailid">
                      <i className="fa-solid fa-envelope"></i>
                      <p>contact@example.com</p>
                    </NavLink>
                  </div>

                  <div className="contact-link">
                    <NavLink to="/" title="address">
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Worli, Mumbai, Maharashtra 400025/30</p>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div
                  className="social-links top-bar-links"
                  data-aos="fade-left" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <ul>
                    <li>
                      <NavLink to="/" title="facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" title="instagram">
                        <i className="fa-brands fa-instagram"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" title="linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" title="youtube">
                        <i className="fa-brands fa-youtube"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar fixed-top mobile-navbar">
            <div className="container-fluid">
              <NavLink
                className="navbar-brand"
                to="/"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
                title="logo"
              >
                <img
                  src="/images/Ashish Rolling Shutter Logo.png"
                  width={"100px"}
                  height={"80px"}
                  alt="logo"
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <NavLink
                    className="navbar-brand"
                    to="/"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                    title="logo"
                  >
                    <img
                      src="/images/Ashish Rolling Shutter Logo.png"
                      width={"100px"}
                      height={"80px"}
                      alt="logo"
                    />
                  </NavLink>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/" title="Home">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/about-us"
                        title="About Us"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        to="/"
                        aria-expanded="true"
                        title="Products"
                      >
                        Products <i className="fa-solid fa-angle-down"></i>
                      </NavLink>

                      <ul
                        className="dropdown-menu "
                        onClick={(e) => e.stopPropagation()}
                        data-bs-auto-close="false"
                      >
                        <div class="accordion" id="accordionExample">
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                              >
                                Rolling Shutter
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                <NavLink
                                  to="/rolling-shutter/ms-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  M.s Rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/galvanised-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  Galvanised rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/sliding-shutter"
                                  className="dropdown-item"
                                >
                                  Sliding shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/aluminium-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  Aluminium rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/polycarbonate-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  Polycarbonate rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/grill-type-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  Grill type rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/slotted-strip-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  Slotted Strip rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/aluminium-rib-type-shutter"
                                  className="dropdown-item"
                                >
                                  Aluminium rib type shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/motorized-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  Motorized rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/insulated-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  Insulated rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/perforated-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  Perforated rolling shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/aluminium-shutters-with-vision-panel"
                                  className="dropdown-item"
                                >
                                  Aluminium shutter with vision panel
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/sliding-polycarbonate-shutter"
                                  className="dropdown-item"
                                >
                                  Sliding polycarbonate shutter
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/high-speed-door"
                                  className="dropdown-item"
                                >
                                  High speed door
                                </NavLink>
                                <NavLink
                                  to="/rolling-shutter/pvc-rolling-shutter"
                                  className="dropdown-item"
                                >
                                  PVC rolling shutter
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Gates
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                <NavLink
                                  to="/gates/swing-gate"
                                  className="dropdown-item"
                                >
                                  Swing gate
                                </NavLink>
                                <NavLink
                                  to="/gates/industrial-sliding-gate"
                                  className="dropdown-item"
                                >
                                  Industrial sliding gate
                                </NavLink>
                                <NavLink
                                  to="/gates/folding-gate"
                                  className="dropdown-item"
                                >
                                  Folding gate
                                </NavLink>
                                <NavLink
                                  to="/gates/telescopic-gate"
                                  className="dropdown-item"
                                >
                                  Telescopic gate
                                </NavLink>
                                <NavLink
                                  to="/gates/motorised-gate"
                                  className="dropdown-item"
                                >
                                  Motorised gate
                                </NavLink>
                                <NavLink
                                  to="/gates/compound-gate"
                                  className="dropdown-item"
                                >
                                  Compound gate
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/brochures"
                        title="Brochures"
                      >
                        Brochures
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/support"
                        title="Support"
                      >
                        Support
                      </NavLink>
                    </li>

                    <li className="nav-item explore-button contact-mb-btn">
                      <NavLink
                        className="nav-link"
                        to="/contact-us"
                        title="Contact Us"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
