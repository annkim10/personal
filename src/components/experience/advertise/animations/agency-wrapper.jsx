import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";

import UmDetails from "./um-wrapper";
import MecDetails from "./mec-wrapper";
import DraftDetails from "./draft-wrapper";



const Agencies = ( { visible }) => {


    const animate = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 100,
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            easing: easings.easeOutElastic
        }
    })
 
    return (
        <a.div style={animate} className="agency-outer-wrapper">
            <UmDetails />
            <MecDetails />
            <DraftDetails />
        </a.div>

    )

}

export default Agencies