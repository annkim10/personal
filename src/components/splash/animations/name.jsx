import React from "react"
import { Transition, useTrail, easings, useSpring, animated as a, config } from "react-spring";


const Name = ( { visible }) => {

    const greeting = ['It\'s nice to meet you,']
    const first = ['A', 'n', 'n']
    const last = ['K', 'i', 'm']

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        // transform: visible ? 'skewX(0)' : 'skewX(30deg)',
        // transform: visible ? 'scale(1)' : 'scale(10)',
        transform: visible ? 'translateY(0%)' : 'translateY(80%)',
        config: {
            mass: 10,
            tension: 2000,
            friction: 180,
            duration: 2000,
            easing: easings.easeInOutCubic
        }
    })


    const trail2 = useTrail(last.length, {
        opacity: visible ? 1 : 0,
        height: visible? '100%' : '0%',
        transform: visible ? 'skewY(0)' : 'skewY(90deg)',
        transform: visible ? 'translateY(0%)' : 'translateY(100%)',
        config: {
            mass: 10,
            tension: 2000,
            friction: 130,
            duration: 2000,
            easing: easings.easeInOutQuad
        }
    })

    return (
    
        <div className="splash-header-wrapper">
           <div className="splash-header-name-wrapper-1">
              <a.div className="splash-header-name-1" style={animate}>
                   Hello! My name is
              </a.div>
           </div>
           <div className="splash-header-name-wrapper-2">
              <a.div className="splash-header-name-2" style={animate}>
                    Ann Kim
              </a.div>
           </div>
            {/* <div className="splash-header-name-wrapper-2">
              <a.div className="splash-header-name-2" style={animate}>
                    Kim.
              </a.div>
           </div> */}
        </div>
    )
}

export default Name