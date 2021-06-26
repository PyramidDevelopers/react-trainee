import "./Images.css";

const Images = ({title, url, desig}) => {
    return (
        <div className="images">
            <img src={url} alt=""/>
            <div className="images__title">{title}</div>
            <div className="images__desig">{desig}</div>
        </div>
    );
}

export default Images;