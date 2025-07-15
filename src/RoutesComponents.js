import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import ScrollToTop from "./components/ScrollToTop";
import ShareButton from "./components/ShareButton";

const RoutesComponents = () => {
  const PageOpenFromTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };

  return (
    <BrowserRouter>
      <PageOpenFromTop />
      <ScrollToTop />
      <ShareButton />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponents;
