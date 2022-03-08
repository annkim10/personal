import React from "react"
import "./advertise.css"
import line from "../../../images/line-white.svg"
import um from "../../../images/logos/um_logo.png"
import mec from "../../../images/logos/mec_logo.png"
import draft from "../../../images/logos/draft_logo.png"
import { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"

const Advertise = () => {

    const [umDetails, setUmDetails] = useState(false)
    const [mecDetails, setMecDetails] = useState(false)
    const [draftDetails, setDraftDetails] = useState(false)

    return (
        <div className='advertise-outer-div'>
            <div className='advertise-inner-div'>
                <div className='advertise-left-div'>
                    <h1 className='advertise-time'>JUN 2020 - OCT 2016</h1>
                    <img className='advertise-line' src={line} />
                    <div className='advertise-text-wrapper'>
                        <h1 className='advertise-header'>Learning to <span>advertise</span> the product</h1>
                        <p className='advertise-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="advertise-right-div">
                    <div className="agency-wrapper">
                        <div className={ umDetails ? "um-wrapper-active" : "um-wrapper-inactive"}
                            onClick={() => setUmDetails(true)}>
                            <div className="agency-details-wrapper">
                                {/* <img className="um-logo" src={um} /> */}
                                <h2 className="agency-name">Universal McCann</h2>
                                <h1 className="agency-details-header">POSITIONS HELD</h1>
                                <p className="agency-details">title</p>
                            </div>
                        </div>
                        <div className="agency-logo-div">
                            <img className="um-logo" src={um} />
                        </div>
                        <AiFillCloseCircle 
                            onClick={() => setUmDetails(false)}
                            className={umDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
                    </div>
                    <div className="agency-wrapper">
                        <div className={ mecDetails ? "mec-wrapper-active" : "mec-wrapper-inactive"}
                            onClick={() => setMecDetails(true)}>
                            <div className="agency-details-wrapper">
                                {/* <img className="um-logo" src={mec} /> */}
                                <h2 className="agency-name">MEC Global</h2>
                                <h1 className="agency-details-header">POSITIONS HELD</h1>
                                <p className="agency-details">title</p>
                            </div>
                        </div>
                        <div className="agency-logo-div">
                            <img className="um-logo" src={mec} />
                        </div>
                        <AiFillCloseCircle 
                            onClick={() => setMecDetails(false)}
                            className={ mecDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
                    </div>
                    <div className="agency-wrapper">
                        <div className={ draftDetails ? "draft-wrapper-active" : "draft-wrapper-inactive"}
                            onClick={() => setDraftDetails(true)}>
                            <div className="agency-details-wrapper">
                                {/* <img className="draft-logo" src={draft} /> */}
                                <h2 className="agency-name">DraftFCB</h2>
                                <h1 className="agency-details-header">POSITIONS HELD</h1>
                                <p className="agency-details">title</p>
                            </div>
                        </div>
                        <div className="agency-logo-div">
                            <img className="um-logo" src={draft} />
                        </div>
                        <AiFillCloseCircle 
                            onClick={() => setDraftDetails(false)}
                            className={ draftDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
                    </div>
                </div>
            </div>  
        </div>
    )
}


export default Advertise
