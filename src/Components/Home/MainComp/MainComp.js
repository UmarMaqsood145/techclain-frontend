import React from "react";
import HomeContact from "./HomeContact/HomeContact";
import "./MainComp.css";
import Offer from "./Offer/Offer";

function MainComp() {
  return (
    <div id="mainComp">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="subComp">
          <HomeContact />
          <Offer />
        </div>
      </div>
    </div>
  );
}

export default MainComp;
