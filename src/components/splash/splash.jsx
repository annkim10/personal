import React, { useEffect } from "react"
import { useSpring, animated as a, config } from "react-spring";
import "./splash.css"
import Timeline from "./timeline"

const Splash = () => {

    // useEffect(() => window.scroll(0,0))

    const [load, setLoad] = React.useState(false)

    useEffect(() => setLoad(true))

    const animateDown = useSpring({
        opacity: load ? 1 : 0,
        marginTop: load ? 0 : -500, 
        config: config.slow
    })

    console.log("load", load)


    return (
        <div className="splash-outer-div">
            <div className="splash-inner-div">
                <h1 className="copytag">© 2022 by Ann Kim created with React</h1>
                <div className="splash-top-div">
                    <a.div className="splash-top-wrapper" style={animateDown} >
                        <h1 className="splash-header">It's nice to meet you,</h1> 
                        <h1 className="splash-header">I'm <span> Ann Kim.</span></h1>
                        <p className="splash-descrip">I'm a product manager, coder, & dog lover. My career, thus far, has been learning about the product.</p>
                    </a.div>
                    
                </div>
                <div className="splash-bottom-div">
                   <Timeline />
                </div>
                
            </div>
        </div>
    )
}

export default Splash