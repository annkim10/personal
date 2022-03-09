import React from "react"
import { useSpring, animated as a, config } from "react-spring";



const Header = () => {

    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animateDown = useSpring({
        opacity: load ? 1 : 0,
        marginTop: load ? 0 : -500, 
        config: config.slow
    })
 
    return (
        <a.div className="splash-top-wrapper" style={animateDown} >
            <h1 className="splash-header">It's nice to meet you,</h1> 
            <h1 className="splash-header">I'm <span> Ann Kim.</span></h1>       
        </a.div>
    )
}

export default Header