import React from "react"
import coke from '../../../images/logos/coke.png'
import heinz from '../../../images/logos/heinz.png'
import usps from '../../../images/logos/usps.png'
import leejeans from '../../../images/logos/leejeans.png'
import fisherprice from '../../../images/logos/fisherprice.png'
import gallo from '../../../images/logos/gallo.png'
import merck from '../../../images/logos/merck.png'

const Logos = () => {
    return (
         <ul className="advertise-brands">
            <li className="advertise-brand-logo">
                <img className="brand-logo"
                src={coke}/>
            </li>
            <li className="advertise-brand-logo">
                <img className="brand-logo"
                src={heinz}/>
            </li>
            <li className="advertise-brand-logo">
                <img className="brand-logo"
                src={usps}/>
            </li>
            <li className="advertise-brand-logo">
                <img className="leejeans-logo"
                src={leejeans}/>
            </li>
            <li className="advertise-brand-logo">
                <img className="brand-logo"
                src={fisherprice}/>
            </li>
            <li className="advertise-brand-logo">
                <img className="brand-logo"
                src={gallo}/>
            </li>
            <li className="advertise-brand-logo">
                <img className="brand-logo"
                src={merck}/>
            </li>
        </ul>
    )
}

export default Logos