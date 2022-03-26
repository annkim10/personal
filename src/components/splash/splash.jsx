import { useEffect, useState } from "react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import "./css/splash.css"
import Timeline from "../experience/timeline/animations/timeline"
import Name from "./animations/name";
import Descrip from "./animations/descrip";
import ScrollDown from "./animations/scrolldown.jsx"
import { useSpring, easings, config, animated as a } from "react-spring"


const Splash = ( { visible, mobile }) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1500,
            easing: easings.easeInOutBack
        }
    })


    return (
        <div className="splash-outer-div" id="splash-container">
            <a.div className="splash-inner-div" style={animate} >
                <div className="splash-footer-wrapper">
                    <h1 className="footer-copytag">© 2022 built by Ann Kim</h1>
                </div>
                <div className="splash-top-div">
                        <Name visible={visible} />  
                </div>
                <ScrollDown 
                    idName={'splash-scroll'} 
                    visible={visible} 
                    name={'Let•me•tell•you•more•about•myself•'}
                    container={'timeline-container'}
                    mobile={mobile}
                /> 
            </a.div>    
        </div>
    )
}

export default Splash