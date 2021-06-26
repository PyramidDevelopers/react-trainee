import React from 'react'
import './InfoText.css'

export const InfoText = (props) => {
    return (
        <div className = "information-text">
            <div className="question-section">
                <div className="question-title">{props.question}</div>
                <div className="question-mark-rect">
                    <div className="question-mark">?</div>
                </div>
            </div>
            <p className="paragraph-1">{props.paragraph1}</p>
            <p className="paragraph-2">{props.paragraph2}</p>
        </div>
    )
}
