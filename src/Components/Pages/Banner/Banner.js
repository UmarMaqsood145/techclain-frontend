import React from "react";
import "./Banner.css";
import job from "../../assets/logo.ico";
import Aos from "aos";
function Banner() {
  Aos.init();
  Aos.refresh();
  return (
    <>
      <div id="banner" data-aos="flip-up" data-aos-duration="2000">
        <div className="bannerColor">
          <div>
            <h1>JOBSVIEWERS</h1>
            <p>BEST JOBS WEBSITE PLATEFORM SEARCH HERE AND GET A PERFECT JOB</p>
          </div>
          <img src={job} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
