import React, { useEffect, useRef, useState } from "react"
import "./contact.css"
import { MdEmail } from "react-icons/md"
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa"
import { useSpring, config, easings, animated as a}  from "react-spring"
import useIntersection from "../_utils/useIntersection"

const Contact = ( ) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.5');

    useEffect(() => visible ? setLoad(true) : "")

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0%)' : 'translateY(80%)',
        config: {
            mass: 1,
            tension: 120,
            friction: 80,
            duration: 1000,
            easing: easings.easeInOutQuad
        }
    })

    return (
        <div className="contact-outer-div" id="contact-container">
            <div className="contact-inner-div" ref={ref}>
                <div className="contact-wrapper">
                    <div className="contact-header-div" >
                        <a.h1 className="contact-header" style={animate}>I'd love to chat with you!</a.h1>
                    </div>
                    <div className="contact-info-wrapper">
                        <div className="contact-info-left">
                            <a.div className="contact-info-div" style={animate}>
                                <MdEmail className="contact-icon" />
                                <h1>Send me an email</h1>
                                <a className="contact-email" target="_blank" href = "mailto:ann.sun.kim@gmail.com">
                                    ann.sun.kim@gmail.com
                                </a>
                            </a.div>
                            <a.div className="contact-info-div" style={animate}>
                                <FaPhoneAlt className="contact-icon" />
                                <h1>Give me a ring</h1>
                                <h1 className="contact">646.884.3600</h1>
                            </a.div>
                            <a.div className="contact-info-div" style={animate}>
                                <FaLinkedinIn className="contact-icon" />
                                <h1>Connect with me</h1>
                                 <a className="contact-email" 
                                    target="_blank" 
                                    href = "https://www.linkedin.com/in/ann-kim">
                                    LinkedIn
                                </a>
                            </a.div>
                        </div>
                    </div>            
                </div>      
            </div>    
        </div>
    )
}

export default Contact