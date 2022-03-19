import { useEffect, useState } from "react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import "./css/splash.css"
import Timeline from "../experience/timeline/animations/timeline"
import Name from "./animations/name";
import Descrip from "./animations/descrip";
import ScrollDown from "../_utils/scrolldown";

const Splash = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => setVisible(true))

    return (
        <div className="splash-outer-div" id="splash-container">
            <div className="splash-inner-div">
                <div className="splash-footer-wrapper">
                    <h1 className="footer-copytag">© 2022 built by Ann Kim</h1>
                </div>
                <div className="splash-top-div">
                    <Name />
                    <Descrip />
                </div>
                <ScrollDown 
                    idName={'splash-scroll'} 
                    visible={visible} 
                    name={'Let me tell you more'}
                    container={'timeline-container'}
                />
            </div>
           
        </div>
    )
}

export default Splash