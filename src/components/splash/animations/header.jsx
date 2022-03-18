import React from "react"
import { useTrail, easings, useSpring, animated as a, config } from "react-spring";
import Name from "./name";



const Header = () => {

    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animate = useSpring({
        opacity: load ? 1 : 0,
        // transform: load ? 'translateY(0%)' : 'translateY(80%)',
        // y: load ? 10 : 800,
        fontWeight: load ? 200 : 0,
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1500,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <a.div className="splash-top-wrapper" style={animate} >
            <h1 className="splash-header">It's nice to meet you,</h1>
        </a.div>
    )
}

export default Header