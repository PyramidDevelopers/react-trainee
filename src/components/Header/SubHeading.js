import React from "react";
import "./SubHeading.css";
import { Link } from "react-scroll";

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
          <Link activeClass="active" to="contact" smooth={true} duration={1000}>
            <p className="cta">
              GIVE US <br />
              A PROJECT <br /> &gt;&gt;&gt;
            </p>
          </Link>
          <p className="cta">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bit.ly/PyramidDevelopersRecruitment"
            >
              BECOME A<br /> PART OF US <br /> &gt;&gt;&gt;
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default SubHeading;
