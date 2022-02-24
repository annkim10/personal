import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import { animateScroll as scroll } from "react-scroll"


const Navbar = () => {
    return (
        <div className="navbar-inner-div">
            <div className="logo-div">
                <Link className="logo" to="/">ANN KIM</Link>
            </div>
            <div className="links-div">
                <Link className="nav-link" to="/experience">EXPERIENCE</Link>
                <Link className="nav-link" to="/about">ABOUT</Link>
                <Link className="nav-link" to="/contact">CONTACT</Link>
            </div>
        </div>    
    )

}

export default Navbar