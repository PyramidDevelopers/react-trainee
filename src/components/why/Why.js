import React from 'react'
import { InfoText } from '../text/InfoText'
import leftImage from '../../assets/choose-left.png'
import rightImage from '../../assets/choose-right.png'
import './Why.css'

export const Why = () => {
    let question = "WHY CHOOSE US"
    let paragraph1 = "Our main focus is quality. We will give you the best looking, most user friendly products with a firm code base, for the right price."
    let paragraph2 = "If you partner with Pyramid, We will ensure that you receive an end product that exceeds expectations. We follow Agile Development practices to ensure we fulfil our promises."

    return (
        <div className="why-section" id = "why">
            <InfoText question={question} paragraph1={paragraph1} paragraph2={paragraph2} />
            <div className="why-left-image-container">
                <img src={leftImage} className="why-left-image" alt="" />
                <div className="why-horizontal-rect" />
            </div>
            <div className="why-right-image-container">
                <div className="why-horizontal-rect" />
                <img src={rightImage} className="why-right-image" alt="" />
            </div>
            <div className="why-vertical-rects-container">
                <div className="why-vertical-rect" />
                <div className="why-vertical-rect" />
                <div className="why-vertical-rect-dark" />
                <div className="why-vertical-rect" />
            </div>
            <div className="why-vertical-rects-container-right">
                <div className="why-vertical-rect-dark" />
                <div className="why-vertical-rect" />
            </div>
        </div>
    )
}
