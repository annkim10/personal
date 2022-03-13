import { useState, useRef, useEffect } from 'react';
import { useSpring, easings, config, animated as a } from "react-spring"
import circle from "../../../../images/svg/purple-circle.svg"


const DevelopCircle = ( {visible}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0)',
        config: {
            mass: 1,
            tension: 200,
            friction: 80,
            duration: 2000,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <a.div className="develop-circle" style={animate} >
            <img src={circle} />
            <h1 className='projects-cta'>MY PROJECTS</h1>
        </a.div>
    )
}

export default DevelopCircle