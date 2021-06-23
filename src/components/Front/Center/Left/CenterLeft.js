import {CenterLeftTop, CenterLeftMiddle, CenterLeftBottom} from '../../Items';
import './CenterLeft.css';
import Boxes from '../../Boxes/Boxes';
import Logo from "../../../../assets/Group-8.svg";

const CenterLeft = () => {
    return (
        <div className="front__centerLeft">
            <div className="centerLeftTop front__flex">
                {CenterLeftTop.map((type, index)=>(
                    <Boxes type={type} key={index}/>
                ))}
            </div>
            <div className="centerLeftMiddle front__flex">
                {CenterLeftMiddle.map((type, index)=>(
                    <Boxes type={type} key={index}/>
                ))}
            </div>
            <div className="center__lpy front__flex">
                <div className='boxes small-black-box'>
                    <div className="image">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <Boxes type='small-black-box' value='P'/>
                <Boxes type='small-black-box' value='Y'/>
            </div>
            <div className="centerLeftBottom front__flex">
                {CenterLeftBottom.map((type, index)=>(
                    <Boxes type={type} key={index}/>
                ))}
            </div>
        </div>
    );
}
 
export default CenterLeft;