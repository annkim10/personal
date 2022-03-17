import { config, easings, useSpring, animated as a } from "react-spring";
import pic from "../../../images/about.jpg"
import jojo from "../../../images/jojo.jpg"

const AboutImgs = ( {visible}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 20 : 200,
        // transform: visible ? 'scale(1)' : 'scale(0)',
        config: {
            mass: 1,
            tension: 120,
            friction: 80,
            duration: 3500,
            easing: easings.easeOutElastic
        }
    })

    return (
        <a.div className="about-img-wrapper" style={animate}>
            {/* <h1 className="me-caption">This is Me</h1> */}
            <img className="about-pic" src={pic} />
            <img className="jojo-pic" src={jojo} />
        </a.div>
    )
}

export default AboutImgs