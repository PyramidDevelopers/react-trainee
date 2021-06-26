import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Work.css";

function Work(props) {
  const { count } = useContext(ThemeContext);
  const { workStatusOngoing, workTitle, workDescription, workImage } = props;
  return (
    <div className="work-container work-background">
      <div className="work-info">
        {workStatusOngoing ? (
          <span className={`work-status theme-${count}-background`}>
            ONGOING
          </span>
        ) : (
          ""
        )}
        <p className={`work-title theme-${count}-color`}>{workTitle}</p>
        <p className="work-desc">{workDescription}</p>
      </div>
      <div className="work-image">
        <img src={workImage} alt={`Show Casing work ${workTitle}`} />
      </div>
    </div>
  );
}

export default Work;
