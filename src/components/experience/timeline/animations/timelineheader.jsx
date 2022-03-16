import React from "react"
import { easings, useSpring, animated as a, config } from "react-spring";



const TimelineHeader = () => {

    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animateUpBounce = useSpring({
        opacity: load ? 1 : 0,
        y: load ? 10 : 800, 
        fontWeight: load ? 200 : 0,
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 2200,
            easing: easings.easeOutElastic
        }
    })
 
    return (
        <a.div className="timeline-left-wrapper" style={animateUpBounce} >
            <h1 className="timeline-header">My career has revolved around learning about
                <br/>
                <span> THE PRODUCT </span>   
            </h1>  
        </a.div>
    )
}

export default TimelineHeader