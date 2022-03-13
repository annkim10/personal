import React from "react"
import { VscFoldDown } from "react-icons/vsc"
import { config, easings, useSpring, animated as a } from "react-spring"
import "./scrolldown.css"

const ScrollDown = ( { idName, visible } ) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        delay: 1500,
        y: visible ? 0 : 500,
        config: config.slow
    })
    
    return (
        <a.div id={idName} style={animate}>
            <h1 className="scroll-header">SCROLL</h1>
            <div id="scroll-icon-wrapper" >
                <VscFoldDown id="scroll-down-icon" />
            </div>
        </a.div>
        
    )
}

export default ScrollDown