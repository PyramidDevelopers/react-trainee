import "./Footer.css";
import Logo from "../../assets/Group-8.svg";

const Footer = () => {
    const footer_links = [
        {title: "Who are we?", link: "#first"},
        {title: "What do we do?", link: "#second"},
        {title: "Show me what you got", link: "#"},
        {title: "Why choose us?", link: "#fourth"},
        {title: "Our Team", link: "#fifth"},
        {title: "Reach Us", link: "#sixth"},
        {title: "Looking to work?", link: "#sixth"}
    ]
    return (
        <div className="footer">
            <div className="footer__inside">
                <div className="footer__logo">
                    <div className="long-black-box">
                        <div className="logo__logo">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="logo__click">
                            {'CLICK ME>'}
                        </div>
                    </div>
                </div>
                <div className="footer__contents">
                    <div className="footer__main footer__first">
                        <div className="footer__title">
                            ABOUT US
                        </div>
                        <div className="footer__body">
                            Pyramid Developers are a student based community of problem solvers, specializing in providing end-to-end solutions to you. Our team can help you fulfill your digital requirements such as Android and iOS applications and websites.
                        </div>
                    </div>
                    <div className="footer__main footer__links">
                        <div className="footer__title">
                            USEFUL LINKS
                        </div>
                        <div className="middle__links footer__body">
                            {footer_links.map((link, index)=>(
                                <a href={link.link} key={index}>{link.title}</a>
                            ))}
                        </div>
                    </div>
                    <div className="footer__main footer__connected">
                        <div className="footer__title">
                            STAY CONNECTED
                        </div>
                        <div className="footer__body">
                            <div className="address">
                                <div className="address__first">
                                    {"Address: "}
                                </div>
                                <div className="address__second">
                                {" "}No.1, Vibha, Bhadrappa Layout <br/>Nagashettihalli, Bangalore - 560094
                                </div>
                            </div>
                            <br/><br/>
                            Phone: 9845309776<br/><br/>
                            Email: developpyramid@gmail.com
                        </div>
                        <div className="footer__social">
                            <div className="logos__logo">
                                <a href="https://www.linkedin.com/company/pyramid-developers/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            </div>
                            <div className="logos__logo">
                                <a href="http://www.instagram.com/pyramid_developers" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="logos__logo">
                                <a href="https://www.facebook.com/PyramidDeveloper" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;