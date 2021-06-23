import React from "react";
import "./Showcase.css";
import nutrifamily from "../../assets/nutri-family.png";
import nearvibe from "../../assets/near-vibe.png";
import vitalminds from "../../assets/vital-minds.png";
import enermanapp from "../../assets/enerman-app.png";
import takeyourtrip from "../../assets/take-your-trip.png";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase-title">
        <div className="title-text">
          <h1>SHOW ME WHAT YOU GOT</h1>
        </div>
      </div>
      <div className="main">
        <div className="left-tile">
          <div className="col1">
            <div className="col1-text">
              <div className="content">
                <p>ONGOING</p>
              </div>
              <h4>Nutri.family</h4>
              <h5>
                An innovative health-tech platform <br />
                where families get healthier, together!
              </h5>
            </div>
            <div className="col1-image">
              <img src={nutrifamily} alt="" />
            </div>
          </div>
          <div className="col1">
            <div className="col1-text">
              <div className="content">
                <p>ONGOING</p>
              </div>
              <h4>NearVibe</h4>
              <h5>
                A platform to share, react & discover <br />
                how people are feeling in your area
              </h5>
            </div>
            <div className="col1-image">
              <img src={nearvibe} alt="" />
            </div>
          </div>
        </div>
        <div className="right-tile">
          <div className="col2">
            <div className="col2-text">
              <div className="content">
                <p>ONGOING</p>
              </div>
              <h4>VitalMinds</h4>
              <h5>
                Personal mental health <br />
                assistant
              </h5>
            </div>
            <div className="col2-image">
              <img src={vitalminds} alt="" />
            </div>
          </div>
          <div className="col2">
            <div className="col2-text">
              <h4>Enerman App</h4>
              <h5>
                Solar Panel information
                <br />
                dashboard
              </h5>
            </div>
            <div className="col2-image">
              <img src={enermanapp} alt="" />
            </div>
          </div>
          <div className="col2">
            <div className="col2-text">
              <h4>TakeYourTrip</h4>
              <h5>A travel booking app</h5>
            </div>
            <div className="col2-image">
              <img src={takeyourtrip} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
