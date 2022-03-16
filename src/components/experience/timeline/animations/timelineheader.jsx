import React from "react"
import { easings, useSpring, animated as a, config } from "react-spring";



const TimelineHeader = ( { visible} ) => {

    const up = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 10 : 800, 
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1000,
            easing: easings.easeOutQuart
        }
    })
 
    return (
        <a.div className="timeline-text-wrapper" style={up} >
            <h1 className="timeline-header">My career has revolved around learning about  
            </h1>  
        </a.div>
    )
}

export default TimelineHeader