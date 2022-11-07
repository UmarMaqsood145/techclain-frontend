import React from "react";
import "./Packages.css";
import { BsCheck } from "react-icons/bs";
import { packagesDetail } from "../../Pages/Packages/PackagesApi";
import { NavLink } from "react-router-dom";
import Aos from "aos";
function Packages() {
  Aos.init();
  Aos.refresh();
  return (
    <>
      <div id="packages">
        <h1>
          Affordable <span>Packages</span> As Per Your Needs.
        </h1>
        <div className="packagDetailMain">
          {packagesDetail.map((data) => (
            <div className="packagDetail" data-aos="zoom-in">
              <div className="basic">
                <h6>{data.title}</h6>
                <h6>Package</h6>
              </div>
              <div className="price">
                <h4>$</h4>
                <h1>{data.price}</h1>
              </div>
              <div className="detailPkg">
                <div className="tick">
                  <BsCheck className="tickIcon" />
                  <p>{data.p1}</p>
                </div>
                <div className="tick">
                  <BsCheck className="tickIcon" />
                  <p>{data.p2}</p>
                </div>
                <div className="tick">
                  <BsCheck className="tickIcon" />
                  <p>{data.p3}</p>
                </div>
                <div className="tick">
                  <BsCheck className="tickIcon" />
                  <p>{data.p4}</p>
                </div>
                <div className="tick">
                  <BsCheck className="tickIcon" />
                  <p>{data.p5}</p>
                </div>
                <div className="tick">
                  <BsCheck className="tickIcon" />
                  <p>{data.p6}</p>
                </div>
                <div className="tick">
                  <BsCheck className="tickIcon" />
                  <p>{data.p7}</p>
                </div>
              </div>
              <div className="chat">
                <button>Live Chat</button>
                <NavLink to="/order-now">Order Now</NavLink>
              </div>
              <div className="call">
                <a href="tel: +923033230379" target="_blank" rel="noreferrer">
                  Call Us: +923033230379
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Packages;
