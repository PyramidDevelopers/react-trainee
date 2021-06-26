import Boxes from '../../Boxes/Boxes';
import {CenterRightTop, CenterRightMiddle, CenterRightBottom} from '../../Items';
import './CenterRight.css';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const CenterRight = () => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const {key, color, changeKey} = context;
            const changeTheme = () => {
                changeKey();
                if(key+1===8){
                    document.documentElement.style.setProperty('--body-color',color[0]);
                }
                else{
                    document.documentElement.style.setProperty('--body-color',color[key+1]);
                }
                
            }

            return(
                <div className="front__centerRight">
                    <div className="centerRightTop front__flex">
                        {CenterRightTop.map((type, index)=>(
                            <Boxes type={type} key={index}/>
                        ))}
                    </div>
                    <div className="centerRightMiddle front__flex">
                        {CenterRightMiddle.map((type, index)=>(
                            <Boxes type={type} key={index}/>
                        ))}
                    </div>
                    <div className="center__amid front__flex">
                        <Boxes type='small-black-box' value='A'/>
                        <Boxes type='small-black-box' value='M'/>
                        <Boxes type='small-black-box' value='I'/>
                        <Boxes type='small-black-box' value='D'/>
                        <div 
                            className="small-black-box click-me-box" 
                            onClick={changeTheme}
                        >
                            <div className="texts">{'CLICK ME>'}</div>
                        </div>
                        <Boxes type='wide-black-box'/>
                    </div>
                    <div className="centerRightBottom front__flex">
                        {CenterRightBottom.map((type, index)=>(
                            <Boxes type={type} key={index}/>
                        ))}
                        <div className="texts">{'developers'}</div>
                    </div>
                </div>
            )
        }}
        </ThemeContext.Consumer>
    );
}

export default CenterRight;