import React from "react";
import Circles from "../../../assets/circles.png";
import "./Info.scss";

export default function Info() {
  return (
    <div className="infoContainer">
      <div className="infoLine1">We care for</div>
      <div className="infoLine2">Your Smile</div>
      <div className="infoContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla.
      </div>
      <button className="infoButton">Schedule Apointment</button>
      <div className="infoContact">or call +90457386238</div>
      <img src={Circles} alt="" className="info-image"></img>
      <div className="image-text1">900+</div>
      <div className="image-text2">Happy customers</div>
    </div>
  );
}
