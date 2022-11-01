import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routing from "./Components/Routing/Routing";

function App() {
  return (
    <>
      <ToastContainer position="top-right" style={{ zIndex: "9999999" }} />
      <Routing />
    </>
  );
}

export default App;
