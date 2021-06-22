import React from 'react'
import Aboutus from './Aboutus'
import Links from './Links'
import Social from './Social'
import peach from '../../assets/Group-3.svg'
import green from '../../assets/Group-4.svg'
import purple from '../../assets/Group-5.svg'
import cyan from '../../assets/Group-6.svg'
import orange from '../../assets/Group-7.svg'
import pink from '../../assets/Group-1.svg'
import light_green from '../../assets/Group-2.svg'
import yellow from '../../assets/Group-8.svg'

export default function Footer() {


    const site_color = [
        '#ffca60',
        '#FF60BB',
        '#DBFF60',
        '#FF6085',
        '#60FFBA',
        '#B460FF',
        '#60EFFF',
        '#FF7660',
    ]
    return (
        <React.Fragment>
            <div className="footer">
                <div className="click_me">
                    <button>
                        <img src={peach} alt="" />
                        <p className="click">CLICK <br/>ME&gt;</p>
                    </button>
                </div>
                <Aboutus />
                <Links />
                <Social />
            </div>
        </React.Fragment>
    )
}
