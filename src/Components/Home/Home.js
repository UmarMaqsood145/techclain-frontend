import React, { useRef } from "react";
import "./Home.css";
import MainComp from "./MainComp/MainComp";
import ClientSays from "./ClientSays/ClientSays";
import OurClients from "./OurClients/OurClients";
import CompanyServices from "./CompanyServices/CompanyServices";
import AboutSection3 from "./AboutSection3/AboutSection3";
import Packages from "../Pages/Packages/Packages";
import Portfolio from "../Pages/Portfolio/Portfolio";

function Home() {
  const myRef = useRef(null);
  const clickBtn = () => {
    myRef.current.scrollIntoView();
  };
  return (
    <div id="home">
      <MainComp clickBtn={clickBtn} />
      <CompanyServices />
      <Packages myRef={myRef} />
      <AboutSection3 />
      <ClientSays />
      <OurClients />
      <Portfolio />
    </div>
  );
}

export default Home;
