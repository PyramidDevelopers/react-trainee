import React from 'react';
import {
	FaInstagram,
	FaLinkedin,
	FaFacebook
} from "react-icons/fa";
import "../StyleSheets/footer.css";

const footerComponent = (props) => {
    return (
		<div className="footer-main">
			<div className="footer-left">
				<div className="footer-btn">
					<button className="btn">
						<img />
						<p className='p-btn'>Click Me</p>
					</button>
				</div>
				<div className="about-us-main">
					<h1 className='about-us-head'>ABOUT US</h1>
					<p className='abt-us-p'>
						Pyramid Developers are a student based community of
						problem
						<br />
						solvers, specializing in providing end-to-end solutions.
						Our
						<br />
						team can help you fulfill your digital requirements such
						as <br />
						Android and iOS applications and websites.
					</p>
				</div>
			</div>
			<div className="footer-right">
				<div className="useful-links">
					<h1 className='useful-links-head'>USEFUL LINKS</h1>
					<div className="links">
						<a className="pointer" href="#">
							<p>WHO ARE WE?</p>
						</a>
						<a className="pointer" href="#">
							<p>WHO ARE WE?</p>
						</a>
						<a className="pointer" href="#">
							<p>WHO ARE WE?</p>
						</a>
						<a className="pointer" href="#">
							<p>WHO ARE WE?</p>
						</a>
						<a className="pointer" href="#">
							<p>WHO ARE WE?</p>
						</a>
						<a className="pointer" href="#">
							<p>WHO ARE WE?</p>
						</a>
						<a className="pointer" href="#">
							<p>WHO ARE WE?</p>
						</a>
                    </div>
                    </div>
					<div className="stay-connected-flex">
						<h1>STAY CONNECTED</h1>
						<p className='address'>
							Address: No.1, Vibha, Bhadrappa Layout
							<br />
							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
							&nbsp; Nagashettihalli, Bangalore - 560094
							<br />
						</p>
						<p>
							Phone: 9845309776
							<br />
							Email: developpyramid@gmail.com
                        </p>
                        <div className='social-meida-links'>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                            <FaFacebook></FaFacebook>
                        </div>
					</div>
				</div>
			</div>
	);
};

export default footerComponent;