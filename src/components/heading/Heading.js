import React from 'react'
import './Heading.css'

export const Heading = (props) => {
    return (
        <div>
            <div className="heading-text">{props.heading}</div>
        </div>
    )
}
