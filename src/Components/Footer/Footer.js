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
            You can find any type of job on jobsviewers without any problem
            sitting at home. You can also post your job on it. If you are
            looking for a worker, then post the job with your information and
            the workers will contact you automatically. This website is related
            to job without any problem visit our website now without any
            charges.
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
              <a href="tel: +923401254367" target="_blank" rel="noreferrer">
                +923401254367
              </a>
            </li>
            <li>
              <FaWhatsapp className="icon" />
              <a
                href="https://wa.me/923401254367"
                target="_blank"
                rel="noreferrer"
              >
                +923401254367
              </a>
            </li>
            <li>
              <MdEmail className="icon" />
              <a
                href="mailTo: jobsviewers@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                jobsviewers@gmail.com
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
              href="https://wa.me/923401254367"
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
          © 2022 <NavLink to="/">JOBS VIEWERS</NavLink>. All Rights Reserved.
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
