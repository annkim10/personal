import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";

import mec from "../../../../images/logos/mec_logo.png"

import { AiFillCloseCircle } from "react-icons/ai"
import { BsFillSquareFill } from "react-icons/bs"



const MecDetails = ( { visible }) => {

    const [mecDetails, setMecDetails] = useState(false)

    const animate = useSpring({
        height: mecDetails ? 350 : 300,
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            duration: 1000,
            easing: easings.easeOutCubic
        }
    })
 
    return (
        <a.div className="agency-wrapper" style={animate}>
            <div className={  mecDetails ? "mec-wrapper-active" : "mec-wrapper-inactive"}
                onClick={() => setMecDetails(true)}>
                <div className="agency-details-wrapper">
                    <h2 className="agency-name">MEC Global</h2>
                    <p className="agency-time">AUG 2011 - JUN 2013</p>
                    <h1 className="agency-details-header">POSITIONS HELD</h1>
                    <ul>
                        <li className="agency-role-wrapper">
                            <BsFillSquareFill className="bullet-point" />
                            <h1>Sr. Associate to Manager <span>Fisher Price, Lee Jeans, Gallo Wines</span></h1>
                        </li> 
                    </ul>
                </div>
            </div>
            <div className="agency-logo-div">
                <img className="um-logo" src={mec} />
            </div>
            <AiFillCloseCircle  
                onClick={() => setMecDetails(false)}
                className={ mecDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
        </a.div>

    )

}

export default MecDetails