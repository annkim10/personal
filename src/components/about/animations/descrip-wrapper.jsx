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
            <h1 className="about-descrip-text"> 
                <span><GrLocation /></span>
                I am based in Long Island City, NY
            </h1>
            <h1 className="about-descrip-text"> 
                <span><BsEmojiHeartEyes /></span>
                I am a big dog lover and pet parent to Rollie & Jojo
            </h1>
            <h1 className="about-descrip-text"> 
                <span><MdOutlineSchool /></span>
                I graduated from Northwestern University in 2010 with a Bachelor of Arts in Psychology & certificate in Integrated Marketing Communications
            </h1>
        </a.div>
    )
}

export default AboutMe











