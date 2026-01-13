import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, animated as a } from "react-spring";
import { GrLocation } from "react-icons/gr"
import { BsEmojiHeartEyes } from "react-icons/bs"
import { MdOutlineSchool } from "react-icons/md"

const AboutMe = ( { visible } ) => {


    const animate = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0%)' : 'translateY(50%)',
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1000,
            easing: easings.easeInOutBack
        }
    })
 

    return (
        <a.div className="about-descrip-div" style={animate}>
            <div className="about-descrip-text"> 
                <span><GrLocation /></span>
                <h1>I am based in Brooklyn, NY</h1>
            </div>
            <div className="about-descrip-text"> 
                <span><BsEmojiHeartEyes /></span>
                <h1>I am a big dog lover and pet parent to Rollie & Jojo</h1>
            </div>
            <div className="about-descrip-text"> 
                <span><MdOutlineSchool /></span>
                <h1>I graduated from Northwestern University in 2010</h1>
            </div>
        </a.div>
    )
}

export default AboutMe











