import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";

import draft from "../../../../images/logos/draft_logo.png"

import { AiFillCloseCircle } from "react-icons/ai"
import { BsFillSquareFill } from "react-icons/bs"


const DraftDetails = ( { visible }) => {

    const [draftDetails, setDraftDetails] = useState(false)

    const animate = useSpring({
        height: draftDetails ? 350 : 200,
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            duration: 500,
            easing: easings.easeOutCubic
        }
    })
 
    return (
        <a.div className="agency-wrapper" style={animate} >
            <div className={ draftDetails ? "draft-wrapper-active" : "draft-wrapper-inactive" }
                onClick={() => setDraftDetails(true)}>
                <div className="agency-details-wrapper">
                    <h2 className="agency-name">DraftFCB</h2>
                    <p className="agency-time">JUN 2010 - JUL 2011</p>
                    <h1 className="agency-details-header">POSITIONS HELD</h1>
                    <ul>
                        <li className="agency-role-wrapper">
                            <BsFillSquareFill className="bullet-point" />
                            <h1>Associate <span>Merck</span></h1>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="agency-logo-div">
                <img className="um-logo" src={draft} />
            </div>
            <AiFillCloseCircle 
                onClick={() => setDraftDetails(false)}
                className={ draftDetails ? "agency-close-button-active" : "agency-close-button-inactive" }/>
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

export default DraftDetails