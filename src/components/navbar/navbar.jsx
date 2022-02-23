import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import { animateScroll as scroll } from "react-scroll"

const scrollTop = () => {
    scroll.scrollToTop()
}

const Navbar = () => {
    return (
        <div className="navbar-outer-div">
            <div className="navbar-inner-div">
                <div className="logo-div">
                    <a className="logo" onClick={scrollTop}>ANN KIM</a>
                </div>
                <div className="links-div">
                    <Link className="nav-link" to="/experience">EXPERIENCE</Link>
                    <Link className="nav-link" to="/about">ABOUT</Link>
                    <Link className="nav-link" to="/contact">CONTACT</Link>
                </div>
            </div>    
        </div>
    )

}

export default Navbar