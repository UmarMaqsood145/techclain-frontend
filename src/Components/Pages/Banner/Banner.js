import React from "react";
import "./Banner.css";
import Aos from "aos";
import { NavLink } from "react-router-dom";

function Banner() {
  Aos.init();
  Aos.refresh();
  return (
    <>
      <div id="banner" data-aos="flip-up" data-aos-duration="2000">
        <div className="bannerColor">
          <h1>
            LET'S TALK ABOUT YOUR NEXT <br />
            PROJECT!
          </h1>
          <NavLink to="/contact">GET STARTED</NavLink>
        </div>
      </div>
    </>
  );
}

export default Banner;
