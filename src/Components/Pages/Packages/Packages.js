import React from "react";
import "./Packages.css";
import { BsCheck } from "react-icons/bs";
import { packagesDetail } from "../../Pages/Packages/PackagesApi";
function Packages() {
  return (
    <>
      <div id="packages">
        <h1>
          Affordable <span>Packages</span> As Per Your Needs.
        </h1>
        <div className="packagDetailMain">
          {packagesDetail.map((data) => (
            <div className="packagDetail">
              <div className="basic">
                <h6>{data.title}</h6>
                <h6>Packages</h6>
              </div>
              <div className="price">
                <h4>PKR</h4>
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
              </div>
              <div className="chat">
                <button>Live Chat</button>
                <button>Get a Quote</button>
              </div>
              <div className="call">Call Us: +92 303 3230379</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Packages;
