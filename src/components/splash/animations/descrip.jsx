import React from "react"
import { useSpring, animated as a, config, easings } from "react-spring";
import ScrollDown from "../../_utils/scrolldown";

const Descrip = ( { visible } ) => {


    const animate = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0%)' : 'translateY(80%)',
        // y: visible ? 0 : 500, 
        // delay: 500,
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1500,
            easing: easings.easeInOutBack
        }
    })
 

    return (
        <a.div className="splash-descrip" style={animate} >
           <p>It's nice to meet you! I'm a product manager, coder, & dog mom of two based in NY.</p>  
            <ScrollDown 
                idName={'splash-scroll'} 
                visible={visible} 
                name={'Let me tell you more'}
                container={'timeline-container'}
                />     
        </a.div>
    )
}

export default Descrip