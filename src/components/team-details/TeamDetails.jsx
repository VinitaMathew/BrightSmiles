import React from "react";
import teamData from "./TeamStub";
import "./TeamDetails.scss";

export default function TeamDetails() {
  return (
    <div className="team-details-container">
      <div className="team-wrapper">
        <div className="team-details-heading">Meet Our Team</div>
        <div className="team-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>
        <ul className="team-list">
          {teamData.map((data) => {
            return (
              <li className="team-list-item" key={data.id}>
                <img
                  className="team-member-photo"
                  src={data.image}
                  alt={"Profile photo of" + data.name}
                ></img>
                <div className="team-member-name">{data.name}</div>
                <div className="team-member-role">{data.role}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
