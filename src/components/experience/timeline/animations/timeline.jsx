import {useEffect, useState, useRef } from "react"
import "../css/timeline.css"
import { useSpring, animated as a, config, easings } from "react-spring";
import line from "../../../../images/svg/line.svg"
import code from "../../../../images/splash/code.jpg"
import advertise from "../../../../images/splash/advertise.jpeg"
import market from "../../../../images/splash/market.jpg"
import TimelineHeader from "./timelineheader";
import ScrollDown from "../../../_utils/scrolldown";
import useIntersection from "../../../_utils/useIntersection";

const Timeline = (  ) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.5');

    useEffect(() => visible ? setLoad(true) : "")

    const up = useSpring({
        y: load ? 0 : 200,
        opacity: load ? 1 : 0,
        transform: load ? 'scale(1,1)' : 'scale(0.2, 0.2)',
        config: {
            mass: 1,
            tension: 280,
            friction: 80,
            duration: 1000,
            easing: easings.easeOutQuad
        }
    })

    const side = useSpring({
        x: load ? 0 : 1200,
        opacity: load ? 1 : 0,
        // transform: load ? 'scale(1,1)' : 'scale(0.2, 0.2)',
        config: {
            mass: 1,
            tension: 280,
            friction: 80,
            duration: 1000,
            easing: easings.easeOutQuad
        }
    })

    return (
        <div className="timeline-outer-div">
            <div className="timeline-left-wrapper">     
                <TimelineHeader visible={visible} />
                <h1 className="timeline-main-header" ref={ref}> THE PRODUCT </h1> 
            </div>
            <div className="timeline-stages-wrapper">
                <div className="timeline-stages-inner-wrapper">
                    <a.div className="time-wrapper" style={side}>
                       <h1 className="timeline-stage-time">Now</h1> 
                    </a.div>
                    <div className="timeline-stage-div">
                        <a.div className="timeline-stage-descrip-wrapper" style={up}>
                            <h2 className="timeline-stage-descrip">DEVELOPING</h2>
                        </a.div>
                        <img className="timeline-stage-img" src={code} />
                    </div >
                </div>
                <div className="timeline-stages-inner-wrapper">
                    <a.div className="time-wrapper" style={side}>
                       <h1 className="timeline-stage-time">Then</h1> 
                    </a.div>
                    <div className="timeline-stage-div">
                        <a.div className="timeline-stage-descrip-wrapper" style={up}>
                            <h2 className="timeline-stage-descrip">MARKETING</h2>
                        </a.div>
                        <img className="timeline-stage-img" src={market} />
                    </div >
                </div>
                <div className="timeline-stages-inner-wrapper">
                    <a.div className="time-wrapper" style={side}>
                       <h1 className="timeline-stage-time">Before</h1> 
                    </a.div>
                    <div className="timeline-stage-div">
                        <a.div className="timeline-stage-descrip-wrapper" style={up}>
                            <h2 className="timeline-stage-descrip">ADVERTISING</h2>
                        </a.div>
                        <img className="timeline-stage-img" src={advertise} />
                    </div >
                </div>
            </div>
             <ScrollDown  idName="timeline-scroll" visible={visible}/>
        </div>
    )
}

export default Timeline
