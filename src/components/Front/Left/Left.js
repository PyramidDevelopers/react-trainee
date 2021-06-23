import { LeftBottom, LeftTop, LeftMiddle } from "../Items";
import Boxes from '../Boxes/Boxes';
import './Left.css';
const Left = () => {
    return (
        <div className="front__left">
            <div className="left__top front__flex">
                {LeftTop.map((type, index)=>(
                    <Boxes type={type} key={index}/>
                ))}
            </div>
            <div className="left__middle front__flex">
                {LeftMiddle.map((type, index)=>(
                    <Boxes type={type} key={index}/>
                ))}
            </div>
            <div className="left__bottom front__flex">
                {LeftBottom.map((type, index)=>(
                    <Boxes type={type} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default Left;