import {useEffect, useState} from "react"
import "../css/timeline.css"
import { useSpring, animated as a, config, easings } from "react-spring";
import line from "../../../../images/svg/line.svg"
import code from "../../../../images/splash/code.jpg"
import advertise from "../../../../images/splash/advertise.jpeg"
import market from "../../../../images/splash/market.jpg"
import TimelineHeader from "./timelineheader";
import ScrollDown from "../../../_utils/scrolldown";

const Timeline = ( {visible} ) => {

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
            duration: 2000,
            easing: easings.easeInOutElastic
        }
    })

    const up = useSpring({
        y: load ? 0 : 200,
        opacity: load ? 1 : 0,
        transform: load ? 'scale(1,1)' : 'scale(0.2, 0.2)',
        config: {
            mass: 1,
            tension: 280,
            friction: 80,
            duration: 2000,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <div className="timeline-outer-div">
            <div className="timeline-left-wrapper">     
                <TimelineHeader />
                <h1 className="timeline-main-header"> THE PRODUCT </h1> 
            </div>
            <div className="timeline-stages-wrapper">
                <div className="timeline-stages-inner-wrapper">
                    <a.div className="time-wrapper" style={animate}>
                       <h1 className="timeline-stage-time">now</h1> 
                    </a.div>
                    <div className="timeline-stage-div">
                        <a.div className="timeline-stage-descrip-wrapper" style={up}>
                            <h2 className="timeline-stage-descrip">DEVELOPING</h2>
                        </a.div>
                        <img className="timeline-stage-img" src={code} />
                    </div >
                </div>
                <ScrollDown  idName="timeline-scroll" visible={visible}/>
            </div>
        </div>
    )
}

export default Timeline

//  <div className="timeline-stage-div">
//                     <a.div className="stage-wrapper" style={animate}>
//                         {/* <h1 className="timeline-stage-time">OCT 2016 - SEP 2021</h1> */}
                        
//                         {/* <img className="timeline-line" src={line} /> */}
//                     </a.div>
//                       <a.div style={animate}>
//                             <h2 className="timeline-stage-descrip">Marketing</h2>
//                     </a.div>
//                           <img className="timeline-stage-img" src={market} /> 
//                 </div>
//                 <div className="timeline-stage-div">
//                       <a.div className="stage-wrapper" style={animate}>
//                         {/* <h1 className="timeline-stage-time">JUN 2010 - OCT 2016</h1> */}
                       
//                         {/* <img className="timeline-line" src={line} /> */}
//                     </a.div>
//                      <a.div style={animate}>
//                           <h2 className="timeline-stage-descrip">ADVERTISING</h2>
//                     </a.div>
//                        <img className="timeline-stage-img" src={advertise} /> 
//                 </div>