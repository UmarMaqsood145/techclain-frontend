import React from "react";
import "./Home.css";
import MainComp from "./MainComp/MainComp";
import ClientSays from "./ClientSays/ClientSays";
import OurClients from "./OurClients/OurClients";
import CompanyServices from "./CompanyServices/CompanyServices";
import AboutSection3 from "./AboutSection3/AboutSection3";

function Home() {
  return (
    <div id="home">
      <MainComp />
      <CompanyServices />
      <AboutSection3 />
      <ClientSays />
      <OurClients />
    </div>
  );
}

export default Home;
