import "./Why.css";
import Left from "../../assets/choose-left.png";
import Right from "../../assets/choose-right.png";
import Content from "../Content/Content";

const Why = () => {
    const title = "WHY CHOOSE US";
    const para1 = "Our main focus is quality. We will give you the best looking, most user friendly products with a firm code base, for the right price.";
    const para2 = "If you partner with Pyramid, We will ensure that you receive an end product that exceeds expectations. We follow Agile Development practices to ensure we fulfil our promises.";
    return (
        <div className="why" id="fourth">
            <div className="why__body">
                <Content title={title} para1={para1} para2={para2}/>
            </div>
            <div className="why__right">
                <div className="left">
                    <img src={Left} className="left__img" alt=""/>
                    <div className="wide-black-box"></div>
                </div>
                <div className="middle">
                    <div className="wide-black-box"></div>
                    <img src={Right} alt=""/>
                </div>
                <div className="right">
                    <div className="small-black-box"></div>
                    <div className="small-black-box"></div>
                    
                    <div className="small-black-box last__box"></div>
                </div>
                <div className="rightmost">
                    <div className="small-black-invisible-box"></div>
                    <div className="small-black-box"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Why;