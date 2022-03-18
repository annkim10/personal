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
        // y: load ? 0 : 500,
        opacity: load ? 1 : 0,
        // transform: load ? 'scale(1,1)' : 'scale(5, 5)',
        config: {
            mass: 1,
            tension: 280,
            friction: 280,
            duration: 3500,
            easing: easings.easeOutQuart
        }
    })

    return (
        <div className="timeline-outer-div" id="timeline-container">
            <div className="timeline-inner-div" ref={ref}>
                <div className="timeline-inner-top">     
                    <TimelineHeader visible={visible} />
                </div>
                <div className="timeline-inner-bottom">
                    <div className="timeline-stages-inner-wrapper">
                        <img className="timeline-stage-img" src={code} />
                        <div className="timeline-stage-div">
                            <a.div className="timeline-stage-descrip-wrapper" style={up}>
                             <h1 className="timeline-stage-time-main">now</h1> 
                                <p className="timeline-stage-time">OCT 2021 - PRESENT</p>
                                <h2 className="timeline-stage-descrip">How to develop the product</h2>
                            </a.div>
                        </div >
                    </div>
                     <div className="timeline-stages-inner-wrapper">
                        <img className="timeline-stage-img" src={market} />
                        <div className="timeline-stage-div">
                            <a.div className="timeline-stage-descrip-wrapper" style={up}>
                                <h1 className="timeline-stage-time-main">then</h1> 
                                <p className="timeline-stage-time">OCT 2021 - PRESENT</p>
                                <h2 className="timeline-stage-descrip">How to develop the product</h2>
                            </a.div>
                        </div >
                    </div>
                     <div className="timeline-stages-inner-wrapper">
                        <img className="timeline-stage-img" src={advertise} />
                        <div className="timeline-stage-div">
                            <a.div className="timeline-stage-descrip-wrapper" style={up}>
                                <h1 className="timeline-stage-time-main">before</h1> 
                                <p className="timeline-stage-time">OCT 2021 - PRESENT</p>
                                <h2 className="timeline-stage-descrip">How to develop the product</h2>
                            </a.div>
                        </div >
                    </div>
                </div>
                  {/* <ScrollDown  idName="timeline-scroll" visible={visible}/> */}
            </div>
           
           
        </div>
    )
}

export default Timeline
