import React from "react";
import "./Why.css";
import WhyLeftImage from "../../assets/choose-left.png";
import WhyRightImage from "../../assets/choose-right.png";

function Why() {
  return (
    <div className="container center">
      <div className="why-container">
        <section className="why-left">
          <h2 className="why-title">
            WHY CHOOSE US <span className="question-mark">?</span>
          </h2>
          <p className="why-info">
            Our main focus is quality. We will give you the best <br /> looking,
            most user friendly products with a firm code <br /> base, for the
            right price.
          </p>
          <p className="why-info colorless">
            If you partner with Pyramid, We will ensure that you <br /> receive
            an end product that exceeds expectations. <br /> We follow Agile
            Development practices to ensure we <br /> fulfil our promises.
          </p>
        </section>
        <section className="why-right">
          <div className="why-images">
            <img
              src={WhyLeftImage}
              alt="People working on their Laptops"
              className="why-left-image"
            />
            <img
              src={WhyRightImage}
              alt="A boy coding in his hoodie"
              className="why-right-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Why;
