import { useEffect } from "react"
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
                            <a href="https://www.linkedin.com/in/ann-kim" target="_blank">
                                <FaLinkedinIn className="footer-icon"/>
                            </a>
                        </div>
                        <div className="footer-icon-wrapper">
                            <a href="https://github.com/annkim10" target="_blank">
                                <FaGithub className="footer-icon"/>
                            </a>
                        </div>
                    </div>
                    
                </div>
              
                <div className="splash-top-div">
                    <Header />
                    <Descrip />
                </div>
                <div className="splash-bottom-div">
                   <Timeline />
                </div>
                
            </div>
        </div>
    )
}

export default Splash