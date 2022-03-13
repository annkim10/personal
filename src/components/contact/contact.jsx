import React from "react"
import "./contact.css"
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md"
import { FaLinkedinIn, FaGithub, FaRegFilePdf } from "react-icons/fa"

const Contact = () => {

    return (
        <div className="contact-outer-div" id="contact-container">
            <div className="contact-inner-div">
                <div className="contact-wrapper">
                    <div className="contact-header-div">
                        <h1 className="contact-header">I'd love to chat with you!</h1>
                    </div>
                    <div className="contact-info-wrapper">
                        <div className="contact-info-div">
                            <MdOutlineEmail className="contact-icon" />
                            <h1 className="contact">ann.sun.kim@gmail.com</h1>
                        </div>
                        <div className="contact-info-div">
                            <MdOutlinePhoneInTalk className="contact-icon" />
                            <h1 className="contact">646.884.3600</h1>
                        </div>
                        <div className="contact-info-div">
                            <FaRegFilePdf className="contact-icon" />
                            <a href="https://drive.google.com/file/d/1IwkLDUzsc7yL3jfRpFT_yTYMNKDksjgS/view?usp=sharing" target="_blank" className="contact-resume">Resume</a>
                        </div>
                    </div>
                    <div className="contact-links-wrapper">
                        <div className="footer-icon-wrapper">
                            <a href="https://www.linkedin.com/in/ann-kim" target="_blank">
                                <FaLinkedinIn className="footer-icon"/>
                            </a>
                        </div>
                        <div className="footer-icon-wrapper">
                            <a href="https://github.com/annkim10" target="_blank">
                                <FaGithub className="footer-icon"/>
                            </a>
                        </div>
                    </div>
                </div>      
            </div>    
        </div>
    )
}

export default Contact