import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer-outer-div">
            <div className="footer-inner-div">
                <div className="footer-left-div">
                    <h1>© 2022 by Ann Kim created with React</h1>
                </div>
                <div className="footer-right-div">
                    <h1><span>EMAIL</span> ann.sun.kim@gmail.com</h1>
                    <h1><span>CALL</span> 646.884.3600</h1>
                    <h1><span>CONNECT</span> LinkedIn</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer