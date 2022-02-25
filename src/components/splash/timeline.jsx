import React from "react"
import "./timeline.css"
import code from "../../images/code.jpg"
import advertise from "../../images/advertise.jpeg"
import market from "../../images/market.jpg"

const Timeline = () => {

    return (
        <div className="timeline-wrapper">
            <div className="timeline-card-div">
                <div className="timeline-img-div">
                    <img src={code} className="timeline-img" />
                </div>
                <div className="timeline-text">
                    <h1 className="timeline-time">OCT 2020 - PRESENT</h1>
                    <h2 className="timeline-stage">Learning to <span> develop </span>the product</h2>
                </div>
            </div>
            <div className="timeline-card-div">
                <div className="timeline-img-div">
                    <img src={market} className="timeline-img" />
                </div>
                <div className="timeline-text">
                    <h1 className="timeline-time">OCT 2016 - SEP 2020</h1>
                    <h2 className="timeline-stage">Learning to <span> market </span>the product</h2>
                </div>
            </div>
            <div className="timeline-card-div">
                <div className="timeline-img-div">
                    <img src={advertise} className="timeline-img" />
                </div>
                <div className="timeline-text">
                    <h1 className="timeline-time">JUN 2010 - OCT 2016</h1>
                    <h2 className="timeline-stage">Learning to <span> advertise </span>the product</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Timeline