import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Contact.css";
import Form from "./Form";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

function Contact() {
  const { count } = useContext(ThemeContext);
  return (
    <div className="container center" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h2>REACH US</h2>
        </div>
        <div className="contact-flex">
          <section className="contact-left">
            <p className={`contact-desc theme-${count}-color`}>
              Our eagerness to work with you will reflect in our
              <br />
              promptness when you contact us. Do not hesitate to
              <br />
              ask us anything :)
            </p>
            <div className="contact-form">
              <Form />
            </div>
          </section>
          <section className="contact-right">
            <div className="contact-job">
              <div className="contact-job-link">
                <a
                  target="_blank"
                  href="https://bit.ly/PyramidDevelopersRecruitment"
                  rel="noreferrer"
                  className={`theme-${count}-color`}
                >
                  Looking to work with us? &gt;&gt;&gt;
                </a>
                <p className="contact-job-desc colorless">
                  Join us to take part in exciting projects
                  <br />
                  and gain experience along with the student
                  <br />
                  community, and unlock amazing new prospects.
                </p>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-mail">
                <div
                  className={`contact-mail-icon contact-icon-background theme-${count}-background`}
                >
                  <MailOutlineIcon style={{ fontSize: 40 }} />
                  <br />
                  <span>MAIL</span>
                </div>
                <div>
                  <a
                    href="mailto:developpyramid@gmail.com"
                    className={`contact-mail-address contact-address-background theme-${count}-color`}
                  >
                    developpyramid@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-phone">
                <div
                  className={`contact-phone-icon contact-icon-background theme-${count}-background`}
                >
                  <PhoneIcon style={{ fontSize: 40 }} />
                  <br />
                  <span>PHONE</span>
                </div>
                <div>
                  <p
                    className={`contact-phone-number contact-address-background theme-${count}-color`}
                  >
                    9845309776
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
