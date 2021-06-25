import React from "react";
import "./Who.css";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import img1 from "../../assets/who-upper.png";
import img2 from "../../assets/who-lower.png";
import img3 from "../../assets/who-right.png";

const Who = () => {
  return (
    <div className="who">
      <div className="who-col1">
        <div className="content">
          <div className="text">
            <div className="title">
              <div className="subtitle">
                <p>WHO ARE WE</p>
              </div>
              <div className="qmark">
                <p>?</p>
              </div>
            </div>

            <div>
              <div className="p1">
                <p>
                  Simply put, college students looking to make it big. <br />
                  We develop apps, make website, design interfaces, <br />
                  create backend architecture and much more.
                </p>
              </div>

              <div className="p2">
                <p>
                  We may still be in college but we bring a vast <br />
                  skillset to the table. We have made comprehensive <br />
                  and quality digital products for numerous clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="who-col2">
        <div className="image-col1">
          <div className="img1">
            <img src={img1} alt="img1" />
          </div>
          <div className="img2">
            <img src={img2} alt="img2" />
          </div>
        </div>

        <div className="image-col2">
          <div className="social">
            <div className="contact-icon">
              <a
                href="https://www.linkedin.com/company/pyramid-developers/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn style={{ color: "black" }} />
              </a>
            </div>
            <div className="contact-icon">
              <a
                href="http://www.instagram.com/pyramid_developers"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram style={{ color: "black" }} />
              </a>
            </div>
            <div className="contact-icon">
              <a
                href="https://www.facebook.com/PyramidDeveloper"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook style={{ color: "black" }} />
              </a>
            </div>
          </div>
          <img className="img3" src={img3} alt="img3" />
        </div>
      </div>
    </div>
  );
};

export default Who;
