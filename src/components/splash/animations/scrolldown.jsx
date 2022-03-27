import { useState } from "react"
import { config, easings, useSpring, animated as a } from "react-spring"
import "../css/scrolldown.css"
import NavLink from "../../navbar/nav-link"
import { MdKeyboardArrowDown } from "react-icons/md"

const ScrollDown = ( { idName, visible, name, container, mobile } ) => {

    const animate = useSpring({
        // opacity: visible ? 1 : 0,
        // x: visible ? 0 : -1000, 
        y: visible ? 0 : -1500,
        // // transform: visible ? 'skewX(0)' : 'skewX(35deg)',
        // transform: visible ? 'scale(1)' : 'scale(0.2)',
        // delay: 500,
        config: {
            mass: 10,
            tension: 2000,
            friction: 300,
            duration: 4000,
            easing: easings.easeInOutCubic
        }
    })

    const [activeNavLinkId, setActiveNavLinkId] = useState('');

    const letters = name.split("")

    
    return (
        <a.div id={idName} style={animate}>
            <h1 id="scroll-header">
               { letters.map((letter, idx) => {
                    return (
                        <span 
                            key={idx}
                            style={{transform: `rotate(${idx * 10.7}deg)`}}>
                                {letter}
                        </span>
                    )
                })}
            </h1>
            <div className="scrolldown-link-div">
                <p className="splash-descrip-text">I'm a product manager, coder, & dog mom of two based in NYC.</p>
                <NavLink 
                    name={'SCROLL'}
                    navLinkId={'scroll-icon'} 
                    scrollToId={container} 
                    activeNavLinkId={activeNavLinkId}
                    setActiveNavLinkId={setActiveNavLinkId} 
                />
                <MdKeyboardArrowDown className="arrow" />
            </div>
        </a.div>
        
    )
}

export default ScrollDown