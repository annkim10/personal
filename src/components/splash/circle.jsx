import React, { useState, useEffect } from 'react'
import { useTrail, useSprings, useTransition, animated, config } from 'react-spring'
import img from "../../images/circle.svg"

const Circle = () => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true))
 
    const transitions = useTransition(mounted, {
        from: { transform: `translate3d(0, 0%, 0)` },
        enter: { transform: `translate3d(0, -180%, 0)` },
        leave: { transform: `translate3d(0, -650%, 0)` },
        config: config.molasses,
        delay: 500
    })


    return (  
        <>
            {transitions((style, item) => 
                item ? 
                <animated.div style={style}>
                    <img src={img} />
                </animated.div>
                : ""
            )}
        </>
    )
                    
}


export default Circle