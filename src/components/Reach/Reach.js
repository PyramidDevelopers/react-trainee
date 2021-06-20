import "./Reach.css";
import Form from "./Form";

const Reach = () => {
    const texts = ["Your Name", "Your Email ID", "Your Phone No"];
    const textAreas = ["Your Query"];
    return (
        <div className="reach" id="sixth">
            <div className="reach__title">
                <p>REACH US</p>
            </div>
            <div className="reach__content">
                <div className="reach__left">
                    <div className="left__title">
                        <p>{"Our eagerness to work with you will reflect in our promptness when you contact us. Do not hesitate to ask us anything :)"}</p>
                    </div>
                    <div className="left__form">
                        <Form texts={texts} textAreas={textAreas}/>
                    </div>
                </div>
                <div className="reach__right">
                    <div className="right__top">
                        <div className="top__left">
                            <p className="top__lefttitle">{'Looking to work with us? >>>'}</p>
                            <p className="top__leftbody">{'Join us to take part in exciting projects and gain experience along with the student community, and unlock amazing new prospects.'}</p>
                        </div>
                        <div className="small-black-box first__box"></div>
                        <div className="small-black-box second__box"></div>
                    </div>
                    <div className="right__bottom">
                        <div className="right__bottominfo">
                            <div className="right__bottomicon">
                                <i className="far fa-envelope"></i>
                                <div className="right__iconname">MAIL</div>
                            </div>
                            <div className="right__bottomname">
                                <p>developpyramid@gmail.com</p>
                            </div>
                        </div>
                        <div className="right__bottominfo">
                            <div className="right__bottomicon">
                                <i className="fas fa-phone-alt"></i>
                                <div className="right__iconname">PHONE</div>
                            </div>
                            <div className="right__bottomname">
                                <p>9845309776</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reach;