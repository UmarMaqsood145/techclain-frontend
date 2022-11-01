import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.ico";
import { NavLink, Link } from "react-router-dom";
import { BsChatDotsFill } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [menu, setMenu] = useState(false);
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
          <div className="navDetails">
            <p>
              You can find any type of job on jobsviewers without any problem
              sitting at home. You can also post your job on it. If you are
              looking for a worker, then post the job with your information and
              the workers will contact you automatically. This website is
              related to job without any problem visit our website now without
              any charges.
            </p>
            <div className="mt-2">
              <a href="mailTo: info@gmail.com" target="_blank" rel="noreferrer">
                info@gmail.com
              </a>
            </div>
            <div className="mt-2">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
              >
                +923001234567
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noreferrer"
          className="contactBtn"
        >
          <BsChatDotsFill className="icon" />
          <div className="ms-2">
            <span>CONNECT WITH US</span>
            <p>+923001234567</p>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
