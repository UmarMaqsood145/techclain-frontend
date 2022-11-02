import React from "react";
import "./TeamMember.css";
import qaisar from "../../assets/QaisarRaza.jpg";
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
              Web design encompasses many different skills and disciplines in
              maintenance of websites
            </p>
            <div className="infoIcon">
              <BsFacebook className="memberIcon" />
              <AiOutlineWhatsApp className="memberIcon" />
              <AiFillInstagram className="memberIcon" />
            </div>
          </div>

          <div className="teamCard">
            <img src={qaisar} alt="" />
            <h5>Qaisar Raza</h5>
            <h6> Website Developer</h6>
            <p>
              Web design encompasses many different skills and disciplines in
              maintenance of websites
            </p>
            <div className="infoIcon">
              <BsFacebook className="memberIcon" />
              <AiOutlineWhatsApp className="memberIcon" />
              <AiFillInstagram className="memberIcon" />
            </div>
          </div>

          <div className="teamCard">
            <img src={qaisar} alt="" />
            <h5>Qaisar Raza</h5>
            <h6> Website Developer</h6>
            <p>
              Web design encompasses many different skills and disciplines in
              maintenance of websites
            </p>
            <div className="infoIcon">
              <BsFacebook className="memberIcon" />
              <AiOutlineWhatsApp className="memberIcon" />
              <AiFillInstagram className="memberIcon" />
            </div>
          </div>

          <div className="teamCard">
            <img src={qaisar} alt="" />
            <h5>Qaisar Raza</h5>
            <h6> Website Developer</h6>
            <p>
              Web design encompasses many different skills and disciplines in
              maintenance of websites
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
