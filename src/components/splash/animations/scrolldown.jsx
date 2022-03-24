import { useState } from "react"
import { config, easings, useSpring, animated as a } from "react-spring"
import "../css/scrolldown.css"
import NavLink from "../../navbar/nav-link"
import { MdKeyboardArrowDown } from "react-icons/md"

const ScrollDown = ( { idName, visible, name, container, mobile } ) => {

    const animate = useSpring({
        y: visible ? 0 : 500, 
        // delay: 500,
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1500,
            easing: easings.easeInOutBack
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