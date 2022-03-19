import { useState } from "react"
import { VscFoldDown } from "react-icons/vsc"
import { GrLinkDown } from "react-icons/gr"
import { config, easings, useSpring, animated as a } from "react-spring"
import "./scrolldown.css"
import NavLink from "../navbar/nav-link"

const ScrollDown = ( { idName, visible, name, container } ) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        // delay: 1200,
        y: visible ? 0 : 500,
        config: config.slow
    })

    const [activeNavLinkId, setActiveNavLinkId] = useState('');
    
    return (
        <a.div id={idName} style={animate}>
            {/* <h1 className="scroll-header">SCROLL</h1> */}
            <NavLink 
                name={name}
                navLinkId={'scroll-header'} 
                scrollToId={container} 
                activeNavLinkId={activeNavLinkId}
                setActiveNavLinkId={setActiveNavLinkId} 
            />
            {/* <div id="scroll-icon-wrapper" >
                <GrLinkDown id="scroll-down-icon" />
            </div> */}
        </a.div>
        
    )
}

export default ScrollDown