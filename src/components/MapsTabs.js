import React, { useState } from "react";
import IndiaMapLocations from "./IndiaMapLocations";
import GlobalMapLocations from "./GlobalMapLocations";
import { NavLink } from "react-router-dom";

const MapsTabs = () => {
  const [activeTab, setActiveTab] = useState("pan-india");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5
              className="about-subtitle wow"
              data-aos="fade-up" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <h5
                className="about-subtitle wow"
                data-aos="fade-up" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <span>
                  <img src="/images/small-logo.png" alt="logo" />
                </span>
                <span>Nationwide & Beyond</span>
                <span>
                  <img src="/images/small-logo.png" alt="logo" />
                </span>
              </h5>
            </h5>
            <h2
              className="title featured-title"
              data-aos="fade-up" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <b>{activeTab === "pan-india" ? "26 + " : "3 + "}</b>
              {activeTab === "pan-india"
                ? "States In India"
                : "Countries Globally"}
            </h2>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up" // Fade in as you scroll
            data-aos-duration="1500"
          >
            <div className="maps-container">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "pan-india" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#pan-india"
                    role="tab"
                    onClick={() => handleTabChange("pan-india")}
                  >
                    Pan India
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "other-countries" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#other-countries"
                    role="tab"
                    onClick={() => handleTabChange("other-countries")}
                  >
                    Other Countries
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="maps-container">
          <div className="tab-content">
            <div
              id="pan-india"
              className="tab-pane fade show active"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="map-detail-container"
                    data-aos="fade-right" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <h3>India</h3>

                    <div className="map-location-detail">
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Ashish Rolling Shutter</p>
                    </div>

                    <NavLink to="tel:+918850366693">
                      <div className="map-location-detail">
                        <i className="fa-solid fa-phone"></i>
                        <p>+918850366693</p>
                      </div>
                    </NavLink>

                    <NavLink to="mailto:ashishrollingshutter@gmail.com">
                      <div className="map-location-detail">
                        <i className="fa-solid fa-envelope"></i>
                        <p>ashishrollingshutter@gmail.com</p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-9 indian-map-col">
                  <div
                    className="single-map-container india-map"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <img src="/images/maps/indian-map.png" alt="pan-india" />
                    {/* <div className="location-div ahmedabad">
                      <div className="map-pin"></div>
                      <div className="location-data">
                        <h6>Ahmedabad</h6>
                      </div>
                    </div> */}

                    {IndiaMapLocations.map((location, index) => (
                      <div
                        key={index}
                        className="location-div"
                        style={{ position: "absolute", ...location.position }} // Combine inline styles
                      >
                        <div className="map-pin"></div>
                        <div className="location-data">
                          <h6>{location.name}</h6>
                          <NavLink to={`tel:${location.tel}`}>
                            <p>{location.tel}</p>
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="other-countries" className="tab-pane fade" role="tabpanel">
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="map-detail-container"
                    data-aos="fade-right" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <h3>Global</h3>

                    <div className="map-location-detail">
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Ashish Rolling Shutter</p>
                    </div>

                    <NavLink to="tel:+918850366693">
                      <div className="map-location-detail">
                        <i className="fa-solid fa-phone"></i>
                        <p>+918850366693</p>
                      </div>
                    </NavLink>

                    <NavLink to="mailto:ashishrollingshutter@gmail.com">
                      <div className="map-location-detail">
                        <i className="fa-solid fa-envelope"></i>
                        <p>ashishrollingshutter@gmail.com</p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-9 global-map-col">
                  <div
                    className="single-map-container world-map "
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <img
                      src="/images/maps/The_World_map 1.png"
                      alt="pan-india"
                    />

                    {GlobalMapLocations.map((location, index) => (
                      <div
                        key={index}
                        className="location-div"
                        style={{ position: "absolute", ...location.position }} // Combine inline styles
                      >
                        <div className="map-pin"></div>
                        <div className="location-data">
                          <h6>{location.name}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsTabs;
