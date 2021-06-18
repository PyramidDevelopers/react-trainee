import React from "react";
import "./ShowMe.css";
import NutriFamily from "Assets/Images/nutri-family.png";
import NearVibe from "Assets/Images/near-vibe.png";
import VitalMinds from "Assets/Images/vital-minds.png";
import EnermanApp from "Assets/Images/enerman-app.png";
import TakeYourTrip from "Assets/Images/take-your-trip.png";
const ShowMe = () => {
  return (
    <>
      <h2> Show Me What You Got</h2>
      <div className="ShowMeContainer">
        <div className="ShowMeLeft">
          <div className="ShowMeLeftBox">
            <div className="ShowMeLeftBoxLeft">
              <h3>Nutri-Family</h3>
              <span>
                An innovative health-tech platform where families get healthier,
                together!
              </span>
            </div>
            <img src={NutriFamily} alt="Nutri Family App " />
          </div>
          <div>
            <div className="ShowMeLeftBox">
              <div className="ShowMeLeftBoxLeft">
                <h3>NearVibe</h3>
                <span>
                  A platform to share, react & discover how people are feeling
                  in your area
                </span>
              </div>

              <img src={NearVibe} alt="NearVibe App" />
            </div>
          </div>
        </div>

        <div className="ShowMeRight">
          <div className="ShowMeRightBox">
            <div className="ShowMeRightBoxLeft">
              <h3>VitalMinds</h3>
              <span>Personal mental health assistant</span>
            </div>
            <img src={VitalMinds} alt="Vitamin Minds" />
          </div>

          <div className="ShowMeRightBox">
            <div className="ShowMeRightBoxLeft">
              <h3>Enerman App</h3>
              <span>Solar Panel information dashboard</span>
            </div>
            <img src={EnermanApp} alt="Enerman App" />
          </div>

          <div className="ShowMeRightBox">
            <div className="ShowMeRightBoxLeft">
              <h3>TakeYourTrip</h3>
              <span>A travel booking app</span>
            </div>
            <img src={TakeYourTrip} alt="Take Your Trip App" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowMe;
