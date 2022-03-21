import React from "react"
import { Transition, useTrail, easings, useSpring, animated as a, config } from "react-spring";

const Name = ( { visible }) => {

    const greeting = ['It\'s nice to meet you,']
    const name = ['I\'m', 'Ann Kim']

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        height: visible? '100%' : '0%',
        // transform: visible ? 'translateY(0%)' : 'translateY(50%)',
        config: {
            mass: 1,
            tension: 2000,
            friction: 180,
            duration: 2000,
            easing: easings.easeInOutBack
        }
    })

    return (
    
        <div className="splash-header-wrapper">
            <div className="splash-header-greeting-wrapper">
                <a.div className="splash-header-greeting" style={animate}>
                    It's nice to meet you,
                </a.div>
            </div>
           <div className="splash-header-name-wrapper">
              <a.div className="splash-header-name" style={animate}>
                    I'm Ann Kim
              </a.div>
           </div>
        </div>
    )
}

export default Name