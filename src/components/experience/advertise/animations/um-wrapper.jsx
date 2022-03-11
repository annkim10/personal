import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";

import um from "../../../../images/logos/um_logo.png"

import { AiFillCloseCircle } from "react-icons/ai"
import { BsFillSquareFill } from "react-icons/bs"



const UmDetails = ( { visible }) => {

    const [umDetails, setUmDetails] = useState(false)

    const animate = useSpring({
        height: umDetails ? 350 : 300,
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            duration: 1000,
            easing: easings.easeOutQuad
        }
    })
 
    return (
        <a.div className="agency-wrapper" style={animate} >
            <div className={ umDetails ? "um-wrapper-active" : "um-wrapper-inactive"}
                onClick={() => setUmDetails(true)}>
                <div className="agency-details-wrapper">
                    <h2 className="agency-name">Universal McCann</h2>
                    <p className="agency-time">JUL 2013 - OCT 2016</p>
                    <h1 className="agency-details-header">POSITIONS HELD</h1>
                    <ul>
                        <li className="agency-role-wrapper">
                            <BsFillSquareFill className="bullet-point" />
                            <h1>VP, Group Partner, <span>Coca-Cola</span></h1>
                        </li>
                        <li className="agency-role-wrapper">
                            <BsFillSquareFill className="bullet-point" />
                            <h1>Partner, <span>Coca-Cola & KraftHeinz</span></h1>
                        </li>
                        <li className="agency-role-wrapper">
                            <BsFillSquareFill className="bullet-point" />
                            <h1>Manager, <span>US Postal Service</span></h1>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="agency-logo-div">
                <img className="um-logo" src={um} />
            </div>
            <AiFillCloseCircle 
                onClick={() => setUmDetails(false)}
                className={umDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
        </a.div>
   
                    // <div className="agency-wrapper">
                    //     <div className={ draftDetails ? "draft-wrapper-active" : "draft-wrapper-inactive"}
                    //         onClick={() => setDraftDetails(true)}>
                    //         <div className="agency-details-wrapper">
                    //             <h2 className="agency-name">DraftFCB</h2>
                    //             <p className="agency-time">JUN 2010 - JUL 2011</p>
                    //             <h1 className="agency-details-header">POSITIONS HELD</h1>
                    //             <ul>
                    //                 <li className="agency-role-wrapper">
                    //                     <BsFillSquareFill className="bullet-point" />
                    //                     <h1>Associate <span>Merck</span></h1>
                    //                 </li>                                   
                    //             </ul>
                    //         </div>
                    //     </div>
                    //     <div className="agency-logo-div">
                    //         <img className="um-logo" src={draft} />
                    //     </div>
                    //     <AiFillCloseCircle 
                    //         onClick={() => setDraftDetails(false)}
                    //         className={ draftDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
                    // </div> */}

    )

}

export default UmDetails