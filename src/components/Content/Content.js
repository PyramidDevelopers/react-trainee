import "./Content.css";

const Content = ({title, para1, para2}) => {
    return (
        <div className="content">
            <div className="content--title">
                <div className="content--titletext">
                    {title}
                </div>
                <div className="content--question">
                    ?
                </div>
            </div>
            <div className="content--para">
                <div className="content--para1">
                    {para1}
                </div>
                <div className="content--para2">
                    {para2}
                </div>
            </div>
        </div>
    );
}

export default Content;