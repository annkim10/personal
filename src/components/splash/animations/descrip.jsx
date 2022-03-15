import React from "react"
import { useSpring, animated as a, config, easings } from "react-spring";


const Descrip = () => {

    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animate = useSpring({
        opacity: load ? 1 : 0,
  
        y: load ? 30 : 500, 
        config: {
            mass: 1,
            tension: 200,
            friction: 80,
            duration: 1500,
            easing: easings.easeOutQuad
        }
    })
 

    return (
        <a.div className="splash-descrip" style={animate} >
           <p>I'm a product manager, coder, & dog mom of two. 
               {/* <span> learning about the product.</span> */}
            </p>    
        </a.div>
    )
}

export default Descrip