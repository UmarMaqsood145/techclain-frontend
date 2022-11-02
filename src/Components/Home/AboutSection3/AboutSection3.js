import React from "react";
import "./AboutSection3.css";
import AboutSection3Api from "./AboutSectionApi";

function AboutSection3() {
  return (
    <div id="aboutSec3">
      <h1>
        What Make Us <span>Special</span>
      </h1>
      <h5>
        Our strengths and advantages makes us different from our competitors
        that meets all our customers' demand
      </h5>
      <div className="cardsContainer">
        {AboutSection3Api.map((data) => {
          return (
            <div className="cards">
              <div class="line-1"></div>
              <div class="line-2"></div>
              <div class="line-3"></div>
              <div class="line-4"></div>
              <h1>{data.mainTitle}</h1>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutSection3;
