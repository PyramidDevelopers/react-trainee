import Boxes from '../../Boxes/Boxes';

const CenterMiddle = () => {
    return (
        <div className="front__centerMiddle">
            <div className="centerMiddleTop">
                <Boxes type='long-black-box'/>
            </div>
            <div className="center__r">
                <Boxes type='small-black-box' value='R'/>
            </div>
        </div>
    );
}

export default CenterMiddle;