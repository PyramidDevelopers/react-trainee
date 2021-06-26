import Left from "../../assets/what-left.png";
import Lower from "../../assets/what-lower.png";
import Upper from "../../assets/what-upper.png";
import Content from "../Content/Content";
import "./What.css";

const What = () => {
    const para1 = `We make highly customised mobile applications which are \n very efficient and scalable at low cost.`;

    const para2 = `We use Flutter for our front end which is the latest \n framework by Google and Firebase for our backend which \n is one of the world's leading Backend services used by \n companies like Alibaba, Accenture and Twitch.`;

    const title = "WHAT DO WE DO";

    return (
        <div className="what" id="second">
            <div className="what__left">
                <div className="upper__left">
                    <div className="boxes">
                        <div className="wide-black-box mobile"></div>
                        <div className="small-black-box mobile"></div>
                    </div>
                    <div className="what__image">
                        <div className="what__leftimg">
                            <div className="small-black-box what__leftbox mobile"></div>
                            <div className="image-left">
                                <img src={Left} alt=""/>
                            </div>
                        </div>
                        <div className="what___boxes">
                            <div className="small-black-box"></div>
                            <div className="small-black-box"></div>
                            <div className="small-black-box"></div>
                        </div>
                        <div className="what__rightimg">
                            <div className="top__right">
                                <img src={Upper} alt=""/>
                                <div className="right__small__box">
                                    <div className="small-black-box mobile"></div>
                                </div>
                            </div>
                            <img src={Lower} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="wide-black-box mobile"></div>
            </div>
            <div className="what__content">
                <Content title={title} para1={para1} para2={para2}/>
            </div>
        </div>
    );
}

export default What;