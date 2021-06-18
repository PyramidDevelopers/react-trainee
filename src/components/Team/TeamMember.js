import React from "react";
import "./TeamMember.css";

function TeamMember(props) {
  const { imageUrl, memberName, memberRole } = props;
  return (
    <div className="member-container">
      <div className="member-image">
        <img src={imageUrl} alt={memberName} />
      </div>
      <div className="member-name">
        <p>{memberName}</p>
      </div>
      <div className="member-role">
        <p>{memberRole}</p>
      </div>
    </div>
  );
}

export default TeamMember;
