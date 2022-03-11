import { useState, useRef, useEffect } from 'react';
import { useSpring, easings, config, animated as a } from "react-spring"
import circle from "../../../../images/circle.svg"


const DevelopCircle = ( {visible}) => {

    const animate = useSpring({
        opacity: visible ? 0.1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0)',
        config: {
            mass: 1,
            tension: 200,
            friction: 80,
            duration: 3000,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <a.div className="develop-circle" style={animate} >
            <img src={circle} />
        </a.div>
    )
}

export default DevelopCircle