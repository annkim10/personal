import React, { useEffect } from "react"
import { useSpring, animated as a, config } from "react-spring";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import "./css/splash.css"
import Timeline from "./animations/timeline"
import Header from "./animations/header";
import Descrip from "./animations/descrip";

const Splash = () => {

    return (
        <div className="splash-outer-div">
            <div className="splash-inner-div">
                <div className="splash-footer-wrapper">
                    <h1 className="footer-copytag">© 2022 built by Ann Kim with React</h1>
                    <div className="footer-links-wrapper">
                        <div className="footer-icon-wrapper">
                            <FaLinkedinIn className="footer-icon"/>
                        </div>
                        <div className="footer-icon-wrapper">
                            <FaGithub className="footer-icon"/>
                        </div>
                    </div>
                    
                </div>
              
                <div className="splash-top-div">
                    <Header />
                    <Descrip />
                    {/* <a.div className="splash-top-wrapper" style={animateDown} >
                        <h1 className="splash-header">It's nice to meet you,</h1> 
                        <h1 className="splash-header">I'm <span> Ann Kim.</span></h1>
                        <p className="splash-descrip">I'm a product manager, coder, & dog lover. My career, thus far, has been learning about the product.</p>
                    </a.div> */}
                </div>
                <div className="splash-bottom-div">
                   <Timeline />
                </div>
                
            </div>
        </div>
    )
}

export default Splash