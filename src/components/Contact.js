import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[6789]\d{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const message =
      `New Message from VRAJ TEX Portfolio Website Contact Form:
  
    Name: ${formData.name},
    Phone No.: ${formData.phone},
    Message: ${formData.message}
   `.trim();

    const phoneNumbers = ["918347251947"];
    const encodedMessage = encodeURIComponent(message);
    const whatsappLinks = phoneNumbers.map((num) => {
      const whatsappURL = `https://wa.me/${num}?text=${encodedMessage}`;
      return whatsappURL;
    });

    // Optionally, open both links or let user choose
    window.open(whatsappLinks[0], "_blank");
    // window.open(whatsappLinks[1], "_blank"); // Uncomment to open both

    setFormData({
      name: "",
      phone: "",
      message: "",
    });

    console.log("Form Submitted", formData);
  };

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
    <section className="contact-section pt-lg-5 pt-5 pb-lg-5 pb-4">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={6}
            md={12}
            className="order-lg-1 order-2 mt-lg-0 mt-4"
            data-aos="fade-up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9599594354827!2d72.86294591534423!3d21.193749517842857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f8489dc26cd%3A0xa9205e55edc60bc8!2sVRAJ%20TEX%20(%20scentric%20)!5e0!3m2!1sen!2sin!4v1752240789118!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location of VRAJ TEX" 
              className="border-0 map-frame"
            />
          </Col>

          <Col lg={6} md={12} className="order-lg-2 order-1" data-aos="fade-up">
            <h2 className="text-center Services_heading font-weight-bold text-dark">
              {t("contactus.heading")}
            </h2>
            <div className="text-center mb-lg-5 mb-4" >
              <hr className="custom-line_contact" />
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label className="contact_form_label" >
                  {t("contactus.form.nameLabel")}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("contactus.form.namePlaceholder")}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label className="contact_form_label">
                  {t("contactus.form.phoneLabel")}
                </Form.Label>
                <Form.Control
                  type="phone"
                  placeholder={t("contactus.form.phonePlaceholder")}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="contact_form_label" >
                  {t("contactus.form.messageLabel")}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={t("contactus.form.messagePlaceholder")}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="submit-btn border-0"
              >
                {t("contactus.form.buttonText")}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
