import { config, easings, useSpring, animated as a } from "react-spring";

const AboutHeader = ( {visible}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 30 : 500,
        config: {
            mass: 1,
            tension: 120,
            friction: 80,
            duration: 1000,
            easing: easings.easeInOutQuad
        }
    })

    return (
        <a.div className="about-header" style={animate} >
            <h1 className="about-header-first">some tidbits</h1>
            <h2 className="about-header-second">about me</h2>
        </a.div>
    )
}

export default AboutHeader