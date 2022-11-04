import React from "react";
import "./CompanyServices.css";
import image from "../../assets/image3.png";
import { NavLink } from "react-router-dom";

function CompanyServices() {
  return (
    <>
      <div id="heapwareSec">
        <div className="box">
          <h1>
            Welcome to <span>Company</span> - Fastest Growing IT Company
          </h1>
          <p>
            The Innovation power to transform your idea into a digital solution
            with our software our software Development Agency
          </p>
          <p className="mb-4">
            CompanyName is a leading software Development Agency in los
            Angles.we believe that the future is digital.Therefore the refusal
            to embrace new technology on a personal or corporate level can stop
            the progress of companies. CompanyName help established businesses
            and startup in designing website,developing software that brings
            their ideas to life and fulfills their needs
          </p>
          <NavLink to="/about">Know more about us</NavLink>
        </div>
        <img src={image} alt={image} />
      </div>
    </>
  );
}

export default CompanyServices;
