import React, { useState, useEffect } from "react";
import BackgroundImg from "../../assets/teethBackground1.png";
import "./Specialities.scss";
import SpecialitiesData from "./SpecialitiesList.js";

const Specialities = React.forwardRef((props, specialitiesRef) => {
  const [selectedSpeciality, setSelectedSpeciality] = useState(1);
  const [isMobile] = useState(
    window.matchMedia("only screen and (max-width:1024px)").matches
  );
  const refs = SpecialitiesData.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const reficon = SpecialitiesData.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = (id) => {
    setSelectedSpeciality(id);
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const handleClickIcon = (id) => {
    setSelectedSpeciality(id);
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const handlePreviousClick = (selected) => {
    refs[selected].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const handleNextClick = (selected) => {
    refs[selected].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const isScrolledIntoView = (el) => {
    const { top } = el.getBoundingClientRect();
    const elemTop = top;
    const isVisible = elemTop >= 0 && elemTop <= 400;
    return isVisible;
  };

  const isScrolledIntoMobileView = (el) => {
    const { left } = el.getBoundingClientRect();
    const elemLeft = left;
    const isVisible = elemLeft >= -40 && elemLeft <= 40;
    return isVisible;
  };

  // const isScrolledIconIntoView = (el) => {
  //   const { top } = el.getBoundingClientRect();
  //   const elemTop = top;
  //   const isVisible = elemTop >= 700 && elemTop <= 800;
  //   return isVisible;
  // };

  useEffect(() => {
    const listEl = document.getElementById("list");
    //const iconlist = document.getElementById("iconlist");

    listEl.addEventListener("scroll", (e) => {
      for (let i = 1; i <= SpecialitiesData.length; i++) {
        if (refs[i].current != null) {
          if (
            isMobile
              ? isScrolledIntoMobileView(refs[i].current)
              : isScrolledIntoView(refs[i].current) === true
          ) {
            setSelectedSpeciality(i);
          }
        }
      }
    });

    console.log(selectedSpeciality);

    // iconlist.addEventListener("scroll", (e) => {
    //   for (let i = 1; i <= SpecialitiesData.length; i++) {
    //     if (reficon[i].current != null) {
    //       if (isScrolledIconIntoView(reficon[i].current) === true) {
    //         setSelectedSpeciality(i);
    //       }
    //     }
    //   }
    // });
  }, [refs, reficon, selectedSpeciality, isMobile]);

  return (
    <div className="specialitiesContainer" ref={specialitiesRef}>
      <div className="specialities-title">Our Specialities</div>
      <div className="scrollSection">
        <ul className="nav-dots-ul">
          {SpecialitiesData.map((data, index) => {
            return (
              <>
                <li
                  key={data.id}
                  className={
                    selectedSpeciality === data.id
                      ? "nav-dot selected"
                      : "nav-dot"
                  }
                  onClick={() => handleClick(data.id)}
                ></li>
              </>
            );
          })}
        </ul>
      </div>

      <ul
        className="nav-icons"
        id="iconlist"
        style={{
          top: `calc(${selectedSpeciality}*-1%)`,
        }}
      >
        {SpecialitiesData.map((data, index) => {
          return (
            <>
              <li
                key={data.id}
                style={
                  isMobile
                    ? {
                        left: `calc(${selectedSpeciality - 1}*-12.5%)`,
                        visibility:
                          data.id !== selectedSpeciality ? "hidden" : null,
                      }
                    : {
                        top: `calc(${selectedSpeciality - 1}*-25%)`,
                        visibility:
                          data.id <= selectedSpeciality - 2 ||
                          data.id >= selectedSpeciality + 2
                            ? "hidden"
                            : null,
                      }
                }
                className={
                  data.id === selectedSpeciality
                    ? "icon-list-item icon-list-item-selected"
                    : "icon-list-item"
                }
                ref={reficon[data.id]}
                onClick={() => handleClickIcon(data.id)}
              >
                <div className="image-container">
                  <img
                    className={
                      data.id === selectedSpeciality
                        ? "bsa-active-speciality-img"
                        : "bsa-speciality-img"
                    }
                    src={data.image}
                    alt=""
                  />
                  <span
                    className={
                      data.id === selectedSpeciality
                        ? "active-img-text"
                        : "img-text"
                    }
                  >
                    {data.title}
                  </span>
                </div>
              </li>
            </>
          );
        })}
      </ul>
      {isMobile ? (
        <div className="specialities-buttons">
          <button
            className="previous-button"
            onClick={() => handlePreviousClick(selectedSpeciality - 1)}
            disabled={selectedSpeciality > 1 ? false : true}
          >
            &#8249;
          </button>
          <button
            className="next-button"
            onClick={() => handleNextClick(selectedSpeciality + 1)}
            disabled={
              selectedSpeciality >= SpecialitiesData.length ? true : false
            }
          >
            &#8250;
          </button>
        </div>
      ) : null}
      <ul className="specialitiesList" id="list">
        {SpecialitiesData.map((data, index) => {
          return (
            <li
              key={data.id}
              ref={refs[data.id]}
              className="specialitiesListItem"
              style={{ top: `calc(${selectedSpeciality - 1}*-40%)` }}
            >
              <div className="specialitiesItemTitle">{data.title}</div>
              <div className="specialitiesItemContent">{data.content}</div>
              <div className="specialities-section2">
                <div className="average-cost">
                  <div className="cost-number">${data.averageCost}/-</div>
                  <div className="cost-title">Average cost</div>
                </div>
                <div className="average-operation-time">
                  <div className="operation-time-number">
                    {data.averageOperationTime} Hrs
                  </div>
                  <div className="operation-time-title">
                    Average operation time
                  </div>
                </div>
                <div className="successful-operations">
                  <div className="successful-operations-number">
                    {data.successfulOperations}+
                  </div>
                  <div className="successful-operations-title">
                    Successful operations
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <img
        src={BackgroundImg}
        alt=""
        className="specialities-background-img"
      ></img>
    </div>
  );
});

export default Specialities;
