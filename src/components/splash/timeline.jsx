import React from "react"
import "./timeline.css"
import { useSpring, animated as a } from "react-spring";
import line from "../../images/line.svg"
import code from "../../images/code.jpg"
import advertise from "../../images/advertise.jpeg"
import market from "../../images/market.jpg"

const Timeline = () => {

    return (
        <div className="timeline-outer-div">
            <div className="timeline-stages-wrapper">
                <div className="timeline-stage-div">
                    <h1 className="timeline-stage-time">OCT 2020 - PRESENT</h1>
                    <img src={line} />
                    <div className="timeline-stage-img-div">
                        <img className="timeline-stage-img" src={code} />
                        <h2 className="timeline-stage-reveal">How to develop the product</h2>
                    </div>
                </div>
                
                <img className="timeline-stage-img" src={market} />
                <img className="timeline-stage-img" src={advertise} />
            </div>
        </div>
    )
}

export default Timeline