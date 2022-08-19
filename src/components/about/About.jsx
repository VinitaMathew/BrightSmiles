import React from "react";
import Arrow from "../../assets/arrow.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import "./About.scss";

const About = React.forwardRef((props, ref) => {
  return (
    <div className="about-container" ref={ref}>
      <div className="about-content-wrapper">
        <div className="details-map"></div> {/* map placeholder */}
        <img src={Arrow} className="arrow-image" alt=""></img>
        <div className="details-section">
          <div className="about-title">We are here!!</div>
          <div className="about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
          <button className="about-button">Schedule Apointment</button>
          <div className="about-contact">or call +90457386238</div>
          <div className="about-section2">Follow us @</div>
          <div className="social-media-links">
            <a href="/instagram" className="instagram-link" target="_blank">
              <img
                src={Instagram}
                alt="Go to instagram handle"
                className="instagram-image"
              ></img>
            </a>
            <a href="/linkedin" className="linkedin-link" target="_blank">
              <img
                src={LinkedIn}
                alt="Go to linked in handle"
                className="linkedin-image"
              ></img>
            </a>
            <a href="/twitter" className="twitter-link" target="_blank">
              <img
                src={Twitter}
                alt="Go to twitter handle"
                className="twitter-image"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
export default About;
