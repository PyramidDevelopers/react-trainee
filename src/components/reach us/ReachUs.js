import React from 'react'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import './ReachUs.css'

export const ReachUs = () => {
    let message = "Our eagerness to work with you will reflect in our promptness when you contact us. Do not hesitate to ask us anything :)"
    let joinUsText = "Join us to take part in exciting projects and gain experience along with the student community, and unlock amazing new prospects."
    let reachUsEmail = "developpyramid@gmail.com";
    let reachUsPhone = "9845309776";

    return (
        <div className="reach-us-section">
            <div className="form-container">
                <div className="reach-us-message">{message}</div>
                <div className="form-input-container">
                    <p className="form-input-text">Your Name</p>
                    <input type="text" id="name" required className="input" />
                </div>
                <div className="form-input-container">
                    <p className="form-input-text">Your Email Id</p>
                    <input type="text" id="emailId" required className="input" />
                </div>
                <div className="form-input-container">
                    <p className="form-input-text">Your Phone No</p>
                    <input type="text" id="phoneNo" required className="input" />
                </div>
                <div className="form-textarea-input-container">
                    <p className="form-input-text">Your Query</p>
                    <textarea type="text" id="query" rows="5" cols="35" required className="input" />
                </div>
            </div>
            <div className="form-submit-container">
                <div className="reach-us-vertical-rect" />
                <div className="reach-us-vertical-big-rect">
                    <KeyboardReturnIcon style={{ fontSize: 50 }} className="arrow-icon" />
                    <p className="reach-us-rect-text">SUBMIT</p>
                </div>
            </div>
            <div className="reach-us-right-container">
                <div className="reach-us-right-upper">
                    <div className="looking-to-work-container">
                        <p className="work-with-us-ques">Looking to work with us? >>></p>
                        <div className="work-with-us-message">{joinUsText}</div>
                    </div>
                    <div className="reach-us-vertical-rect" />
                </div>
                <div className="reach-us-below-email-section">
                    <div className="reach-us-logo-rect">
                        <MailOutlineIcon style={{ fontSize: 50 }} className="reach-us-icon" />
                        <p className="reach-us-rect-text">MAIL</p>
                    </div>
                    <div className="reach-us-phone-email">
                        <p className="reach-us-phone-email-text">{reachUsEmail}</p>
                    </div>
                </div>
                <div className="reach-us-below-phone-section">
                    <div className="reach-us-logo-rect">
                        <PhoneOutlinedIcon style={{ fontSize: 50 }} className="reach-us-icon" />
                        <p className="reach-us-rect-text">PHONE</p>
                    </div>
                    <div className="reach-us-phone-email">
                        <p className="reach-us-phone-email-text">{reachUsPhone}</p>
                    </div>
                </div>
            </div>
            <div className="reach-us-end-section">
                <div className="reach-us-vertical-dark-rect" />
                <div className="reach-us-vertical-rect" />
            </div>
        </div>
    )
}
