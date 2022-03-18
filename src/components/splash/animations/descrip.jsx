import React from "react"
import { useSpring, animated as a, config, easings } from "react-spring";


const Descrip = () => {

    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animate = useSpring({
        opacity: load ? 1 : 0,
        y: load ? 0 : 500, 
        // delay: 500,
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1500,
            easing: easings.easeInOutBack
        }
    })
 

    return (
        <a.div className="splash-descrip" style={animate} >
           <p>I'm a product manager, coder, & dog mom of two</p>    
        </a.div>
    )
}

export default Descrip