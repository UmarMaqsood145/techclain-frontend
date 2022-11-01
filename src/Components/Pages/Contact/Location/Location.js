import React from "react";
import "./Location.css";
function Location() {
  return (
    <div id="location">
      <h1>
        OUR <span>LOCATION</span>
      </h1>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6887543247!2d74.05350463545243!3d31.48321937753424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1664446240771!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          title="Jobs"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
