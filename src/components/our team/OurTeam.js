import React from 'react'
import './OurTeam.css'
import {TeamMember} from './TeamMember'
import DhruvImg from '../../assets/dhruv-shetty.png'
import SamarthImg from '../../assets/samarth-kashyap.png'
import AyushImg from '../../assets/ayush-kiran.png'
import AnkitImg from '../../assets/ankit-mallya.png'

export const OurTeam = () => {
  let teamMembersData = [
    { name: "Dhruv Shetty", designation: "Business Analyst & Core Developer", image: DhruvImg },
    { name: "Samarth Kashyap", designation: "Business & Strategy", image: SamarthImg },
    { name: "Ayush Kiran", designation: "Lead Designer", image: AyushImg },
    { name: "Ankit Mallya", designation: "Legal", image: AnkitImg }
  ]
  return (
    <div className="team-container">
      <div className = "rect-left-small" />
      <div className = "rect-left-big" />
      {teamMembersData.map((memberData) => {
        return <TeamMember memberData = {memberData} />
      })}
      <div className = "rect-right" />
    </div>
  )
}
