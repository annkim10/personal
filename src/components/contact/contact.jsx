import React from "react"
import "./contact.css"
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md"

const Contact = () => {

    return (
        <div className="contact-outer-div">
            <div className="contact-inner-div">
                <div className="contact-wrapper">
                    <div className="contact-header-div">
                        <h1 className="contact-header">I'd love to chat with you!</h1>
                    </div>
                    <div className="contact-info-wrapper">
                        <div className="contact-email-div">
                            <MdOutlineEmail className="contact-icon" />
                            <h1 className="contact">ann.sun.kim@gmail.com</h1>
                        </div>
                        <div className="contact-call-div">
                            <MdOutlinePhoneInTalk className="contact-icon" />
                            <h1 className="contact">646.884.3600</h1>
                        </div>
                    </div>
                 
                </div>      
            </div>    
        </div>
    )
}

export default Contact