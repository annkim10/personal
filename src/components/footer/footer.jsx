import React from "react";
import "./footer.css"
import {FaGit, FaGithub, FaLinkedinIn, FiGithub} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer-outer-div">
            <div className="footer-inner-div">
                <div className="footer-left-div">
                    <h1>© 2022 by Ann Kim created with React</h1>
                </div>
                <div className="footer-right-div">
                    <ul>
                        <li><FaLinkedinIn/></li>
                        <li><FaGithub/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer