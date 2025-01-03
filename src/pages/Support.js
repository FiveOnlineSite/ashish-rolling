import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

const Support = () => {
  const bannerData = {
    bannerImg: "/images/banners/support-banner.png",
    title: "Support",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Support", path: null, active: true },
    ],
  };
  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="commitment-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="commitment-img"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <img
                  src="/images/commitment-to-care.png"
                  className="w-100 support-img1"
                  alt="care"
                />
                <img
                  src="/images/round-logo.png"
                  alt="logo-round"
                  className="round-logo support"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                />

                <div
                  className="title-div"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <h2>Commitment to Care</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="commitment-text "
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <p className="paragraph mt-lg-0 mt-5">
                  Our commitment to service begins with your initial enquiry,
                  and is paramount through the stages of design, manufacture,
                  sales, installation, and subsequent service of the
                  commissioned products. Customer care is an integral part of
                  our organization. Our prime concern is always your business
                  and hence we focus on providing you the specific type of
                  maintenance schedule according to your requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commitment-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 order-1">
              <div
                className="commitment-img"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <img
                  src="/images/excellent-expertise.jpg"
                  className="w-100 support-img1"
                  alt="care"
                />
                <img
                  src="/images/round-logo.png"
                  alt="logo-round"
                  className="round-logo support"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                />

                <div
                  className="title-div"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <h2>Excellent Expertise</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 order-2">
              <div
                className="commitment-text expertise"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <p className="paragraph mt-lg-0 mt-5">
                  Our commitment to service begins with your initial enquiry,
                  and is paramount through the stages of design, manufacture,
                  sales, installation, and subsequent service of the
                  commissioned products. Customer care is an integral part of
                  our organization. Our prime concern is always your business
                  and hence we focus on providing you the specific type of
                  maintenance schedule according to your requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer-care-section">
        <div
          className="customer-care-title"
          data-aos="zoom-in" // Fade in as you scroll
          data-aos-duration="1500"
        >
          <h2>Customer Care Contact</h2>
        </div>
        <div className="container">
          <div className="col-lg-8 ">
            <div className="customer-care-text">
              <p
                className="paragraph"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                Our excellent customer care team promises to support you at
                every step of the way. You can rely on us to ensure smooth
                operations and help achieve your objectives. To achieve this our
                dedicated team offers <span>24 x 7</span> service and can be
                contacted on.
              </p>
              <div className="customer-support-div col-lg-12 ">
                <div className="row">
                  <div
                    className=" col-lg-6 "
                    data-aos="fade-right" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="customer-connect">
                      <h5 className="about-subtitle wow">
                        <span>
                          <img src="/images/small-logo.png" alt="logo" />
                        </span>
                        <span>Speak to Us</span>{" "}
                        <span>
                          <img src="/images/small-logo.png" alt="logo" />
                        </span>
                      </h5>

                      <NavLink to="tel:+918850366693">
                        <div className="map-location-detail">
                          <i className="fa-solid fa-phone"></i>
                          <p>+918850366693</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div
                    className=" col-lg-6"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="customer-connect">
                      <h5 className="about-subtitle wow">
                        <span>
                          <img src="/images/small-logo.png" alt="logo" />
                        </span>
                        <span>Write to Us</span>
                        <span>
                          <img src="/images/small-logo.png" alt="logo" />
                        </span>
                      </h5>
                      <NavLink to="mailto:ashishrollingshutter@gmail.com">
                        <div className="map-location-detail">
                          <i className="fa-solid fa-envelope"></i>
                          <p>ashishrollingshutter@gmail.com</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
