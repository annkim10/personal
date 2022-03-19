import {useEffect, useState, useRef } from "react"
import "../css/timeline.css"
import { useSpring, animated as a, config, easings } from "react-spring";
import code from "../../../../images/splash/code.jpg"
import advertise from "../../../../images/splash/advertise.jpeg"
import market from "../../../../images/splash/market.jpg"
import TimelineHeader from "./timelineheader";
import ScrollDown from "../../../_utils/scrolldown";
import useIntersection from "../../../_utils/useIntersection";
import TimelineImage from "./image";

const Timeline = (  ) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.5');

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
                    <div className="timeline-stages-inner-wrapper">
                        <TimelineImage visible={visible} img={code} />
                        <a.div className="timeline-stage-div" style={up}>
                            <h1 className="timeline-stage-time-main">now</h1> 
                            <div className="timeline-stage-descrip-wrapper">
                                <p className="timeline-stage-time">OCT 2021 - PRESENT</p>
                                <h2 className="timeline-stage-descrip">Developing the product</h2>
                            </div>
                        </a.div >
                    </div>
                     <div className="timeline-stages-inner-wrapper">
                        <TimelineImage visible={visible} img={market} />
                        <a.div className="timeline-stage-div" style={up}>
                            <h1 className="timeline-stage-time-main">then</h1> 
                            <div className="timeline-stage-descrip-wrapper" >
                                <p className="timeline-stage-time">OCT 2021 - PRESENT</p>
                                <h2 className="timeline-stage-descrip">Marketing the product</h2>
                            </div>
                        </a.div >
                    </div>
                     <div className="timeline-stages-inner-wrapper">
                        <TimelineImage visible={visible} img={advertise} />
                        <a.div className="timeline-stage-div" style={up}>
                            <h1 className="timeline-stage-time-main">before</h1> 
                            <div className="timeline-stage-descrip-wrapper" >
                                <p className="timeline-stage-time">OCT 2021 - PRESENT</p>
                                <h2 className="timeline-stage-descrip">Advertising the product</h2>
                            </div>
                        </a.div >
                    </div>
                </div>
                  {/* <ScrollDown  idName="timeline-scroll" visible={visible}/> */}
            </div>
           
           
        </div>
    )
}

export default Timeline
