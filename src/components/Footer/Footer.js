import "./Footer.css";
import Logo0 from "../../assets/Group-0.svg";
import Logo1 from "../../assets/Group-1.svg";
import Logo2 from "../../assets/Group-2.svg";
import Logo3 from "../../assets/Group-3.svg";
import Logo4 from "../../assets/Group-4.svg";
import Logo5 from "../../assets/Group-5.svg";
import Logo6 from "../../assets/Group-6.svg";
import Logo7 from "../../assets/Group-7.svg";
import { ThemeContext } from "../../contexts/ThemeContext";


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
        <ThemeContext.Consumer>{(context) => {
            const {key, color, changeKey} = context;
            let image = Logo0;
            switch(key){
                case 0:
                    image = Logo0;
                    break;
                case 1:
                    image = Logo1;
                    break;
                case 2:
                    image = Logo2;
                    break;
                case 3:
                    image = Logo3;
                    break;
                case 4:
                    image = Logo4;
                    break;
                case 5:
                    image = Logo5;
                    break;
                case 6:
                    image = Logo6;
                    break;
                case 7:
                    image = Logo7;
                    break;
                default:
                    image = Logo0;
            }
            const changeTheme = () => {
                changeKey();
                if(key+1==8){
                    document.documentElement.style.setProperty('--body-color',color[0]);
                }
                else{
                    document.documentElement.style.setProperty('--body-color',color[key+1]);
                }
                
            }
            return(
                <div className="footer">
                    <div className="footer__inside">
                        <div className="footer__logo" onClick={changeTheme}>
                            <div className="long-black-box">
                                <div className="logo__logo">
                                    <img src={image} alt=""/>
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
            )
        }}
        </ThemeContext.Consumer>
    );
}

export default Footer;