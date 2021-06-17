import React from "react";
import "./ShowcaseWork.css";
import Work from "./Work";
import NutrifamilyImage from "../../assets/nutri-family.png";
import VitalmindsImage from "../../assets/vital-minds.png";
import NearvibeImage from "../../assets/near-vibe.png";
import EnermanImage from "../../assets/enerman-app.png";
import TakeyourTripImage from "../../assets/take-your-trip.png";

function ShowcaseWork() {
  const worksArray = [
    {
      title: "Nutri-family",
      ongoing: true,
      description: `An innovative health-tech platform \n where families get healthier, together!`,
      image: NutrifamilyImage,
    },
    {
      title: "VitalMinds",
      ongoing: true,
      description: `Personal mental health assistant`,
      image: VitalmindsImage,
    },
    {
      title: "NearVibe",
      ongoing: true,
      description: `A platform to share, react & discover how people are      feeling in your area`,
      image: NearvibeImage,
    },
    {
      title: "Enerman App",
      ongoing: false,
      description: `Solar Panel information dashboard`,
      image: EnermanImage,
    },
    {
      title: "TakeYourTrip",
      ongoing: false,
      description: `A travel booking app `,
      image: TakeyourTripImage,
    },
  ];
  const worksDisplay = worksArray.map((work, workIdx) => {
    return (
      <div className={`work-num-${workIdx}`}>
        <Work
          key={workIdx}
          workStatusOngoing={work.ongoing}
          workTitle={work.title}
          workDescription={work.description}
          workImage={work.image}
        />
      </div>
    );
  });
  return (
    <div className="container center">
      <div className="showcase-container">
        <div className="showcase-title">
          <h2>SHOW ME WHAT YOU GOT</h2>
        </div>
        <div className="showcase-work">{worksDisplay}</div>
      </div>
    </div>
  );
}

export default ShowcaseWork;
