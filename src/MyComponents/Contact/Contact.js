import React from "react";
import "./Contact.css";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";

const Contact = () => {
  return (
    <div className="reachus">
      <div className="reachus-top">
        <h1 className="header">REACH US</h1>
      </div>
      <div className="reachus-bottom">
        <div className="col1">
          <div className="col1-text">
            <p>
              Our eagerness to work with you will reflect in our
              <br />
              promptness when you contact us. Do not hesitate to
              <br />
              ask us anything :)
            </p>
          </div>

          <form className="form">
            <div className="form-col1">
              <div className="input">
                <p>Your Name</p>
                <input required type="text" />
              </div>
              <div className="input">
                <p>Your Email ID</p>
                <input required type="text" />
              </div>
              <div className="input">
                <p>Your Phone No</p>
                <input required type="text" />
              </div>
              <div className="input input-textarea">
                <p>Your Query</p>
                <textarea className="textarea" type="text" required />
              </div>
            </div>

            <div className="col1">
                <button type="submit">
                  <KeyboardReturnIcon />
                  <p>SUBMIT</p>
                </button>
            </div>
          </form>
        </div>

        <div className="col2">
          <div className="col2-p1">
            <div className="left">
                <p className="col2-text1">
                  Looking to work with us? &gt;&gt;&gt;
                </p>

              <p className="col2-text2">
                Join us to take part in exciting projects <br />
                and gain experience along with the student <br />
                community, and unlock amazing new prospects.
              </p>
            </div>
          </div>
          <div className="col2-p2">
            <div className="contact">
              <div className="contact-icon">
                <MailOutlineIcon />
                <p>MAIL</p>
              </div>
              <div className="contact-text">
                <p>developpyramid@gmail.com</p>
              </div>
            </div>
            <div className="contact">
              <div className="contact-icon">
                <PhoneOutlinedIcon />
                <p>PHONE</p>
              </div>
              <div className="contact-text">
                <p>9845309776</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
