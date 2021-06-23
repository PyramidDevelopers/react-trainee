import CenterLeft from "./Left/CenterLeft";
import CenterMiddle from "./Middle/CenterMiddle";
import CenterRight from "./Right/CenterRight";
import Boxes from '../Boxes/Boxes';
import './Center.css';

const Center = () => {
    return (
        <div className="centerMain">
            <div className="front__flex">
                <div className="center__left">
                    <CenterLeft/>
                </div>
                <div className="center__middle">
                    <CenterMiddle/>
                </div>
                <div className="center__right">
                    <CenterRight/>
                </div>
            </div>
            <div className="center__bottom front__flex">
                <div className="texts">
                    a student community of <br/>digital revolutionaries
                </div>
                <Boxes type='small-black-box'/>
                <a 
                    className="wide-black-box front-bottom-click" 
                    href="#sixth"
                >
                    <div className="texts">
                        GIVE US <br/>A PROJECT<br/>{'>>>'}
                    </div>
                </a>
                <div 
                    className="wide-black-box front-bottom-click" 
                    onClick={()=>alert("Pyramid Developers in development")}
                >
                    <div className="texts">
                        BECOME A <br/>PART OF US<br/>{'>>>'}
                    </div>
                </div>
                <Boxes type='small-black-box'/>
            </div>
        </div>
    );
}
 
export default Center;