import React from "react"
import { easings, useSpring, animated as a, config } from "react-spring";



const TimelineHeader = ( { visible} ) => {

    const up = useSpring({
        opacity: visible ? 1 : 0.1,
        y: visible ? 0 : 500, 
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1500,
            easing: easings.easeInOutBack
        }
    })
 
    return (
        <a.div className="timeline-text-wrapper" style={up} >
            <h1 className="timeline-header">My career has revolved around learning about the product
            </h1>  
            <h1 className="timeline-main-header">three different stages across 10+ years </h1> 
        </a.div>
    )
}

export default TimelineHeader