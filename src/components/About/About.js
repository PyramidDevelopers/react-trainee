import React from "react";
import "./About.css";
import UpperImage from "../../assets/who-upper.png";
import LowerImage from "../../assets/who-lower.png";
import RigthImage from "../../assets/who-right.png";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";

function About() {
  return (
    <div className="container center">
      <div className="about-container">
        <section className="about-left">
          <h2 className="about-title">
            WHO ARE WE <span className="question-mark">?</span>
          </h2>
          <p className="about-info">
            Simply put, college students looking to make it big.
            <br />
            We develop apps, make websites, design interfaces, <br />
            create backend architecture, and much more.
          </p>
          <p className="about-info colorless">
            We may still be in college but we bring a vast <br />
            skillset to the table. We have made comprehensive <br />
            and quality digital products for numerous clients.
          </p>
        </section>
        <section className="about-right">
          <div className="about-images">
            <img
              src={UpperImage}
              className="about-images-upper"
              alt="Boy Editing Code"
            />
            <img
              src={LowerImage}
              className="about-images-lower"
              alt="Boy Operating Laptop on Terrace"
            />
            <div className="about-social-media">
              <div className="about-linkedin-url">
                <a
                  href="https://www.linkedin.com/company/pyramid-developers/"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-default-background"
                >
                  <LinkedIn
                    className="about-social-icon"
                    style={{ fontSize: 40 }}
                  />
                </a>
              </div>
              <div className="about-instagram-url">
                <a
                  href="http://www.instagram.com/pyramid_developers/"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-default-background"
                >
                  <Instagram
                    className="about-social-icon"
                    style={{ fontSize: 40 }}
                  />
                </a>
              </div>
              <div className="about-facebook-url">
                <a
                  href="https://www.facebook.com/PyramidDeveloper"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-default-background"
                >
                  <Facebook
                    className="about-social-icon"
                    style={{ fontSize: 40 }}
                  />
                </a>
              </div>
            </div>
            <img
              src={RigthImage}
              className="about-images-right"
              alt="Code Editor Screen"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
