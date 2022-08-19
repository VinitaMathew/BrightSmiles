import React from "react";
import Info from "./info-section/Info";
import Logo from "../../assets/bsa-logo.jpg";
import InfoImage from "../../assets/bsa-info-image.png";
import "./LandingPage.scss";

export default function LandingPage(props) {
  return (
    <div className="bsa-landing-page">
      <div className="bsa-menu-container">
        <img className="bsa-logo" src={Logo} alt="bright smiles logo" />
        <button className="bsa-checkup-button">Free check up</button>
      </div>
      <div className="bsa-info-container">
        <Info />
        <img className="bsa-info-image" src={InfoImage} alt="" />
      </div>
    </div>
  );
}
