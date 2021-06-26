import './Front.css';
import Left from './Left/Left';
import Center from './Center/Center';
import Right from './Right/Right';

const Front = () => {
    return (
        <div className="front">
            <div className="front__content front__flex">
                <Left/>
                <Center/>
                <Right/>
            </div>
        </div>
    );
}

export default Front;