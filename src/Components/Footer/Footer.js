import React from "react";
import "./Footer.css";
import logo from "../assets/logo.ico";
import { MdLocationOn, MdEmail, MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp, FaLaptopCode } from "react-icons/fa";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { RiUserSearchLine } from "react-icons/ri";
import { AiOutlineFileText, AiOutlineContacts } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="f-box">
        <div className="inner-box">
          <div className="logo">
            <img src={logo} alt="THinko Digital" />
          </div>
          <p className="footerText mt-2">
            Our web development services in Pakistan gives wings to your
            business. We have an expert team who makes your business easy to get
            anywhere of the E-commerce industry.We also provides e-commerce
            website development services for an online shopping store. If you
            want to develop a well-designed and attractive website for your
            online business, contact us to get our exceptional web development
            services.
          </p>
        </div>
        <div className="inner-box">
          <h2>CONTACT</h2>
          <div className="mt-4">
            <li>
              <MdLocationOn className="icon" />
              <a
                href="https://goo.gl/maps/75sS9oLPexo22B9u9"
                target="_blank"
                rel="noreferrer"
              >
                Lahore Punjab, Pakistan
              </a>
            </li>
            <li>
              <IoIosCall className="icon" />
              <a href="tel: +923033230379" target="_blank" rel="noreferrer">
                +923033230379
              </a>
            </li>
            <li>
              <FaWhatsapp className="icon" />
              <a
                href="https://wa.me/923033230379"
                target="_blank"
                rel="noreferrer"
              >
                +923033230379
              </a>
            </li>
            <li>
              <MdEmail className="icon" />
              <a href="mailTo: info@gmail.com" target="_blank" rel="noreferrer">
                info@gmail.com
              </a>
            </li>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/thinkodigitalsolution"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="fa" />
            </a>
            <a
              href="https://www.instagram.com/thinkodigital/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="fa" />
            </a>
            <a
              href="https://www.linkedin.com/company/thinkodigitalmarketing/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="fa" />
            </a>
            <a
              href="https://www.pinterest.com/thinkodigital/?invite_code=c67708eb2dd24a8a9264b55b29e72aa6&sender=985655205855053523"
              target="_blank"
              rel="noreferrer"
            >
              <BsPinterest className="fa" />
            </a>
            <a
              href="https://wa.me/923033230379"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="fa" />
            </a>
          </div>
        </div>
        <div className="inner-box">
          <h2>LINKS</h2>
          <div className="mt-4">
            <li>
              <AiOutlineHome className="icon" />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <RiUserSearchLine className="icon" />
              <NavLink to="/packages">Packages</NavLink>
            </li>
            <li>
              <FaLaptopCode className="icon" />
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <AiOutlineFileText className="icon" />
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <AiOutlineContacts className="icon" />
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <MdOutlinePrivacyTip className="icon" />
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="lastBox">
        <p>
          © 2022 <NavLink to="/">Company Name</NavLink>. All Rights Reserved.
        </p>
        <p className="f">
          Designed and Developed by{" "}
          <a
            href="https://qaisarraza.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Qaisar Raza
          </a>{" "}
          and{" "}
          <a
            href="https://umarmaqsood.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Umar Maqsood
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
