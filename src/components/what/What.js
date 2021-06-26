import React from 'react'
import { InfoText } from '../text/InfoText'
import leftImg from '../../assets/what-left.png'
import upperImg from '../../assets/what-upper.png'
import lowerImg from '../../assets/what-lower.png'
import './What.css'

export const What = () => {
    let question = "WHAT DO WE DO"
    let paragraph1 = "We make highly customised mobile applications which are very efficient and scalable at low cost."
    let paragraph2 = "We use Flutter for our front end which is the latest framework by Google and Firebase for our backend which is one of the world's leading Backend services used by companies like Alibaba, Accenture and Twitch."

    return (
        <div className = "what-section">
            <div className="what-left-section">
                <div className="what-left-top">
                    <div className="left-top-first-section">
                        <div className="horizontal-rect" />
                        <div className="vertical-rect-left" />
                    </div>
                    <div className="left-top-second-section">
                        <div className="vertical-rect-at-start" />
                        <img src = {leftImg} className = "left-image" alt = "" />
                    </div>
                    <div className="left-top-third-section">
                        <div className="upper-image-container">
                            <img src = {upperImg} className = "upper-image" alt = "" />
                            <div className="vertical-rect-at-end" />
                        </div>
                        <img src = {lowerImg} className = "lower-image" alt = "" />
                    </div>
                </div>
                <div className="what-left-bottom">
                    <div className="horizontal-rect" />
                </div>
            </div>
            <div className="what-right-section">
                <InfoText question = {question} paragraph1 = {paragraph1} paragraph2 = {paragraph2} />
                <div className="vertical-rect-at-end" />
            </div>
            <div className="vertical-rect-at-end" />
        </div>
    )
}
