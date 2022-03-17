import { config, easings, useSpring, animated as a } from "react-spring";

const AboutHeader = ( {visible}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 30 : 500,
        config: {
            mass: 1,
            tension: 120,
            friction: 80,
            duration: 1500,
            easing: easings.easeInOutQuad
        }
    })

    return (
        <a.h1 className="about-header" style={animate} >
            A little about me . . .
        </a.h1>
    )
}

export default AboutHeader