import React from "react";
import "./Offer.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavLink } from "react-router-dom";
import Aos from "aos";
function Offer() {
  Aos.init();
  Aos.refresh();
  return (
    <>
      <div id="offer" data-aos="fade-left">
        <h4>EXCLUSIVE OFFER</h4>
        <div className="off">30% OFF</div>
        <h5>Avail Discount Today</h5>
        <div className="price">
          <NavLink to="/packages">See Offers</NavLink>
        </div>
        <div className="mt-4 px-3">
          <div className="d-flex justify-content-between">
            <p>60 0f 100 Sold</p>
            <p>3 sold in Last Hour</p>
          </div>
          <ProgressBar now={75} variant="danger" striped animated />
        </div>
        <div className="offerBox">
          ENDS IN <br />9 DAYS, 08 HOURS,
          <br /> 30 MIN, 46 SEC
        </div>
      </div>
    </>
  );
}

export default Offer;
