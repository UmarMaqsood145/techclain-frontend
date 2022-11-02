import React from "react";
import "./HomeContact.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
function HomeContact() {
  return (
    <>
      <div id="homeContact">
        <h2>
          Do You Want An Identity that Stays in Your Customer’s Mind Forever?
        </h2>
        <p>Hire Our Website Designers in Pakistan!</p>
        <div className="contactDetail">
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Business Name" />
          <input type="text" placeholder="Enter Your Email" />
          <PhoneInput inputClass="ccc" />
          <button>Submit</button>
        </div>
        <button className="discount">Chat With Us to Get 30% Discount</button>
      </div>
    </>
  );
}

export default HomeContact;
