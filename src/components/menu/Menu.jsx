import React from "react";
import { useState } from "react";
import MenuIcon from "../../assets/menu.png"
import "./Menu.scss";

export default function Menu(props) {
  const [isMobile] = useState(
    window.matchMedia("only screen and (max-width:1024px)").matches
  );
  const [isMenuOpen,setIsMenuOpen]=useState(false);

  const handleMenuClick =(isOpen)=>{
    setIsMenuOpen(isOpen);
    console.log("clicked");
  }

  return (
    <div className="bsa-menu">
      {isMobile ? (
        <div className="mobile-wrapper-menu">
          <button
            className="menu-button"
            onClick={() => handleMenuClick(!isMenuOpen)}
          >
            <img src={MenuIcon}></img>
          </button>
        </div>
      ) : null}
      {(isMobile && isMenuOpen) || !isMobile ? (
        <div className={isMobile ? "menu-list-mobile" : "menu-list-desktop"}>
          <a className="bsa-link" onClick={props.specialitiesClick}>
            Specialities
          </a>
          <a className="bsa-link" onClick={props.reviewsClick}>
            Reviews
          </a>
          <a className="bsa-link" onClick={props.aboutClick}>
            About
          </a>
        </div>
      ) : null}
    </div>
  );
}
