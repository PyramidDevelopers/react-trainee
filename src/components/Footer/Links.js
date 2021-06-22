import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'

export default function Links() {
    return (
        <React.Fragment>
            <div className="links">
                <h1 className="title">USEFUL LINKS</h1>

                {/* <a className="about_text link" href="#">Who are we?</a>
                <br/>
                <br/>
                <a className="about_text" href="#">What do we do?</a>
                <br/>
                <br/>
                <a className="about_text" href="#">Show me what you got</a>
                <br/>
                <br/>
                <a className="about_text" href="#">Why choose us?</a>
                <br/>
                <br/>
                <a className="about_text" href="#">Our Team</a>
                <br/>
                <br/>
                <a className="about_text" href="#">Reach Us</a>
                <br/>
                <br/>
                <a className="about_text" href="#">Looking to work?</a> */}
                <div>
                    <Link to="#" duration={1000} smooth={true}>
                        <p className="link_name">Who are we?</p>
                    </Link>

                    <Link to="#" duration={1000} smooth={true}>
                        <p className="link_name">What do we do?</p>
                    </Link>

                    <Link to="#" duration={1000} smooth={true}>
                        <p className="link_name">Show me what you got</p>
                    </Link>

                    <Link to="#" duration={1000} smooth={true}>
                        <p className="link_name">Why choose us</p>
                    </Link>

                    <Link to="#" duration={1000} smooth={true} >
                        <p className="link_name">Our Team</p>
                    </Link>

                    <Link to="#" duration={1000} smooth={true} >
                        <p className="link_name">Reach Us</p>
                    </Link>

                    <Link to="#" duration={1000} smooth={true}>
                        <p className="link_name">Looking to work?</p>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}
