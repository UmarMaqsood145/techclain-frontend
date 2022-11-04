import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.ico";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const Navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const orderNow = () => {
    Navigate("/order-now");
    setMenu(false);
  };
  return (
    <nav id="nav">
      <div className="navBar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Thinko Digital" />
          </Link>
        </div>
        <VscMenu className="openMenu" onClick={() => setMenu(true)} />
        <div
          className={menu ? "rightBoxOverlay show-overlay" : "rightBoxOverlay"}
          onClick={() => setMenu(false)}
        ></div>
        <div className={menu ? "nav-items show-nav" : "nav-items"}>
          <GrClose className="closeMenu" onClick={() => setMenu(false)} />
          <li>
            <NavLink to="/" end onClick={() => setMenu(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/packages" onClick={() => setMenu(false)}>
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={() => setMenu(false)}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenu(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenu(false)}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <button className="orderBtn" onClick={orderNow}>
              Order Now
            </button>
          </li>
          <div className="navDetails">
            <p>
              Our web development services in Pakistan gives wings to your
              business. We have an expert team who makes your business easy to
              get anywhere in the era of the E-commerce industry.We also
              provides e-commerce website development services for an online
              shopping store. If you want to develop a well-designed and
              attractive website for your online business, contact us to get our
              exceptional web development services.
            </p>
            <div className="mt-2">
              <a href="mailTo: info@gmail.com" target="_blank" rel="noreferrer">
                info@gmail.com
              </a>
            </div>
            <div className="mt-2">
              <a
                href="https://wa.me/923033230379"
                target="_blank"
                rel="noreferrer"
              >
                +923033230379
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/923033230379"
          target="_blank"
          rel="noreferrer"
          className="contactBtn"
        >
          <RiWhatsappFill className="icon" />
          <div className="ms-2">
            <span>CONNECT WITH US</span>
            <p>+923033230379</p>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
