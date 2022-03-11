import { config, easings, useSpring, useTrail, animated as a } from "react-spring";
import coke from '../../../../images/logos/coke.png'
import heinz from '../../../../images/logos/heinz.png'
import usps from '../../../../images/logos/usps.png'
import leejeans from '../../../../images/logos/leejeans.png'
import fisherprice from '../../../../images/logos/fisherprice.png'
import gallo from '../../../../images/logos/gallo.png'
import merck from '../../../../images/logos/merck.png'

const Logos = ( { visible }) => {

    const logos = [ coke, heinz, usps, leejeans, fisherprice, gallo, merck ]

    const trail = useTrail(logos.length, {
        opacity: visible ? 1 : 0,
        y: visible ? 10 : 200, 
        config: {
            mass: 1,
            tension: 170,
            friction: 26
        }
    })

    return (
        <ul className="advertise-brands">
            {trail.map((styles, idx) => {
                return (
                    <a.li key={idx} style={styles} className="advertise-brand-logo">
                        <img className="brand-logo" src={logos[idx]}/>
                    </a.li>
                )
            })}
        </ul>
    )
}

export default Logos