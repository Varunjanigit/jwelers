import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import VisitorCounter from "./components/VisitorCounter";

const Home = () => {
  return (
    <>
      <VisitorCounter />
      <Header />
      <About />
      <Categories />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
