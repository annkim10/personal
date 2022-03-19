import React from "react"
import { easings, useSpring, animated as a, config } from "react-spring";
import code from "../../../../images/splash/code.jpg"
import advertise from "../../../../images/splash/advertise.jpeg"
import market from "../../../../images/splash/market.jpg"


const TimelineImage = ( { visible, img } ) => {

    const up = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0%)' : 'translateY(50%)',
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1000,
            easing: easings.easeInOutBack
        }
    })
 
    return (
        <a.div className="img-wrapper" style={up} >
            <img className="timeline-stage-img" src={img} />
        </a.div>
    )
}

export default TimelineImage