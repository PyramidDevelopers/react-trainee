import React from 'react'
import './TeamMember.css'
export const TeamMember = (props) => {
    return (
        <div className = "member">
            <img src = {props.memberData.image} className = "member-image" alt = ""/>
            <div className = "member-name">{props.memberData.name}</div>
            <div className = "member-designation">{props.memberData.designation}</div>
        </div>
    )
}
