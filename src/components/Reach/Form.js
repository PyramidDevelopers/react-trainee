import "./Form.css";

const Form = ({texts, textAreas}) => {
    return (
        <div className="form">
            <form onSubmit={e=>e.preventDefault()}>
                <div className="form__overall">
                    <div className="form__left">
                        <div className="form__text">
                            <div className="text__input">
                                {texts.map((text, index)=>(
                                    <div className="textbox" key={index}>
                                        <label>{text}</label>
                                        <input required type="text"/>
                                    </div>
                                ))}
                            </div>
                            <div className="text__area">
                                {textAreas.map((textArea, index)=>(
                                    <div className="textarea" key={index}>
                                        <label>{textArea}</label>
                                        <textarea required cols="30" rows="10"></textarea>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="form__right">
                        <div className="small-black-box"></div>
                        <div className="form__button">
                            <button><div><i className="fas fa-greater-than"></i>SUBMIT</div></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default Form;