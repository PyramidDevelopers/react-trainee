import React from 'react'
import './Who.css'
import { InfoText } from '../text/InfoText'
import lowerImg from '../../assets/who-lower.png'
import upperImg from '../../assets/who-upper.png'
import rightImg from '../../assets/who-right.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { fontSize } from '@material-ui/system'

export const Who = () => {
    let question = "WHO ARE WE"
    let paragraph1 = "Simply put, college students looking to make it big. We develop apps, make website, design interfaces, create backend architecture and much more."
    let paragraph2 = "We may still be in college but we bring a vast skillset to the table. We have made comprehensive and quality digital products for numerous clients."

    return (
        <div className="who-section">
            <InfoText question = {question} paragraph1 = {paragraph1} paragraph2 = {paragraph2} />
            <div className="vertical-rect" />
            <div className="upper-lower-image-container">
                <img src = {upperImg} alt = "" className = "upper-image" />
                <img src = {lowerImg} alt = "" className = "lower-image" />
            </div>
            <div className="logos-image-container">
                <div className="logos-container">
                    <div className="logo-rect">
                        <LinkedInIcon style= {{fontSize : 50}} className = "logo" />
                    </div>
                    <div className="logo-rect">
                        <InstagramIcon style= {{fontSize : 50}} className = "logo" />
                    </div>
                    <div className="logo-rect">
                        <FacebookIcon style= {{fontSize : 50}} className = "logo" />
                    </div>
                </div>
                <div className="right-image-container">
                    <img src = {rightImg} alt = "" className = "right-image" />
                    <div className="vertical-rect" />
                </div>
                <div className="lower-rect" />
            </div>
        </div>
    )
}
