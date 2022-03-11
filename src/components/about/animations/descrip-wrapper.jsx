import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, animated as a } from "react-spring";
import DescripText from "./descrip-text";


const AboutMe = ( { visible } ) => {


    const animate = useSpring({
        opacity: visible ? 1 : 0,
        // delay: 1500,
        y: visible ? 0 : 50, 
        config: {
            mass: 1,
            tension: 200,
            friction: 80,
            duration: 2000,
            easing: easings.easeOutQuad
        }
    })
 

    return (
        <a.div className="about-descrip-div" style={animate}>
            <h1 className="about-descrip">My Interests</h1>
            <h1 className="about-descrip-answer">
                <DescripText visible={visible} text={'Dogs, technology, movies, and tv'} />
            </h1>
            <h1 className="about-descrip">Location</h1>
            <h1 className="about-descrip-answer">
                <DescripText visible={visible} text={'Long Island City, NY'} />
            </h1>
            <h1 className="about-descrip">Education</h1>
            <h1 className="about-descrip-answer">
                <DescripText visible={visible} text={'Northwestern University, Bachelors Degree'} />
            </h1>
            <h1 className="about-descrip-answer">
                <DescripText visible={visible} text={'Psychology, Integrated Marketing Communications'} />
            </h1>
        </a.div>
    )
}

export default AboutMe











