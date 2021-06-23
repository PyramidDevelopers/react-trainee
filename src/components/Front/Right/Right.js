import Boxes from "../Boxes/Boxes";
import { RightBlocks } from "../Items";


const Right = () => {
    return (
        <div className="front__right">
            {RightBlocks.map((type, index)=>(
                <Boxes type={type} key={index}/>
            ))}
        </div>
    );
}

export default Right;