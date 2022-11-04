import React, { useState } from "react";
import "./Portfolio.css";
import Aos from "aos";
import { PortfolioApi } from "./PortfolioApi";
import { useNavigate } from "react-router-dom";

function PortfolioWork() {
  Aos.init();
  Aos.refresh();
  const Navigate = useNavigate();
  const [Noofallproducts, setNoofallProducts] = useState(9);
  const sliceAllProducts = PortfolioApi.slice(0, Noofallproducts);
  const loadMoreProducts = () => {
    setNoofallProducts(Noofallproducts + Noofallproducts);
  };
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
        {sliceAllProducts.map((data, index) => (
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
        <button onClick={loadMoreProducts}>See More</button>
        <button onClick={() => Navigate("/order-now")}>Order Now</button>
      </div>
    </div>
  );
}

export default PortfolioWork;
