import React from "react"
import "./advertise.css"
import line from "../../../images/line.svg"
import um from "../../../images/logos/um_logo.png"
import mec from "../../../images/logos/mec_logo.png"
import draft from "../../../images/logos/draft_logo.png"
import AgencyDetails from "./agency_details"
import { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"

const Advertise = () => {

    const [umDetails, setUmDetails] = useState(false)
    const [mecDetails, setMecDetails] = useState(false)
    const [draftDetails, setDraftDetails] = useState(false)

    const closeDetails = () => {
        if (umDetails) setUmDetails(false)
        else if (mecDetails) setMecDetails(false)
        else if (draftDetails) setDraftDetails(false)
        else return ""
    }
    

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
                    <div className="advertise-agency-wrapper" 
                        onClick={() => setUmDetails(true)}>
                        <img className="um-logo" src={um} />
                    </div>
                    <div className="advertise-agency-wrapper" 
                        onClick={() => setMecDetails(true)}>
                        <img className="mec-logo" src={mec} />
                    </div>
                    <div className="advertise-agency-wrapper" 
                        onClick={() => setDraftDetails(true)} >
                        <img className="draft-logo" src={draft} />
                    </div>
                    <AiFillCloseCircle 
                        onClick={closeDetails}
                        className={umDetails || mecDetails || draftDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
                    <AgencyDetails 
                        className={umDetails ? "agency-details-wrapper-active" : "agency-details-wrapper-inactive"} 
                        title={'manager'} 
                        brands={'heinz'} />
                    <AgencyDetails 
                        className={mecDetails ? "agency-details-wrapper-active" : "agency-details-wrapper-inactive"} 
                        title={'manager'} 
                        brands={'mec'} />
                    <AgencyDetails 
                        className={draftDetails ? "agency-details-wrapper-active" : "agency-details-wrapper-inactive"} 
                        title={'manager'} 
                        brands={'draftfcb'} />

                </div>
            </div>  
        </div>
    )
}


export default Advertise
