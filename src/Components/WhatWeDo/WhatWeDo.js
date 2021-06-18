import React, { useContext } from "react";
import "./WhatWeDo.css";
import WhatLeft from "Assets/Images/what-left.png";
import WhatUpper from "Assets/Images/what-upper.png";
import WhatLower from "Assets/Images/what-lower.png";
import { ThemeContext } from "Modules/Theme/Context";
const WhatWeDo = () => {
  const Color = useContext(ThemeContext);
  return (
    <div className="WhatDoWeDoContainer">
      <div className="WhatWeDoImages">
        <img
          className="WhatWeDoImageLeft"
          src={WhatLeft}
          alt="Writing Code In Pen"
        />
        <div className="WhatWeDoImageRight">
          <img
            className="WhatWeDoImageUpper"
            src={WhatUpper}
            alt="Typing On Laptop"
          />
          <img
            className="WhatWeDoImageLower"
            src={WhatLower}
            alt="App Development On Laptop"
          />
        </div>
      </div>
      <div className="WhatWeDoRight">
        <h2 style={{ color: Color }}>What Do We Do ?</h2>
        <p style={{ color: Color }}>
          We make highly customised mobile applications which are very efficient
          and scalable at low cost.
        </p>
        <p>
          We use Flutter for our front end which is the latest framework by
          Google and Firebase for our backend which is one of the world's
          leading Backend services used by companies like Alibaba, Accenture and
          Twitch.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
