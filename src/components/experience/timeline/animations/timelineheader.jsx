import React from "react"
import { easings, useSpring, animated as a, config } from "react-spring";



const TimelineHeader = ( { visible} ) => {

    const up = useSpring({
        opacity: visible ? 1 : 0,
        // y: visible ? 0 : 500, 
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
        <a.div className="timeline-text-wrapper" style={up} >
            <h1 className="timeline-header">
                My career has revolved around 
                <span> the product.</span>
            </h1>  
            <h1 className="timeline-main-copy">
                Over the span of 15+ years, my career has undergone 3 different stages in which I learned the fundamentals of developing, marketing and advertising a product. 
            </h1> 
        </a.div>
    )
}

export default TimelineHeader