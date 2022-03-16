import {useEffect, useState} from "react"
import "../css/timeline.css"
import { useSpring, animated as a, config, easings } from "react-spring";
import line from "../../../../images/svg/line.svg"
import code from "../../../../images/splash/code.jpg"
import advertise from "../../../../images/splash/advertise.jpeg"
import market from "../../../../images/splash/market.jpg"
import TimelineHeader from "./timelineheader";

const Timeline = () => {

    const [load, setLoad] = useState(false)

    useEffect(() => setLoad(true))

    const animate = useSpring({
        y: load ? 0 : 200,
        opacity: load ? 1 : 0,
        transform: load ? 'scale(1,1)' : 'scale(0.2, 0.2)',
        config: {
            mass: 1,
            tension: 280,
            friction: 80,
            duration: 3000,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <div className="timeline-outer-div">
            <TimelineHeader />
            <div className="timeline-stages-wrapper">
                <div className="timeline-stage-div">
                    <a.div className="stage-wrapper" style={animate}>
                        <h1 className="timeline-stage-time">OCT 2021 - PRESENT</h1>
                        <h2 className="timeline-stage-descrip">How to <span>develop</span> the product</h2>
                        {/* <img className="timeline-line" src={line} /> */}
                        <a.div style={animate}>
                            <img className="timeline-stage-img" src={code} /> 
                        </a.div>
                    </a.div>
                </div>
                <div className="timeline-stage-div">
                    <a.div className="stage-wrapper" style={animate}>
                        <h1 className="timeline-stage-time">OCT 2016 - SEP 2021</h1>
                        <h2 className="timeline-stage-descrip">How to <span>market</span> the product</h2>
                        {/* <img className="timeline-line" src={line} /> */}
                        <a.div style={animate}>
                            <img className="timeline-stage-img" src={market} /> 
                        </a.div>
                    </a.div>
                </div>
                <div className="timeline-stage-div">
                      <a.div className="stage-wrapper" style={animate}>
                        <h1 className="timeline-stage-time">JUN 2010 - OCT 2016</h1>
                        <h2 className="timeline-stage-descrip">How to <span>advertise</span> the product</h2>
                        {/* <img className="timeline-line" src={line} /> */}
                        <a.div style={animate}>
                            <img className="timeline-stage-img" src={advertise} /> 
                        </a.div>
                    </a.div>
                </div>
            </div>
        </div>
    )
}

export default Timeline