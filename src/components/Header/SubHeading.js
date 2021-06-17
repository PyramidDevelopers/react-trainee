import React from "react";
import "./SubHeading.css";

function SubHeading() {
  return (
    <div className="subheading-container">
      <div className="subheading">
        <section className="subheading-left">
          <p>
            a student community of <br />
            digital revolutionaries
          </p>
        </section>
        <section className="subheading-right">
          <p className="cta">
            GIVE US <br />
            A PROJECT <br /> &gt;&gt;&gt;
          </p>
          <p className="cta">
            BECOME A<br /> PART OF US <br /> &gt;&gt;&gt;
          </p>
        </section>
      </div>
    </div>
  );
}

export default SubHeading;
