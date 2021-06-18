import Content from "../Content/Content";
import "./About.css";
import upper from "../../assets/who-upper.png";
import lower from "../../assets/who-lower.png";
import right from "../../assets/who-right.png"

const About = () => {
    const para1 = "Simply put, college students looking to make it big. We develop apps, make website, design interfaces, create backend architecture and much more.";

    const para2 = "We may still be in college but we bring a vast skillset to the table. We have made comprehensive and quality digital products for numerous clients.";
    
    const title = "WHO ARE WE";


    return (
        <div className="about">
            <div className="about--para">
                <Content title={title} para1={para1} para2={para2}/>
            </div>
            <div className="about--images">
                <div className="about--block">
                    <div className="small-black-box">
                    </div>
                </div>
                <div className="about--imgleft">
                    <div>
                        <img src={upper} alt="" className="img__upperlower"/>
                    </div>
                    <div>
                        <img src={lower} alt="" className="img__upperlower"/>
                    </div>
                </div>
                <div className="about--imgRight">
                    <div className="logos">
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
                    <div className="img">
                        <img src={right} alt="" className="img__right"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;