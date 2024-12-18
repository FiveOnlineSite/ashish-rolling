import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import CounterSection from "../components/CounterSection";
import Accreditations from "../components/Accreditations";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const bannerData = {
    bannerImg: "/images/banners/about-us-banner.jpg",
    title: "About us",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "About us", path: null, active: true },
    ],
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]); // Dependency on location ensures it runs whenever the route changes

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="about-content1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img-div wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <img
                  src="/images/about1.jpg"
                  className="about-img1"
                  alt="about-img1"
                />
                <img
                  src="/images/about2.jpg"
                  className="about-img2"
                  alt="about-img2"
                />
                <img
                  src="/images/round-logo.png"
                  alt="logo-round"
                  className="round-logo"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div
                className="about-content wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Welcome To Ashish Rolling Shutter
                </h2>
                <p className="paragraph">
                  A Trusted <span>Manufacturer, Dealer</span> and{" "}
                  <span>Exporter</span> of Premium Rolling Shutters and
                  Industrial Gates with over 40 years of expertise, Ashish
                  Rolling Shutter has built a legacy of excellence and
                  innovation. We specialize in delivering durable, functional,
                  and cutting-edge solutions tailored to the diverse needs of
                  industrial, commercial, and residential spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 order-1">
              <div
                className="about-img-div wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <img
                  src="/images/about1.jpg"
                  className="about-img1"
                  alt="about-img1"
                />
                <img
                  src="/images/about2.jpg"
                  className="about-img2"
                  alt="about-img2"
                />
                <img
                  src="/images/Group 7.png"
                  alt="logo-round"
                  className="round-logo"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5 order-lg-1 order-2">
              <div
                className="about-content wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Our Expertise
                </h2>
                <p className="paragraph">
                  Since <span>1985</span>, we have been crafting products that
                  blend advanced technology with superior craftsmanship.
                </p>
                <div className="">
                  <h4 className="about-title">What We Offer: </h4>
                  <p className="paragraph">
                    <span>Comprehensive Range: </span>Industrial, commercial,
                    and residential rolling shutters.
                  </p>

                  <p className="paragraph">
                    <span>Customized Solutions: </span>Standard models and fully
                    tailored designs to meet your specific requirements.
                  </p>

                  <p className="paragraph">
                    <span>Professional Installation: </span>Seamless integration
                    for optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterSection bgImage="/images/about-counter.png" />

      <section className="about-content2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img-div wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <img
                  src="/images/about1.jpg"
                  className="about-img1"
                  alt="about-img1"
                />
                <img
                  src="/images/about2.jpg"
                  className="about-img2"
                  alt="about-img2"
                />
                <img
                  src="/images/round-logo.png"
                  alt="logo-round"
                  className="round-logo"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5 ">
              <div
                className="about-content wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Global Reach
                </h2>
                <p className="paragraph">Expanding Horizons with Excellence</p>
                <p className="paragraph">
                  As leading <span>exporters</span>, we deliver our trusted
                  products and services across the globe. Renowned for our
                  high-quality manufacturing standards and reliable designs,
                  Ashish Rolling Shutter is a preferred partner for businesses
                  both locally and internationally.
                </p>
                <div className="">
                  <h4 className="about-title">
                    Why Choose Our Export Services?
                  </h4>
                  <p className="paragraph">
                    Managed by a dedicated team ensuring
                    <span> timely delivery</span> and
                    <span> exceptional service</span>.
                  </p>

                  <p className="paragraph">
                    Built on a foundation of <span>trust, reliability </span>
                    and <span>innovation</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 order-1">
              <div
                className="about-img-div wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <img
                  src="/images/about1.jpg"
                  className="about-img1"
                  alt="about-img1"
                />
                <img
                  src="/images/about2.jpg"
                  className="about-img2"
                  alt="about-img2"
                />
                <img
                  src="/images/round-logo.png"
                  alt="logo-round"
                  className="round-logo"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5 order-lg-1 order-2">
              <div
                className="about-content wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Why Choose Us?
                </h2>
                <p className="paragraph">
                  Delivering Excellence with Every Solution
                </p>

                <p className="paragraph">
                  We stand out by offering high-security, premium-quality
                  solutions with robust designs.
                </p>

                <div className="">
                  <h4 className="about-title">Key Highlights:</h4>
                  <p className="paragraph">
                    Expertise in <span>durable</span> and{" "}
                    <span>innovative</span> rolling shutters and industrial
                    gates.
                  </p>

                  <p className="paragraph">
                    A commitment to <span>quality, reliability</span> and{" "}
                    <span>customer satisfaction</span>.
                  </p>

                  <p className="paragraph">
                    A legacy of <span>trust</span> and <span>excellence</span>{" "}
                    built over four decades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img-div wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <img
                  src="/images/about1.jpg"
                  className="about-img1"
                  alt="about-img1"
                />
                <img
                  src="/images/about2.jpg"
                  className="about-img2"
                  alt="about-img2"
                />
                <img
                  src="/images/round-logo.png"
                  alt="logo-round"
                  className="round-logo"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5 ">
              <div
                className="about-content wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Our Commitment
                </h2>
                <p className="paragraph">
                  Building Trust Through Innovation and Quality
                </p>

                <p className="paragraph">
                  At Ashish Rolling Shutter, we focus on delivering value
                  through unmatched service, superior products, and strong
                  relationships.
                </p>

                <div className="">
                  <h4 className="about-title">Key Highlights:</h4>
                  <p className="paragraph">
                    <span>State-of-the-Art Manufacturing: </span> Advanced
                    technology and skilled craftsmanship ensure each product
                    meets industry standards.
                  </p>
                  <p className="paragraph">
                    <span>Tailored Security Solutions: </span> From heavy-duty
                    industrial doors to custom-designed rolling shutters, our
                    products are built to protect, secure, and enhance your
                    spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <p className="paragraph">
              Thank you for choosing <span>Ashish Rolling Shutter</span> — where
              tradition meets technology to create enduring value.
            </p>
          </div>
        </div>
      </section>

      <section className="accreditations-section">
        <Accreditations />
      </section>
    </Layout>
  );
};

export default AboutUs;
