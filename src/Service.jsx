import React from "react";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import DigitalServices from "./components/DigitalServices";
import DevelopmentServices from "./components/DevelopmentServices";

function Service() {
  return (
    <>
      <Navigationbar />
      <DigitalServices />
      <DevelopmentServices />
      <Footer />
    </>
  );
}

export default Service;
