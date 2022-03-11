import { useState, useRef, useEffect} from "react"
import { config, easings, useTrail, animated as a } from "react-spring";
import pic from "../../../images/about.jpg"
import jojo from "../../../images/jojo.jpg"
import { BsArrowDown } from "react-icons/bs"

const AboutCaptions = ( {visible}) => {

    const captions = [
        {caption1: "This is ", span: "me" },
        // {img: jojo, caption1: "This is Jojo"},
    ]

    const trail= useTrail(captions.length, {
        opacity: visible ? 1 : 0,
        x: visible ? 50 : 200,
        config: {
            mass: 1,
            tension: 120,
            friction: 80,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <div className="about-captions-outer-wrapper">
            {trail.map((styles, idx) => {
                return (
                    <a.div className="about-captions-wrapper" style={styles} key={idx}>
                        <h1 className="me-caption">This is <span>me</span></h1>
                        <BsArrowDown className="me-arrow"/>
                    </a.div>
                )
            })}
        </div>
    )
}

export default AboutCaptions