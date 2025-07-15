import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { 
  FaFemale, 
  FaMale, 
  FaChild, 
  FaPalette, 
  FaTshirt, 
  FaGem 
} from "react-icons/fa";

const Categories = () => {
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

  const categories = [
    {
      icon: FaFemale,
      bgClass: "bg-palette",
      title: t("categories.womens_wear.title"),
      description: t("categories.womens_wear.description"),
      items: ["Kurtis", "Sarees", "Gowns", "Skirts", "Plazzo Pants", "Dresses", "Ethnic Wear"]
    },
    {
      icon: FaMale,
      bgClass: "bg-award",
      title: t("categories.mens_wear.title"),
      description: t("categories.mens_wear.description"),
      items: ["Shirts", "Pants", "T-Shirts", "Formal Wear", "Casual Wear", "Traditional Clothing"]
    },
    {
      icon: FaChild,
      bgClass: "bg-easel",
      title: t("categories.kids_wear.title"),
      description: t("categories.kids_wear.description"),
      items: ["Dresses", "Shirts", "Pants", "Ethnic Wear", "Daily Wear", "Comfortable Clothing"]
    },
    {
      icon: FaPalette,
      bgClass: "bg-flower",
      title: t("categories.ethnic_wear.title"),
      description: t("categories.ethnic_wear.description"),
      items: ["Sarees", "Lehengas", "Salwar Suits", "Traditional Dresses", "Kurtas", "Ethnic Sets"]
    },
    {
      icon: FaTshirt,
      bgClass: "bg-scissors",
      title: t("categories.western_wear.title"),
      description: t("categories.western_wear.description"),
      items: ["Dresses", "Tops", "Jeans", "Skirts", "Western Wear", "Contemporary Fashion"]
    },
    {
      icon: FaGem,
      bgClass: "bg-people",
      title: t("categories.accessories.title"),
      description: t("categories.accessories.description"),
      items: ["Dupattas", "Stoles", "Scarves", "Fashion Items", "Accessories", "Style Elements"]
    }
  ];

  return (
    <section className="bg2 py-lg-5 py-4">
      <div className="container-lg pt-2">
        <div data-aos="fade-up">
          <h2 className="text-center Services_heading font-weight-bold text-dark">
            {t("categories.heading")}
          </h2>
          <div className="text-center mb-lg-5 mb-4">
            <hr className="custom-line" />
          </div>
        </div>

        <Row className="text-center d-flex justify-content-center">
          {categories.map((category, index) => (
            <Col
              key={index}
              sm={6}
              md={6}
              lg={4}
              className="mb-lg-4 mb-3 contact_datails_01"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-card d-flex flex-column h-100 shadow-sm">
                <div className={`service-icon ${category.bgClass} text-dark`}>
                  <category.icon className="serviceicon" />
                </div>
                <h3 className="mt-3 ServicesCardHeading font-weight-bold">
                  {category.title}
                </h3>
                <p className="ServicesCardTxt m-0 mb-3">
                  {category.description}
                </p>
                <div className="mt-auto">
                  <div className="category-items">
                    {category.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="badge bg-light text-dark me-1 mb-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Categories; 