import React from "react"
import { useEffect } from "react"
import "./splash.css"
import headshot from "../../images/headshot.png"
import Timeline from "./timeline"


const Splash = () => {

    useEffect(() => window.scroll(0,0))

    return (
        <div className="splash-outer-div">
            <div className="splash-inner-div">
                <div className="copytag">© 2022 by Ann Kim created with React</div>
               <div className="splash-left-div ">
                    <img className="headshot-img" src={headshot} />
                    <h1 className="name-header">It's nice to meet you, <br/> I'm <span>Ann Kim</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
               </div>
               <div className="splash-right-div">

               </div>

            </div>
        </div>
    )
}

export default Splash