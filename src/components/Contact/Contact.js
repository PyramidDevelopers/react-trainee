import React from "react";
import "./Contact.css";
import Form from "./Form";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

function Contact() {
  return (
    <div className="container center">
      <div className="contact-container">
        <div className="contact-title">
          <h2>REACH US</h2>
        </div>
        <div className="contact-flex">
          <section className="contact-left">
            <p className="contact-desc">
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
              <div className="contact-mail-icon contact-icon-background">
                <MailOutlineIcon style={{ fontSize: 40 }} />
                <br />
                <span>MAIL</span>
              </div>
              <div>
                <a
                  href="mailto:developpyramid@gmail.com"
                  className="contact-mail-address contact-address-background"
                >
                  developpyramid@gmail.com
                </a>
              </div>
              <div className="contact-phone-icon contact-icon-background">
                <PhoneIcon style={{ fontSize: 40 }} />
                <br />
                <span>PHONE</span>
              </div>
              <div>
                <span className="contact-phone-number contact-address-background">
                  9845309776
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
