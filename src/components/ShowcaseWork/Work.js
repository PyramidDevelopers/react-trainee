import React from "react";
import "./Work.css";

function Work(props) {
  const { workStatusOngoing, workTitle, workDescription, workImage } = props;
  return (
    <div className="work-container work-background">
      <div className="work-info">
        {workStatusOngoing ? <span className="work-status">ONGOING</span> : ""}
        <p className="work-title">{workTitle}</p>
        <p className="work-desc">{workDescription}</p>
      </div>
      <div className="work-image">
        <img src={workImage} alt={`Show Casing work ${workTitle}`} />
      </div>
    </div>
  );
}

export default Work;
