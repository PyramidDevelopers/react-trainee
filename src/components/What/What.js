import React from "react";
import "./What.css";
import UpperImage from "../../assets/what-upper.png";
import LowerImage from "../../assets/what-lower.png";
import LeftImage from "../../assets/what-left.png";

function What() {
  return (
    <div className="container center">
      <div className="what-container">
        <section className="what-left">
          <div className="what-images">
            <div className="what-upper-image">
              <img src={UpperImage} alt="A Boy Sitting with his Laptop" />
            </div>
            <div className="what-left-image">
              <img src={LeftImage} alt="A Person Designing" />
            </div>
            <div className="what-lower-image">
              <img src={LowerImage} alt="A Laptop Screen" />
            </div>
          </div>
        </section>
        <section className="what-right">
          <div className="what-title">
            <h2>
              WHAT DO WE DO <span className="question-mark">?</span>
            </h2>
            <p className="what-info">
              We make highly customised mobile applications which are <br />
              very efficient and scalable at low cost.
            </p>
            <p className="what-info colorless">
              We use Flutter for our front end which is the latest <br />
              framework by Google and Firebase for our backend <br />
              which is one of the world's leading Backend services <br />
              used by companies like Alibaba, Accenture and Twitch.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default What;
