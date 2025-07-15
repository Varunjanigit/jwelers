import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";
import image9 from "../images/9.jpg";
import image10 from "../images/10.jpg";
import image11 from "../images/11.jpg";
import image12 from "../images/12.jpg";

const Gallery = () => {
  const { t } = useTranslation();

  const images = useMemo(() => [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image7 },
    { src: image6 },
    { src: image8 },
    { src: image9 },
    { src: image10 },
    { src: image11 },
    { src: image12 },
  ], []);

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMediaClick = useCallback((index) => {
    setCurrentIndex(index);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleDownload = useCallback(() => {
    const src = images[currentIndex].src;
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop();
    link.click();
  }, [currentIndex, images]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    window.addEventListener("load", () => AOS.refreshHard());
    window.addEventListener("scroll", () => AOS.refreshHard());

    return () => {
      window.removeEventListener("load", () => AOS.refreshHard());
      window.removeEventListener("scroll", () => AOS.refreshHard());
    };
  }, []);

  return (
    <>
      <section className="gallery-section py-lg-5 py-4">
        <Container className="pt-2">
          <div data-aos="fade-up">
            <h2 className="text-center Services_heading font-weight-bold text-dark">
              {t("gallery.heading")}
            </h2>
            <div className="text-center mb-lg-5 mb-4">
              <hr className="custom-line_gallery" />
            </div>
          </div>

          <Row className="text-center">
            {images.map((item, idx) => (
              <Col
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={3}
                key={idx}
                className="p-xxl-2 p-lg-2 p-md-2 p-sm-2 p-1"
                data-aos="fade-up"
              >
                <div
                  className="gallery-image-container"
                  onClick={() => handleMediaClick(idx)}
                >
                  <Image
                    src={item.src}
                    alt={`Gallery Image ${idx + 1}`}
                    className="w-100 h-auto rounded-4 gallery_image"
                    loading="lazy"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="md"
        centered
        className="modal-custom"
        aria-labelledby="gallery-modal"
      >
        <Modal.Header className="border-0 px-1 pb-2 text-white d-flex justify-content-end">
          <Button
            variant="link"
            onClick={handleDownload}
            className="p-0 me-3"
            style={{ background: "none", border: "none" }}
            aria-label="Download Image"
          >
            <i className="bi bi-download fs-4 text-white"></i>
          </Button>
          <i
            className="bi bi-x-lg fs-4 closeButton"
            style={{ cursor: "pointer" }}
            onClick={handleCloseModal}
            aria-label="Close Modal"
          ></i>
        </Modal.Header>

        <Modal.Body className="p-0 bg-transparent">
          <Swiper
            initialSlide={currentIndex}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            className="swiper-container rounded"
          >
            {images.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="zoom-container">
                  <Image
                    src={item.src}
                    alt={`Gallery Image ${idx + 1}`}
                    className="w-100 h-100 rounded"
                    style={{ objectFit: "contain", cursor: "zoom-in" }}
                    onClick={() => window.open(item.src, "_blank")}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallery;
