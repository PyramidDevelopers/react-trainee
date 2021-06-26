import {CenterLeftTop, CenterLeftMiddle, CenterLeftBottom} from '../../Items';
import './CenterLeft.css';
import Boxes from '../../Boxes/Boxes';
import Logo0 from "../../../../assets/Group-0.svg";
import Logo1 from "../../../../assets/Group-1.svg";
import Logo2 from "../../../../assets/Group-2.svg";
import Logo3 from "../../../../assets/Group-3.svg";
import Logo4 from "../../../../assets/Group-4.svg";
import Logo5 from "../../../../assets/Group-5.svg";
import Logo6 from "../../../../assets/Group-6.svg";
import Logo7 from "../../../../assets/Group-7.svg";
import { ThemeContext } from '../../../../contexts/ThemeContext';

const CenterLeft = () => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const {key} = context;
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
            return(
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
                                <img src={image} alt=""/>
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
            )
        }}
        </ThemeContext.Consumer>
    );
}

export default CenterLeft;