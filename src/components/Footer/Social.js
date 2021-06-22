import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import './Footer.css'

export default function Social() {
    return (
        <React.Fragment>
            <div className="stayconnected">
                <h1 className="stay_title">STAY CONNECTED</h1>
                <div className="stay_links">
                    <p className="social_info">
                        Address: No.1, Vibha, Bhadrappa Layout
                        <br />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nagashettihalli,
                        Bangalore - 560094
                        <br />
                    </p>
                    <p className="social_info">
                        Phone: 9845309776
                        <br />
                        Email: developpyramid@gmail.com
                    </p>
                </div>
                <div className="platforms">
                    <a href = "https://www.linkedin.com/company/pyramid-developers/">
                        <LinkedInIcon style = {{color:"black", fontSize: "4.688rem"}} />
                    </a>
                    <a href = "http://www.instagram.com/pyramid_developers">
                        <InstagramIcon style = {{color:"black", fontSize: "4.688rem"}} />
                    </a>
                    <a href = "https://www.facebook.com/PyramidDeveloper">
                        <FacebookIcon style = {{color:"black", fontSize: "4.688rem"}} />
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}
