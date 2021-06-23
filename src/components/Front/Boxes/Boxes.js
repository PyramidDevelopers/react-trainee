import './Boxes.css';

const TYPE = [
    'small-black-box',
    'wide-black-box',
    'long-black-box',
    'small-black-invisible-box',
    'wide-black-invisible-box',
    'long-black-invisible-box'
]

const Boxes = ({type, value}) => {
    const finalClass = TYPE.includes(type) ? type : TYPE[0];
    
    return (
        <div className={`boxes ${finalClass} ${value?'textBox':''}`}>
            {value && <div className="texts">{value}</div>}
        </div>
    );
}

export default Boxes;