import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import googlereview from "../images/googlereview.png";
import location_icon from "../images/location_icon.png";


const downloadVCF1 = () => {
  const contact = contactNumbers[0];
  const vcf = contact.vcf;
  const blob = new Blob([vcf], { type: "text/vcard" });
  saveAs(blob, `VRAJ TEX ${contact.raw}.vcf`);
};

const downloadVCF2 = () => {
  const contact = contactNumbers[1];
  const vcf = contact.vcf;
  const blob = new Blob([vcf], { type: "text/vcard" });
  saveAs(blob, `VRAJ TEX ${contact.raw}.vcf`);
};

const contactNumbers = [
  {
    number: "+91 97238 72406",
    raw: "91  9723872406",
    whatsapp: "919723872406",
    vcf: `BEGIN:VCARD\nVERSION:3.0\nFN:VRAJ TEX\nTEL;CELL:+919723872406\nEMAIL;HOME:vijaympatel783@gmail.com\nADR;WORK:;;209 D R INDIA TEXTILE HUB, PARVAT PATIYA;Surat,;Gujarat - ;395010.\nORG;WORK:VRAJ TEX\nTITLE:Textile Wholesaler\nURL:https://vraj-tex.web.app/\nNOTE:ONLY WHOLESALE - Single piece not available\nEND:VCARD`
  },
  {
    number: "+91 91737 38300",
    raw: "919173738300",
    whatsapp: "919173738300",
    vcf: `BEGIN:VCARD\nVERSION:3.0\nFN:VRAJ TEX\nTEL;CELL:+919173738300\nEMAIL;HOME:vijaympatel783@gmail.com\nADR;WORK:;;209 D R INDIA TEXTILE HUB, PARVAT PATIYA;Surat,;Gujarat - ;395010.\nORG;WORK:VRAJ TEX\nTITLE:Textile Wholesaler\nURL:https://vraj-tex.web.app/\nNOTE:ONLY WHOLESALE - Single piece not available\nEND:VCARD`
  }
];

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleLoad = () => AOS.refresh();
    const handleScroll = () => AOS.refresh();

    window.addEventListener("load", handleLoad);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="container">
        <Row>
          <Col lg={4} md={0} sm={0}></Col>
          <Col
            lg={8}
            sm={12}
            md={12}
            className="pt-md-5 pt-sm-4 pt-0 d-flex flex-wrap justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center"
          >
            <div className="contain" data-aos="fade-up">
              <h2 className="text-lg-start text-center AboutHeading1 text-uppercase">
                {t("VRAJTEX")}
              </h2>
              <h4 className="text-lg-start text-center AboutHeading2">
                {t("VRAJ_TEX")}
              </h4>
            </div>
          </Col>
          <div>
            <h5
              className="text-center fontcontain mb-0 mt-lg-5 mt-2 mx-lg-5 mx-md-3 mx-sm-2 mx-0"
              data-aos="fade-up"
            >
              {t("welcome_message")}
            </h5>
          </div>
        </Row>

        <div className="mt-4 mt-md-5" data-aos="fade-up">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-center mb-lg-0 mb-3 justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center">
              <div className="d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-center">
                <a
                  href="#!"
                  onClick={downloadVCF1}
                  className="savecontact_box text-decoration-none"
                >
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column me-2">
                      <span className="m-0">{t("SaveContact")}</span>
                      <span className="m-0">{contactNumbers[0].number}</span>
                    </div>
                    <span className="save-contact-btn m-0 d-flex">
                      <FontAwesomeIcon
                        icon={faAddressBook}
                        className="saveIcon savephoneicn"
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-center mb-lg-0 mb-3 justify-content-lg-center justify-content-md-start justify-content-sm-center justify-content-center">
              <div className="d-flex align-items-center justify-content-lg-center justify-content-md-start justify-content-sm-start justify-content-center">
                <a
                  href="#!"
                  onClick={downloadVCF2}
                  className="savecontact_box text-decoration-none"
                >
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column me-2">
                      <span className="m-0">{t("SaveContact")}</span>
                      <span className="m-0">{contactNumbers[1].number}</span>
                    </div>
                    <span className="save-contact-btn m-0 d-flex">
                      <FontAwesomeIcon
                        icon={faAddressBook}
                        className="saveIcon savephoneicn"
                      />
                    </span>
                  </div>
                </a> 
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-center">
              <div className="d-flex align-items-center justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center">
                <a
                  href="https://maps.app.goo.gl/KUCAF5RiiiuYerNe8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="savecontact_box text-decoration-none"
                >
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column">
                      <span>{t("VisitLocation")}</span>
                    </div>
                    <span className="save-contact-btn m-0 d-flex">
                      <img
                        alt="location_icon"
                        src={location_icon}
                        className="location_icon"
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg2 mt-5">
        <div className="container">
          <Row>
            <Col className="p-0">
              <div
                className="text-center py-4 my-2 d-flex flex-wrap justify-content-center"
                data-aos="fade-up"
              >
                <div>
                  <div className="social_box">
                    <a
                      href="https://www.instagram.com/patelvijay_smart"
                      target="blank"
                    >
                      <i className="bi bi-instagram AboutIcon instaicon m-0" />
                    </a>
                  </div>
                </div>

                <div className="social_box">
                  <a href="https://www.facebook.com/share/1E9jFT9Kjy/" target="blank">
                    <i className="bi bi-facebook AboutIcon facebookicon m-0" />
                  </a>
                </div>

                <div className="social_box">
                  <a
                    href="https://youtube.com/@fabricguruofficial?si=NV34tK08i3AB9DcD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-youtube AboutIcon youtubeticon m-0" />
                  </a>
                </div>

                <div className="social_box">
                  <a href="mailto:vijaympatel783@gmail.com" target="blank">
                    <i className="bi bi-envelope-fill AboutIcon mailicon m-0" />
                  </a>
                </div>

                {contactNumbers.map((c) => (
                  <React.Fragment key={c.raw}>
                    <div className="social_box">
                      <a href={`https://api.whatsapp.com/send/?phone=${c.whatsapp}&text=Hello`} target="blank">
                        <i className="bi bi-whatsapp AboutIcon whatsappicn m-0" />
                      </a>
                    </div>
                    <div className="social_box">
                      <a href={`tel:+${c.raw}`} target="blank">
                        <i className="bi bi-telephone AboutIcon telephoneicn m-0" />
                      </a>
                    </div>
                  </React.Fragment>
                ))}

                <div className="social_box mx-md-3 mx-2">
                  <a
                    href="https://g.page/r/CcgLxu1VXiCpEAE/review"
                    target="blank"
                  >
                    <img src={googlereview} alt="googlereview" height={50} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="py-lg-5 py-4 mt-4 mb-2">
        <div className="container-lg">
          <Row>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-lg-4 mb-3 contact_datails_01"
              data-aos="fade-up"
            >
              <div className="AboutContactDtl p-3 shadow">
                <Row className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-envelope-fill fs-1 ms-2 me-3 d-flex Abouticon"></i>
                    <div className="text-white lh-1">
                      <div>
                        <p className="mb-2">
                          <a
                            className="AboutContacttxt1 text-decoration-none text-lowercase"
                            href="mailto:vijaympatel783@gmail.com"
                          >
                            vijaympatel783@gmail.com
                          </a>
                        </p>
                        <p className="mt-2 mb-0 AboutContacttxt2">{t("E-mail")}</p>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>

            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-lg-4 mb-3 contact_datails_01"
              data-aos="fade-up"
            >
              <div className="AboutContactDtl p-3 shadow">
                <Row className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-phone-fill fs-1 ms-2 me-3 d-flex Abouticon"></i>
                    <div className="text-white lh-1">
                      <div>
                        {contactNumbers.map((c) => (
                          <p className="mb-1" key={c.raw}>
                            <a
                              className="AboutContacttxt1 text-decoration-none"
                              href={`tel:+${c.raw}`}
                            >
                              {c.number}
                            </a>
                          </p>
                        ))}
                        <p className="mt-2 mb-0 AboutContacttxt2">
                          {t("Mobile Number")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>

            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-lg-4 mb-3 contact_datails_01"
              data-aos="fade-up"
            >
              <div className="AboutContactDtl p-3 shadow">
                <Row className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-bag-fill fs-1 ms-2 me-3 d-flex Abouticon"></i>
                    <div className="text-white lh-1">
                      <div>
                        <p className="mb-2 AboutContacttxt1">
                          {t("VRAJ_TEX")}
                        </p>
                        <p className="mt-2 mb-0 AboutContacttxt2">
                          {t("VRAJTEX")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>

            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-lg-4 mb-3 contact_datails_01"
              data-aos="fade-up"
            >
              <div className="AboutContactDtl p-3 shadow">
                <Row className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-geo-alt-fill fs-1 ms-2 me-3 d-flex Abouticon"></i>
                    <div className="text-white lh-1">
                      <div>
                        <a
                          className="text-decoration-none"
                          href="https://maps.app.goo.gl/KUCAF5RiiiuYerNe8"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="mb-2 AboutContacttxt1">
                            {t("address")}
                          </p>
                        </a>
                        <p className="mt-2 mb-0 AboutContacttxt2">{t("Location")}</p>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </section>
  );
};

export default About;
