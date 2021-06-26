import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-scroll";
import { LinkedIn, Facebook, Instagram } from "@material-ui/icons";
import "./Footer.css";
import ClickMe from "./ClickMe";

function Footer() {
  const { count } = useContext(ThemeContext);
  return (
    <div className={`footer-background theme-${count}-background`}>
      <div className="container center footer-margin">
        <div className="footer-container">
          <ClickMe />
          <div className="footer-info">
            <div className="footer-aboutus">
              <h3 className="footer-aboutus-heading">ABOUT US</h3>
              <p className="footer-aboutus-info">
                Pyramid Developers are a student based community of problem
                solvers, specializing in providing end-to-end solutions to you.
                Our team can help you fulfill your digital requirements such as
                Android and iOS applications and websites.
              </p>
            </div>

            <div className="footer-links-connected">
              <div className="footer-links">
                <h3>USEFULL LINKS</h3>
                <Link
                  activeClass="active"
                  to="about"
                  smooth={true}
                  duration={1000}
                >
                  <p>Who are we?</p>
                </Link>
                <Link
                  activeClass="active"
                  to="what"
                  smooth={true}
                  duration={1000}
                >
                  <p>What do we do?</p>
                </Link>
                <Link
                  activeClass="active"
                  to="showcase"
                  smooth={true}
                  duration={1000}
                >
                  <p>Show me what you got</p>
                </Link>
                <Link
                  activeClass="active"
                  to="why"
                  smooth={true}
                  duration={1000}
                >
                  <p>Why choose us?</p>
                </Link>
                <Link
                  activeClass="active"
                  to="team"
                  smooth={true}
                  duration={1000}
                >
                  <p>Our Team</p>
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  smooth={true}
                  duration={1000}
                >
                  <p>Reach Us</p>
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  smooth={true}
                  duration={1000}
                >
                  <p>Looking to work?</p>
                </Link>
              </div>

              <div className="footer-stayconnected">
                <h3>STAY CONNECTED</h3>
                <p className="footer-address-text">
                  Address: No.1, Vibha, Bhadrappa Layout
                  <br /> Nagashettihalli, Bangalore - 560094
                </p>
                <p>Phone: 9845309776</p>
                <p>Email: developpyramid@gmail.com</p>
                <div className="footer-social-links">
                  <a
                    href="https://www.linkedin.com/company/pyramid-developers/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href="http://www.instagram.com/pyramid_developers/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.facebook.com/PyramidDeveloper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
