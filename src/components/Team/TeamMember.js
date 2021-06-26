import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./TeamMember.css";

function TeamMember(props) {
  const { imageUrl, memberName, memberRole } = props;
  const { count } = useContext(ThemeContext);
  return (
    <div className="member-container">
      <div className="member-image">
        <img src={imageUrl} alt={memberName} />
      </div>
      <div className={`member-name theme-${count}-color`}>
        <p>{memberName}</p>
      </div>
      <div className={`member-role theme-${count}-color`}>
        <p>{memberRole}</p>
      </div>
    </div>
  );
}

export default TeamMember;
