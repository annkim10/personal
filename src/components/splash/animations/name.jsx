import React from "react"
import { Transition, useTrail, easings, useSpring, animated as a, config } from "react-spring";


const Name = ( { visible }) => {

    const greeting = ['It\'s nice to meet you,']
    const first = ['A', 'n', 'n']
    const last = ['K', 'i', 'm']

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0%)' : 'translateY(100%)',
        config: {
            mass: 10,
            tension: 2000,
            friction: 180,
            duration: 2000,
            easing: easings.easeInOutCubic
        }
    })


    return (
    
        <div className="splash-header-wrapper">
           <div className="splash-header-name-wrapper-1">
              <a.div className="splash-header-name-1" style={animate}>
                   Hi! My name is
              </a.div>
           </div>
           <div className="splash-header-name-wrapper-2">
              <a.div className="splash-header-name-2" style={animate}>
                    Ann Kim
              </a.div>
           </div>
        </div>
    )
}

export default Name