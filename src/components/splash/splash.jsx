import React from "react"
import { useEffect } from "react"
import "./splash.css"
import Timeline from "./timeline"


const Splash = () => {

    useEffect(() => window.scroll(0,0))

    return (
        <div className="splash-outer-div">
            <div className="splash-inner-div">
                <div className="splash-left-div">
                    <div className="splash-header-div">
                        <h2>Hi, I'm</h2>
                        <h1 className="splash-name">Ann Kim</h1>
                        <p className="splash-descrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>                    
                </div>
                <div className="splash-right-div">
                    <Timeline />
                </div>
            </div>
        </div>
    )
}

export default Splash