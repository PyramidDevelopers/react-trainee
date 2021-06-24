<<<<<<< HEAD
import React from "react";
import "./What.css";
import LeftImage from "../../assets/what-left.png";
import UpperImage from "../../assets/what-upper.png";
import LowerImage from "../../assets/what-lower.png";

const What = () => {
  return (
    <div className="what">
      <div className="top">
        <div className="img1">
          <img src={LeftImage} alt="" />
        </div>
        <div className="top-col1">
            <div className="img2">
              <img src={UpperImage} alt="" />
            </div>
          <div className="img3">
            <img src={LowerImage} alt="" />
          </div>
        </div>
      </div>
      <div className="top-col2">
                    <div className="title">
                        <div className="title-text">
                            <p>WHAT DO WE DO</p>
                        </div>
                        <div className="title__qmark">
                            <p>?</p>
                        </div>
                    </div>

                    <div>
                        <div className="para1">
                            <p>We make highly customised mobile applications which are <br />very efficient and scalable at low cost.</p>
                        </div>

                        <div className="para2">
                            <p>We use Flutter for our front end which is the latest <br />framework by Google and Firebase for our backend which <br />is one of the world's leading Backend services used by <br />companies like Alibaba, Accenture and Twitch.</p>
                        </div>
                    </div>
            </div>
    </div>
  );
};

export default What;
||||||| 7fd4f19
=======
>>>>>>> f91342f34b56211a918ef222da226cdc6d75c16d
