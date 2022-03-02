import React from "react"
import "./advertise.css"
import line from "../../images/line.svg"
const Advertise = () => {

    return (
        <div className='advertise-outer-div'>
            <div className='advertise-inner-div'>
               <h1 className='advertise-time'>OCT 2016 - SEP 2021</h1>
                <img className='advertise-line' src={line} />
                <div className='advertise-top-div'>
                    <div className='advertise-text-wrapper'>
                        <h1 className='advertise-header'>Learning to <span>market</span> the product</h1>
                        <p className='advertise-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}


export default Advertise
