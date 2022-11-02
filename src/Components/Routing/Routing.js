import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Banner from "../Pages/Banner/Banner";
import Footer from "../Footer/Footer";
import Portfolio from "../Pages/Portfolio/Portfolio";
import OrderNow from "../Pages/OrderNow/OrderNow";
import ScrollToTop from "./ScrollToTop";

function Routing() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/order-now" element={<OrderNow />} />
        </Routes>
        <Banner />
        <Footer />
        <ScrollToTop />
      </Router>
    </>
  );
}

export default Routing;
