import React from "react";
import "./Portfolio.css";
import Aos from "aos";
import { PortfolioApi } from "./PortfolioApi";

function PortfolioWork() {
  Aos.init();
  Aos.refresh();
  return (
    <div id="portfolio-work">
      <h1 data-aos="zoom-in">
        WORK <span>SHOWCASE</span>
      </h1>
      <div className="filterButtons" data-aos="zoom-in">
        <button>All</button>
        <button>Web Design</button>
        <button>Web Development</button>
        <button>Amazon</button>
      </div>
      <div className="container">
        {PortfolioApi.map((data, index) => (
          <div className="cards" data-aos="fade-up" key={index}>
            <img src={data.pic} alt="" />
            <div className="cap-box">
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="cap-inner"
              >
                {data.projectName}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="btnBox">
        <button>See More</button>
        <button>Let's Start</button>
      </div>
    </div>
  );
}

export default PortfolioWork;
