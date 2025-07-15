import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import ProfileImage from "../images/vitabitz logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }

    AOS.init({
      duration: 1000,
      once: false,
    });

    window.addEventListener("load", () => AOS.refresh());
    window.addEventListener("scroll", () => AOS.refresh());

    return () => {
      window.removeEventListener("load", () => AOS.refresh());
      window.removeEventListener("scroll", () => AOS.refresh());
    };
  }, [i18n]);

  const handleLanguageChange = (langCode, langName) => {
    i18n.changeLanguage(langCode);
    setLanguage(langName);
    localStorage.setItem("language", langCode);
  };

  return (
    <section>
      <Container fluid>
        <Row>
          <Col lg={12} className="p-0">
            <div className="page1">
              <div className="container">
                <div
                  className="profile_image_outer d-flex justify-content-md-center justify-content-lg-start justify-content-center"
                  data-aos="fade-up"
                >
                  <img
                    alt="Vitabitz Nutrition Logo"
                    src={ProfileImage}
                    className="ProfileImage p-2 bg-white"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end position-absolute top-0 end-0 me-0">
                <div className="language pt-2 me-0 me-2 my-lg-0 my-1">
                  <div className="language-switcher d-flex align-items-center">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="language-btn rounded-5 px-3 py-2 fw-bold"
                        variant="transparent"
                        id="dropdown-language"
                      >
                        {language}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="language-menu">
                        <Dropdown.Item
                          className="rounded-bottom-0"
                          active={language === "ગુજરાતી"}
                          onClick={() =>
                            handleLanguageChange("ગુજરાતી", "ગુજરાતી")
                          }
                        >
                          ગુજરાતી
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="rounded-0"
                          active={language === "हिन्दी"}
                          onClick={() =>
                            handleLanguageChange("हिन्दी", "हिन्दी")
                          }
                        >
                          हिन्दी
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="rounded-top-0"
                          active={language === "English"}
                          onClick={() =>
                            handleLanguageChange("English", "English")
                          }
                        >
                          English
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
    </section >
  );
};

export default Header;
