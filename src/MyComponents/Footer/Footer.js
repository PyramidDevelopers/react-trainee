import React from 'react'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Instagram from '@material-ui/icons/Instagram'
import Facebook from '@material-ui/icons/Facebook'
import './Footer.css'
import main from '../../assets/Group-8.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-button">
                <div className="button-content">
                    <button>
                        <img src={main} />
                        <p>CLICK <br/>ME&gt;</p>
                    </button>
                </div>
            </div>
            <div className="footer-comp1">
                <div className="footer-about">
                    <h1 className="about-title">ABOUT US</h1>
                    <p className="about-content">
                    Pyramid Developers are a student based community of problem solvers, specializing in providing end-to-end solutions to you. Our team can help you fulfill your digital requirements such as Android and iOS applications and websites.
                    </p>
                </div>
                <div className="footer-comp2">
                    <div className="footer-nav">
                        <h1 className="nav-title">USEFUL LINKS</h1>
                        <div>
                                <p>Who are we?</p>
                                <p>What do we do?</p>
                                <p>Show me what you got</p>
                                <p>Why choose us</p>
                                <p>Our Team</p>
                                <p>Reach Us</p>
                                <p>Looking to work?</p>
                        </div>
                    </div>
                    <div className="footer-comp3">
                        <h1 className="connect-title">STAY CONNECTED</h1>
                        <div>
                        <p className="connect-content">
                            Address: No.1, Vibha, Bhadrappa Layout <br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nagashettihalli,
                            Bangalore - 560094 <br />
                        </p>
                        <p className="connect-content">    
                            Phone: 9845309776 <br />
                            Email: developpyramid@gmail.com
                        </p>
                        </div>
                        <div className="social-icons">
                        <a href="https://www.linkedin.com/company/pyramid-developers/" target="_blank">
                            <LinkedIn style={{ color: "black" }} />
                        </a>
                        <a href="http://www.instagram.com/pyramid_developers" target="_blank">
                            <Instagram style={{ color: "black" }} />
                        </a>
                        <a href="https://www.facebook.com/PyramidDeveloper" target="_blank">
                            <Facebook style={{ color: "black" }} />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
