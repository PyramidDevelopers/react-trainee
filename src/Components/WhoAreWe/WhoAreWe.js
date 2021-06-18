import React, { useContext } from "react";
import "./WhoAreWe.css";
import WhoUpper from "Assets/Images/who-upper.png";
import WhoLower from "Assets/Images/who-lower.png";
import WhoRight from "Assets/Images/who-right.png";
import { ThemeContext } from "Modules/Theme/Context";
const WhoAreWe = () => {
  const Color = useContext(ThemeContext);
  return (
    <div className="WhoAreWeContainer">
      <div className="WhoAreWeLeft">
        <h2 style={{ color: Color }}>Who Are We ?</h2>
        <p style={{ color: Color }}>
          Simply put, college students looking to make it big. We develop apps,
          make website, design interfaces, create backend architecture and much
          more.
        </p>
        <p>
          We may still be in college but we bring a vast skillset to the table.
          We have made comprehensive and quality digital products for numerous
          clients
        </p>
      </div>
      <div className="WhoAreWeRight">
        <div className="WhoAreWeRightImage">
          <img src={WhoUpper} alt="Computer Coding" />
          <img src={WhoLower} alt="Laptop Coding" />
        </div>
        <div className="WhoAreWeRightSocial">
          <div className="SocialMediaBoxes">
            <span>Link</span>
            <span>Inst</span>
            <span>Face</span>
          </div>
          <img src={WhoRight} alt="Night Coding" />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
