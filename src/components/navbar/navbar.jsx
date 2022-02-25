import React, { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [mobile, setMobile] = useState(false)

    const showMobileMenu = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    useEffect(() => {
        showMobileMenu();
        window.addEventListener('resize', showMobileMenu);
        // return window.removeEventListener('resize', showMobileMenu)     
    }, [])

    const handleClick = () => setClick(true)

    const closeMenu = () => setClick(false)

    console.log("click", click)

    return (
        <div className='navbar-outer-div' >
            <div className="navbar-inner-div">
                <div className="logo-div">
                    <Link className="logo" to="/">ANN KIM</Link>
                </div>
                {mobile ? <AiOutlineMenu className="menu-icon" onClick={handleClick}/> : ""}
                <div className={mobile && click ? "links-mobile-div" : "links-div"}>
                    {mobile ? <AiOutlineCloseCircle className="close-icon" onClick={closeMenu}/> : ""}
                    {mobile ?  <Link className="nav-link" onClick={closeMenu} to="/">HOME</Link> : ""}
                    <Link className="nav-link" onClick={closeMenu} to="/experience">EXPERIENCE</Link>
                    <Link className="nav-link" onClick={closeMenu} to="/about">ABOUT</Link>
                    <Link className="nav-link" onClick={closeMenu} to="/contact">CONTACT</Link>
                </div>
            </div> 
        </div>    
    )

}

export default Navbar