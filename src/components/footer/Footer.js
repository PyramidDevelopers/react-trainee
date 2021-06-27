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
            <div className="footer-logo-container">
                <img src = {logoImage} className = "footer-logo" alt = "" />
                <p className="footer-click-me">CLICK ME></p>
            </div>
            <div className="footer-about-us-container">
                <div className="footer-headings">ABOUT US</div>
                <div className="footer-text">{aboutUsText}</div>
            </div>
            <div className="footer-useful-links-container">
                <div className="footer-headings">USEFUL LINKS</div>
                <div className="footer-text">Who are we?</div>
                <div className="footer-text">What do we do?</div>
                <div className="footer-text">Show me what you got</div>
                <div className="footer-text">Why choose us?</div>
                <div className="footer-text">Our Team</div>
                <div className="footer-text">Reach Us</div>
                <div className="footer-text">Looking to work?</div>
            </div>
            <div className="footer-stay-connected-container">
                <div className="footer-headings">STAY CONNECTED</div>
                <div className="footer-text">{addressLine1}</div>
                <pre className="footer-text">{addressLine2}</pre>
                <div className="footer-text">{phoneText}</div>
                <div className="footer-text">{emailText}</div>
                <div className="footer-icons-container">
                    <LinkedInIcon style={{ fontSize: 55 }} className="footer-icon" />
                    <InstagramIcon style={{ fontSize: 55 }} className="footer-icon" />
                    <FacebookIcon style={{ fontSize: 55 }} className="footer-icon" />
                </div>
            </div>
        </div>
    )
}
