import React from "react";
import "./Team.css";
import TeamMember from "./TeamMember";
import DhruvImage from "../../assets/dhruv-shetty.png";
import SamarthImage from "../../assets/samarth-kashyap.png";
import AyushImage from "../../assets/ayush-kiran.png";
import AnkitImage from "../../assets/ankit-mallya.png";
import AdithyaImage from "../../assets/adithya-aravind.png";
import PratheekImage from "../../assets/pratheek-sb.png";
import RishiImage from "../../assets/rishi-pachipulusu.png";

function Team() {
  const teamMembers = [
    {
      name: "Dhruv Shetty",
      role: "Business Analyst & Core Developer",
      image: DhruvImage,
    },
    {
      name: "Adithya Aravind",
      role: "Core Developer",
      image: AdithyaImage,
    },
    {
      name: "Pratheek SB",
      role: "Core Developer",
      image: PratheekImage,
    },
    {
      name: "Ayush Kiran",
      role: "Lead Designer",
      image: AyushImage,
    },
    {
      name: "Ankit Mallya",
      role: "Legal",
      image: AnkitImage,
    },
    {
      name: "Rishi Pachipulusu",
      role: "Social Media & Marketing",
      image: RishiImage,
    },
    {
      name: "Samarth Kashyap",
      role: "Business & Strategy",
      image: SamarthImage,
    },
  ];

  const teamDisplay = teamMembers.map((member, idx) => {
    return (
      <TeamMember
        imageUrl={member.image}
        memberName={member.name}
        memberRole={member.role}
      />
    );
  });

  return (
    <div className="container center">
      <div className="team-container">
        <div className="team-title">
          <h2>OUR TEAM</h2>
          <section className="team-members">{teamDisplay}</section>
        </div>
      </div>
    </div>
  );
}

export default Team;
