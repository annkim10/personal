import { config, easings, useSpring, animated as a } from "react-spring";
import pic from "../../../images/about.jpg"
import jojo from "../../../images/jojo.jpeg"

const AboutImgs = ( {visible}) => {

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

    return (
        <a.div className="about-img-wrapper-inner" style={animate}>
            <div className="rollie-wrapper" >
                <img className="about-pic" src={pic} />
            </div>
            <div className="jojo-wrapper" >
                <img className="jojo-pic" src={jojo} />
            </div>
        </a.div>
    )
}

export default AboutImgs