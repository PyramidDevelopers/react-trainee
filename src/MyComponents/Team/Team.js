import React from "react";
import "./Team.css";
import dhruv from "../../assets/dhruv-shetty.png";
import samarth from "../../assets/samarth-kashyap.png";
import ayush from "../../assets/ayush-kiran.png";
import ankit from "../../assets/ankit-mallya.png";

const Team = () => {
  return (
    <div className="Team">
      <div className="Team-title">
        <h1>OUR TEAM</h1>
      </div>

      <div className="Team-desc">
        <div className="lead">
          <div className="image">
            <img src={dhruv} alt="dhruv"/>
          </div>
          <div className="name" >
            <h5>Dhruv Shetty</h5>
            <h6>Business Analyst & Core Developer</h6>
          </div>
        </div>
        <div className="lead">
          <div className="image">
            <img src={samarth} alt="samarth" />
          </div>
          <div className="name">
            <h5>Samarth Kashyap</h5>
            <h6>Business & Strategy</h6>
          </div>
        </div>
        <div className="lead">
          <div className="image">
            <img src={ayush} alt="ayush" />
          </div>
          <div className="name">
            <h5>Ayush Kiran</h5>
            <h6>Lead Designer</h6>
          </div>
        </div>
        <div className="lead">
          <div className="image">
            <img src={ankit} alt="ankit" />
          </div>
          <div className="name">
            <h5>Ankit Mallya</h5>
            <h6>Legal</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
