import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";


const DescripText = ( { visible, text } ) => {

    const words = text.split(" ")
    const wordsArr = []

    words.forEach(word => wordsArr.push(word + " "))

    const trail = useTrail(wordsArr.length, {
        opacity: visible ? 1 : 0,
        delay: 1500,
        paddingRight: visible ? 10 : 0,
        y: visible ? 0 : -50, 
        config: {
            mass: 1,
            tension: 200,
            friction: 80,
            // easing: easings.easeInOutElastic
        }
    })

    return (
        <div className="about-descrip-text-wrapper">
            {trail.map((styles, idx) => {
                return (
                    <a.p className="about-descrip-text"  key={idx} style={styles}>
                        {wordsArr[idx].toString()}   
                    </a.p>
                )
            })}
        </div>
    )
}

export default DescripText
