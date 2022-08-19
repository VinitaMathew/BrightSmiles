import React, { useEffect, useState } from "react";
import BackgroundImg from "../../assets/teethBackground2.png";
import "./Reviews.scss";
import reviewData from "./reviewStub.js";

const Reviews = React.forwardRef((props, ref) => {
  const [selectedReview, setSelectedReview] = useState(1);
  const [isMobile] = useState(
    window.matchMedia("only screen and (max-width:1024px)").matches
  );

  const refs = reviewData.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const isScrolledIntoView = (el) => {
    const { left } = el.getBoundingClientRect();
    const elemLeft = left;
    const isVisible = elemLeft >= 0 && elemLeft <= 400;
    return isVisible;
  };

  useEffect(() => {
    // const slider = document.querySelector(".review-list");
    // let mouseDown = false;
    // let startX, scrollLeft;

    // let startDragging = function (e) {
    //   mouseDown = true;
    //   startX = e.pageX - slider.offsetLeft;
    //   scrollLeft = slider.scrollLeft;
    // };

    // let stopDragging = function (event) {
    //   mouseDown = false;
    // };
    // slider.addEventListener("mousemove", (e) => {
    //   e.preventDefault();
    //   if (!mouseDown) {
    //     return;
    //   }
    //   const x = e.pageX - slider.offsetLeft;
    //   const scroll = x - startX;
    //   slider.scrollLeft = scrollLeft - scroll;
    // });
    // // Add the event listeners
    // slider.addEventListener("mousedown", startDragging, false);
    // slider.addEventListener("mouseup", stopDragging, false);
    // slider.addEventListener("mouseleave", stopDragging, false);

    const listElement = document.getElementById("list");
    listElement.addEventListener("scroll", (e) => {
      for (let i = 1; i <= reviewData.length; i++) {
        if (refs[i].current != null) {
          if (isScrolledIntoView(refs[i].current) === true) {
            setSelectedReview(i);
          }
        }
      }
    });
  }, [selectedReview, refs]);
  return (
    <div className="reviews-container" ref={ref}>
      <div className="reviews-heading">Listen to what they have to say !</div>
      <ul className="review-list" id="list">
        {reviewData.map((data, index) => {
          return (
            <li
              className="review-list-item"
              key={data.id}
              ref={refs[data.id]}
              style={{
                right: isMobile
                  ? `calc(${selectedReview - 1}*120%)`
                  : `calc(${selectedReview - 1} * 79%)`,
              }}
            >
              <img
                className="list-photo"
                src={data.image}
                alt={"reviewer photo" + data.image}
              ></img>
              <div className="list-title">{data.title}</div>
              <span className="list-colon">"</span>
              <div className="list-info">{data.info}</div>
              <div className="list-footer">
                <span className="list-name">{data.name}</span>
                <span className="list-role">{data.role}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="review-buttons">
        <button
          className="previous-button"
          onClick={() => {
            if (selectedReview > 0) {
              setSelectedReview(selectedReview - 1);
            }
          }}
          disabled={selectedReview > 1 ? false : true}
        >
          &#8249;
        </button>
        <button
          className="next-button"
          onClick={() => {
            if (selectedReview < reviewData.length) {
              setSelectedReview(selectedReview + 1);
            }
          }}
          disabled={selectedReview >= reviewData.length ? true : false}
          id="next"
        >
          &#8250;
        </button>
      </div>
      <img src={BackgroundImg} alt="" className="reviews-background-img"></img>
    </div>
  );
});
export default Reviews;
