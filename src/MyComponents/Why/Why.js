import React from 'react'
import './Why.css'
import limage from '../../assets/choose-left.png'
import rimage from '../../assets/choose-right.png'

const Why = () => {
    return (
        <div className="why">
           <div className="left-block">
            <div className="text">
                    <div className="title">
                        <div className="title-text">
                            <p>WHY CHOOSE US</p>
                        </div>
                        <div className="qmark">
                            <p>?</p>
                        </div>
                    </div>

                    <div>
                        <div className="p1">
                            <p>Our main focus is quality. We will give you the best <br />looking, most user friendly products with a firm code <br />base, for the right price.</p>
                        </div>

                        <div className="p2">
                            <p>If you partner with Pyramid, We will ensure that you <br />receive an end product that exceeds expectations.<br />We follow Agile Development practices to ensure we <br />fulfil our promises.</p>
                        </div>
                    </div>
            </div>
        </div>
            <div className="right-block">
                <div className="col1">
                    <div className="img1">
                        <img src={limage} alt="" />
                    </div>
                </div>
                <div className="col2">
                    <div className="img2">
                        <img src={rimage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
