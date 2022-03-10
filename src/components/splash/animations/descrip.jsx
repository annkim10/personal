import React from "react"
import { useSpring, animated as a, config, easings } from "react-spring";


const Descrip = () => {


    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animateUp= useSpring({
        opacity: load ? 1 : 0,
        // delay: 1500,
        y: load ? 40 : 500, 
        config: {
            mass: 1,
            tension: 200,
            friction: 80,
            duration: 2000,
            easing: easings.easeOutQuad
        }
    })
 

    return (
        <a.div className="splash-descrip" style={animateUp} >
           <p>I'm a product manager, coder, & dog lover. My career, thus far, has been learning about the product.</p>    
        </a.div>
    )
}

export default Descrip