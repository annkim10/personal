import { config, easings, useSpring, animated as a } from "react-spring";
import circle from "../../../images/circle.svg"

const AboutBkgd = ( {visible}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0)',
        config: {
            mass: 1,
            tension: 120,
            friction: 80,
            duration: 1000,
            easing: easings.easeOutBack
        }
    })

    const letters = 'About Me'.split("")

    return (
        <a.div className="about-bkgd-wrapper" style={animate}>
            {/* <img src={circle} id="circle-svg" /> */}
            
        </a.div>
    )
}

export default AboutBkgd