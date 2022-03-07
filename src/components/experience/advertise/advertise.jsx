import React from "react"
import "./advertise.css"
import line from "../../../images/line.svg"
import um from "../../../images/logos/um_logo.png"
import mec from "../../../images/logos/mec_logo.png"
import draft from "../../../images/logos/draft_logo.png"


const Advertise = () => {

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
                    <div className="advertise-agency-wrapper">
                        <img className="um-logo" src={um} />
                    </div>
                    <div className="advertise-agency-wrapper">
                        <img className="mec-logo" src={mec} />
                    </div>
                    <div className="advertise-agency-wrapper">
                        <img className="draft-logo" src={draft} />
                    </div>

                </div>
            </div>  
        </div>
    )
}


export default Advertise
