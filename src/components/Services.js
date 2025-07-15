import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { FaTshirt, FaCheckCircle, FaDollarSign, FaGlobe, FaTruck, FaStore } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    window.addEventListener("load", () => {
      AOS.refresh();
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("load", () => AOS.refresh());
      window.removeEventListener("scroll", () => AOS.refresh());
    };
  }, []);

  return (
    <section className="bg2 py-lg-5 py-4">
      <div className="container-lg pt-2">
        <div data-aos="fade-up">
          <h2 className="text-center Services_heading font-weight-bold text-dark">
            {t("services.heading")}
          </h2>
          <div className="text-center mb-lg-5 mb-4">
            <hr className="custom-line" />
          </div>
        </div>

        <Row className="text-center d-flex justify-content-center">
          <Col
            sm={6}
            md={6}
            lg={4}
            className="mb-lg-4 mb-3 contact_datails_01"
            data-aos="fade-up"
          >
            <div className="service-card d-flex flex-column h-100 shadow-sm">
              <div className="service-icon bg-palette text-dark">
                <FaTshirt className="serviceicon" />
              </div>
              <h3 className="mt-3 ServicesCardHeading font-weight-bold">
                {t("services.service1.title")}
              </h3>
              <p className="ServicesCardTxt m-0">
                {t("services.service1.description")}
              </p>
            </div>
          </Col>

          <Col
            sm={6}
            md={6}
            lg={4}
            className="mb-lg-4 mb-3 contact_datails_01"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-card d-flex flex-column h-100 shadow-sm">
              <div className="service-icon bg-award text-dark">
                <FaCheckCircle className="serviceicon" />
              </div>
              <h3 className="mt-3 ServicesCardHeading font-weight-bold">
                {t("services.service2.title")}
              </h3>
              <p className="ServicesCardTxt m-0">
                {t("services.service2.description")}
              </p>
            </div>
          </Col>

          <Col
            sm={6}
            md={6}
            lg={4}
            className="mb-lg-4 mb-3 contact_datails_01"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-card d-flex flex-column h-100 shadow-sm">
              <div className="service-icon bg-easel text-dark">
                <FaDollarSign className="serviceicon" />
              </div>
              <h3 className="mt-3 ServicesCardHeading font-weight-bold">
                {t("services.service3.title")}
              </h3>
              <p className="ServicesCardTxt m-0">
                {t("services.service3.description")}
              </p>
            </div>
          </Col>

          <Col
            sm={6}
            md={6}
            lg={4}
            className="mb-lg-4 mb-3 contact_datails_01"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-card d-flex flex-column h-100 shadow-sm">
              <div className="service-icon bg-flower text-dark">
                <FaGlobe className="serviceicon" />
              </div>
              <h3 className="mt-3 ServicesCardHeading font-weight-bold">
                {t("services.service4.title")}
              </h3>
              <p className="ServicesCardTxt m-0">
                {t("services.service4.description")}
              </p>
            </div>
          </Col>

          <Col
            sm={6}
            md={6}
            lg={4}
            className="mb-lg-4 mb-3 contact_datails_01"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-card d-flex flex-column h-100 shadow-sm">
              <div className="service-icon bg-scissors text-dark">
                <FaTruck className="serviceicon" />
              </div>
              <h3 className="mt-3 ServicesCardHeading font-weight-bold">
                {t("services.service5.title")}
              </h3>
              <p className="ServicesCardTxt m-0">
                {t("services.service5.description")}
              </p>
            </div>
          </Col>

          <Col
            sm={6}
            md={6}
            lg={4}
            className="mb-lg-4 mb-3 contact_datails_01"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-card d-flex flex-column h-100 shadow-sm">
              <div className="service-icon bg-people text-dark">
                <FaStore className="serviceicon" />
              </div>
              <h3 className="mt-3 ServicesCardHeading font-weight-bold">
                {t("services.service6.title")}
              </h3>
              <p className="ServicesCardTxt m-0">
                {t("services.service6.description")}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Services;
