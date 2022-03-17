import React, { useEffect, useState } from "react"
import NavLink, { navLinks } from "./nav-link"
import { Link } from "react-router-dom"
import "./navbar.css"
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"


const NavBar = ( ) => {

    const [click, setClick] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [activeNavLinkId, setActiveNavLinkId] = useState('');

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


    return (
        <div className='navbar-outer-div' >
            <div className="navbar-inner-div">
                <div className="logo-div">
                    <NavLink 
                        name={'Ann Kim'}
                        navLinkId={'logo'} 
                        scrollToId={'splash-container'} 
                        activeNavLinkId={activeNavLinkId}
                        setActiveNavLinkId={setActiveNavLinkId} 
                    />
                </div>
                {mobile ? <AiOutlineMenu className="menu-icon" onClick={handleClick}/> : ""}
                <div className={mobile && click ? "links-mobile-div" : "links-div"}>
                    <div className={mobile && click ? "links-inner-mobile-div" : "links-div"}>
                        {mobile ? <AiOutlineCloseCircle className="close-icon" onClick={closeMenu}/> : ""}
                        {mobile ? <NavLink 
                            name={'Home'}
                            navLinkId={'nav-link'} 
                            scrollToId={'splash-container'} 
                            activeNavLinkId={activeNavLinkId}
                            setActiveNavLinkId={setActiveNavLinkId} 
                            /> : ""}
                            <NavLink 
                                name={'Experience'}
                                navLinkId={'nav-link'} 
                                scrollToId={'timeline-container'} 
                                activeNavLinkId={activeNavLinkId}
                                setActiveNavLinkId={setActiveNavLinkId} 
                            />
                            <NavLink 
                                name={'About'}
                                navLinkId={'nav-link'} 
                                scrollToId={'about-container'} 
                                activeNavLinkId={activeNavLinkId}
                                setActiveNavLinkId={setActiveNavLinkId} 
                            />
                            <NavLink 
                                name={'Contact'}
                                navLinkId={'nav-link'} 
                                scrollToId={'contact-container'} 
                                activeNavLinkId={activeNavLinkId}
                                setActiveNavLinkId={setActiveNavLinkId} 
                            />
                    </div>
                </div>
            </div> 
        </div>    
    )

}

export default NavBar