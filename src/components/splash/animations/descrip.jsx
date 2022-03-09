import React from "react"
import { useSpring, animated as a, config } from "react-spring";


const Descrip = () => {


    const [load, setLoad] = React.useState(false)

    React.useEffect(() => setLoad(true))

    const animateDown = useSpring({
        opacity: load ? 1 : 0,
        marginTop: load ? 15 : -500, 
        config: config.slow
    })
 

    return (
        <a.div className="splash-descrip" style={animateDown} >
           <p>I'm a product manager, coder, & dog lover. My career, thus far, has been learning about the product.</p>    
        </a.div>
    )
}

export default Descrip