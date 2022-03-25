import {useEffect, useState, useRef } from "react"
import "../css/timeline.css"
import { useSpring, animated as a, config, easings } from "react-spring";
import code from "../../../../images/splash/code.jpg"
import advertise from "../../../../images/splash/advertise.jpeg"
import market from "../../../../images/splash/market.jpg"
import TimelineHeader from "./timelineheader";
import useIntersection from "../../../_utils/useIntersection";
import TimelineImage from "./image";
import line from "../../../../images/line.svg"

const Timeline = (  ) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.2');

    useEffect(() => visible ? setLoad(true) : "")

    const up = useSpring({
        // y: load ? 0 : 500,
        opacity: load ? 1 : 0,
        transform: visible ? 'translateY(0%)' : 'translateY(50%)',
        config: {
            mass: 1,
            tension: 280,
            friction: 280,
            duration: 1000,
            easing: easings.easeInOutBack
        }
    })

    return (
        <div className="timeline-outer-div" id="timeline-container" ref={ref}>
            <div className="timeline-inner-div">
                <div className="timeline-inner-top">     
                    <TimelineHeader visible={visible} />
                </div>
                <div className="timeline-inner-bottom">
                    <a.div className="timeline-stages-inner-wrapper" style={up}>
                        <div className="timeline-stage-div">
                            <img src={line} id="line" />
                            <h1>2021 - NOW</h1>
                            <h2>Developing</h2>
                        </div>
                        <TimelineImage visible={visible} img={code} />
                    </a.div>
                     <a.div className="timeline-stages-inner-wrapper" style={up}>
                        <div className="timeline-stage-div">
                            <img src={line} id="line" />
                            <h1>2021 - NOW</h1>
                            <h2>Marketing</h2>
                        </div>
                        <TimelineImage visible={visible} img={market} />
                    </a.div>
                     <a.div className="timeline-stages-inner-wrapper" style={up}>
                        <div className="timeline-stage-div">
                            <img src={line} id="line" />
                            <h1>2021 - NOW</h1>
                            <h2>Advertising</h2>
                        </div>
                        <TimelineImage visible={visible} img={advertise} />
                    </a.div>
                </div>
            </div>
           
           
        </div>
    )
}

export default Timeline
