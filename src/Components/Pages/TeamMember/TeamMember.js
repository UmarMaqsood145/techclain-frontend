import React from "react";
import "./TeamMember.css";
import qaisar from "../../assets/QaisarRaza.jpg";
import umar from "../../assets/umar.jpg";
import arsalan from "../../assets/araslan.jpg";
import friend from "../../assets/friend.jpg";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function TeamMember() {
  return (
    <>
      <div id="teamMember">
        <h2>
          MEET WITH OUR <span> TEAM</span>
        </h2>
        <div className="teamCardMain">
          <div className="teamCard">
            <img src={qaisar} alt="" />
            <h5>Qaisar Raza</h5>
            <h6> Website Developer</h6>
            <p>
              We are professional website developer and planner who is
              responsible for the design and construction of websites.
            </p>
            <div className="infoIcon">
              <BsFacebook className="memberIcon" />
              <AiOutlineWhatsApp className="memberIcon" />
              <AiFillInstagram className="memberIcon" />
            </div>
          </div>

          <div className="teamCard">
            <img src={umar} alt="" />
            <h5>Umar Maqsood</h5>
            <h6> Website Developer</h6>
            <p>
              Website developer responsible for planning and developing software
              solutions and web applications, supporting .
            </p>
            <div className="infoIcon">
              <BsFacebook className="memberIcon" />
              <AiOutlineWhatsApp className="memberIcon" />
              <AiFillInstagram className="memberIcon" />
            </div>
          </div>

          <div className="teamCard">
            <img src={arsalan} alt="" />
            <h5>Muhammad Arsalan</h5>
            <h6> Amazon Expert</h6>
            <p>
              Managing the Amazon store of clients and also implementing
              strategies in order to make the accounts grow products that will
              continue to sell.
            </p>
            <div className="infoIcon">
              <BsFacebook className="memberIcon" />
              <AiOutlineWhatsApp className="memberIcon" />
              <AiFillInstagram className="memberIcon" />
            </div>
          </div>

          <div className="teamCard">
            <img src={friend} alt="" />
            <h5>Muhammad Babar</h5>
            <h6>eBay Expert</h6>
            <p>
              eBay services such as product titles and description, data entry,
              bulk product upload, category management etc.
            </p>
            <div className="infoIcon">
              <BsFacebook className="memberIcon" />
              <AiOutlineWhatsApp className="memberIcon" />
              <AiFillInstagram className="memberIcon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamMember;
