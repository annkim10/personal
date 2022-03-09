import React from "react"
import "../css/timeline.css"
import { useSpring, animated as a, config } from "react-spring";
import line from "../../../images/line.svg"
import code from "../../../images/splash/code.jpg"
import advertise from "../../../images/splash/advertise.jpeg"
import market from "../../../images/splash/market.jpg"

const Timeline = () => {

    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animateDown = useSpring({
        opacity: load ? 1 : 0,
        marginTop: load ? 0 : -500, 
        config: config.molasses
    })

    return (
        <div className="timeline-outer-div">
            <div className="timeline-stages-wrapper">
                <div className="timeline-stage-div">
                    <h1 className="timeline-stage-time">OCT 2020 - PRESENT</h1>
                    <a.div className="stage-wrapper" style={animateDown}>
                        <h2 className="timeline-stage-descrip">How to <span>develop</span> the product</h2>
                        <img className="timeline-line" src={line} />
                        <img className="timeline-stage-img" src={code} />
                    </a.div>
                    
                </div>
                <div className="timeline-stage-div">
                    <h1 className="timeline-stage-time">OCT 2016 - SEP 2020</h1>
                    <h2 className="timeline-stage-descrip">How to <span>market</span> the product</h2>
                    <img className="timeline-line" src={line} />
                    <img className="timeline-stage-img" src={market} />
                </div>
                <div className="timeline-stage-div">
                    <h1 className="timeline-stage-time">JUN 2010 - OCT 2016</h1>
                    <h2 className="timeline-stage-descrip">How to <span>advertise</span> the product</h2>
                    <img className="timeline-line" src={line} />
                    <img className="timeline-stage-img" src={advertise} />
                </div>
                
                
            </div>
        </div>
    )
}

export default Timeline