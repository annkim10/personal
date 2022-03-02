import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./splash.css"
import headshot from "../../images/headshot.png"
import Timeline from "./timeline"

const Splash = () => {

    // useEffect(() => window.scroll(0,0))

    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        showMobileMenu();
        window.addEventListener('resize', showMobileMenu);
        // return window.removeEventListener('resize', showMobileMenu)     
    }, [])

    const showMobileMenu = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }
    console.log(mobile)
    return (
        <div className="splash-outer-div">
            <div className="splash-inner-div">
                <h1 className="copytag">© 2022 by Ann Kim created with React</h1>
                <div className="splash-top-div">
                    <h1 className="splash-header">It's nice to meet you,</h1>
                    <h1 className="splash-header">I'm <span> Ann Kim.</span></h1>
                    <p className="splash-descrip">I'm a product manager, coder, & dog lover. My career, thus far, has been learning about the product.</p>
                </div>
                <div className="splash-bottom-div">
                   { mobile ? "" : <Timeline />} 
                </div>
            </div>
          
        </div>
    )
}

export default Splash