import React from "react"
import { Transition, useTrail, easings, useSpring, animated as a, config } from "react-spring";



const Name = ( { visible }) => {

    const greeting = ['It\'s nice to meet you,']
    const name = ['I\'m', 'Ann', 'Kim']


    const trail1 = useTrail(name.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 500,
        height: visible ? 110 : 0,
        transform: visible ? 'translate3d(10px,10px,10px)' : 'translate3d(40px,40px,40px)',
        from: { opacity: 0, y: 500, height: 0 },
    })

    const trail2 = useTrail(greeting.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 500,
        height: visible ? 120 : 0,
        transform: visible ? 'translate3d(0px,0px,0px)' : 'translate3d(40px,40px,40px)',
        from: { opacity: 0, y: 500, height: 0 },
    })

    return (
    
        <div className="splash-header-wrapper">
            <div className="splash-header-greeting-wrapper">
                {trail2.map(({ height, ...rest }, idx) => (
                <a.div
                        key={greeting[idx]}
                        className={'splash-greeting-div'}
                        style={{ ...rest}}>
                        <a.div style={{ height }}>{greeting[idx]}</a.div>
                </a.div>
                ))}
            </div>
           <div className="splash-header-name-wrapper">
                {trail1.map(({ height, ...rest }, idx) => (
                    <a.div
                            key={name[idx]}
                            className={'splash-name-div'}
                            style={{ ...rest}}>
                            <a.div style={{ height }}>{name[idx]}</a.div>
                    </a.div>
                ))}
           </div>
        </div>
    )
}

export default Name