import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { fontSize } from '@material-ui/system'
import logoImage from '../../assets/Group-8.svg'
import './Footer.css'

export const Footer = () => {
    let aboutUsText = "Pyramid Developers are a student based community of problem solvers, specializing in providing end-to-end solutions to you. Our team can help you fulfill your digital requirements such as Android and iOS applications and websites."
    let addressLine1 = "Address: No.1, Vibha, Bhadrappa Layout"
    let addressLine2 = "          Nagashettihalli, Bangalore - 560094"
    let phoneText = "Phone: 9845309776"
    let emailText = "Email: developpyramid@gmail.com"

    return (
        <div className="footer-section">
            <div>
                <button className="footer-logo-container">
                    <img src={logoImage} className="footer-logo" alt="" />
                    <p className="footer-click-me">CLICK ME></p>
                </button>
            </div>
            <div className="footer-about-us-container">
                <div className="footer-headings">ABOUT US</div>
                <div className="footer-text">{aboutUsText}</div>
            </div>
            <div className="footer-useful-links-container">
                <div className="footer-headings">USEFUL LINKS</div>
                <a href="#who" className="footer-links">
                    <div className="footer-text">Who are we?</div>
                </a>
                <a href="#what" className="footer-links">
                    <div className="footer-text">What do we do?</div>
                </a>
                <a className="footer-links">
                    <div className="footer-text">Show me what you got</div>
                </a>
                <a href="#why" className="footer-links">
                    <div className="footer-text">Why choose us?</div>
                </a>
                <a href="#team" className="footer-links">
                    <div className="footer-text">Our Team</div>
                </a>
                <a href="#reach" className="footer-links">
                    <div className="footer-text">Reach Us</div>
                </a>
                <a href="#reach" className="footer-links">
                    <div className="footer-text">Looking to work?</div>
                </a>
            </div>
            <div className="footer-stay-connected-container">
                <div className="footer-headings">STAY CONNECTED</div>
                <div className="footer-text">{addressLine1}</div>
                <pre className="footer-text">{addressLine2}</pre>
                <div className="footer-text">{phoneText}</div>
                <div className="footer-text">{emailText}</div>
                <div className="footer-icons-container">
                    <a href="https://www.linkedin.com/company/pyramid-developers/" target="_blank" rel="noreferrer">
                        <LinkedInIcon style={{ fontSize: 55 }} className="footer-icon" />
                    </a>
                    <a href="https://www.instagram.com/pyramid_developers/" target="_blank" rel="noreferrer">
                        <InstagramIcon style={{ fontSize: 55 }} className="footer-icon" />
                    </a>
                    <a href="https://www.facebook.com/PyramidDeveloper" target="_blank" rel="noreferrer">
                        <FacebookIcon style={{ fontSize: 55 }} className="footer-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}
