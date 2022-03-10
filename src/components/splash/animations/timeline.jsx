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
        marginTop: load ? 10 : -500, 
        config: config.slow
    })

    return (
        <div className="timeline-outer-div">
            <div className="timeline-stages-wrapper">
                <div className="timeline-stage-div">
                    <a.div className="stage-wrapper" style={animateDown}>
                        <h1 className="timeline-stage-time">OCT 2020 - PRESENT</h1>
                        <h2 className="timeline-stage-descrip">How to <span>develop</span> the product</h2>
                        <img className="timeline-line" src={line} />
                        <a.div style={animateDown}>
                            <img className="timeline-stage-img" src={code} /> 
                        </a.div>
                    </a.div>
                </div>
                <div className="timeline-stage-div">
                    <a.div className="stage-wrapper" style={animateDown}>
                        <h1 className="timeline-stage-time">OCT 2016 - SEP 2020</h1>
                        <h2 className="timeline-stage-descrip">How to <span>market</span> the product</h2>
                        <img className="timeline-line" src={line} />
                        <a.div style={animateDown}>
                            <img className="timeline-stage-img" src={market} /> 
                        </a.div>
                    </a.div>
                </div>
                <div className="timeline-stage-div">
                      <a.div className="stage-wrapper" style={animateDown}>
                        <h1 className="timeline-stage-time">JUN 2010 - OCT 2016</h1>
                        <h2 className="timeline-stage-descrip">How to <span>advertise</span> the product</h2>
                        <img className="timeline-line" src={line} />
                        <a.div style={animateDown}>
                            <img className="timeline-stage-img" src={advertise} /> 
                        </a.div>
                    </a.div>
                </div>
            </div>
        </div>
    )
}

export default Timeline