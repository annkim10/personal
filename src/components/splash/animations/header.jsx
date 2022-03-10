import React from "react"
import { easings, useSpring, animated as a, config } from "react-spring";



const Header = () => {

    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animateUpBounce = useSpring({
        opacity: load ? 1 : 0,
        y: load ? 10 : 200, 
        fontWeight: load ? 200 : 0,
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1500,
            easing: easings.easeInOutQuart
        }
    })
 
    return (
        <a.div className="splash-top-wrapper" style={animateUpBounce} >
            <h1 className="splash-header">It's nice to meet you,</h1> 
            <h1 className="splash-header">I'm <span> Ann Kim.</span></h1>       
        </a.div>
    )
}

export default Header