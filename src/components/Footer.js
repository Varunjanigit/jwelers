import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VrajTexLogo from "../images/vitabitz logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footerBg custom-footer">
      <Container>
        <Row className="align-items-center py-3">
          <Col lg={4} md={12} className="text-center text-lg-start mb-2 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <img src={VrajTexLogo} alt="VRAJ TEX Logo" style={{ height: 40, marginRight: 12 }} />
              <div className="text-start">
                <div className="footer-brand">{t("VRAJTEX")}</div>
                <div className="footer-tagline">{t("VRAJ_TEX")}</div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} className="text-center mb-2 mb-md-0">
            <div className="footer-contact">
              <a href="tel:9723872406" className="footer-link">{t("footer.phone1")}</a> |
              <a href="tel:9173738300" className="footer-link">{t("footer.phone2")}</a> |
              <a href="mailto:vijaympatel783@gmail.com" className="footer-link ms-2">{t("footer.email")}</a>
            </div>
          </Col>
          <Col lg={4} md={12} className="text-center text-lg-end">
            <div className="footer-designed">
              {t("footer.DesignedBy")} <a href="https://liontouchwebpark.com" target="_blank" rel="noopener noreferrer" className="footer-link">{t("footer.LiontouchWebpark")}</a>
            </div>
            <div className="footer-copyright">
              &copy; {year} {t("footer.VRAJTEX")}. {t("footer.copyright")}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
