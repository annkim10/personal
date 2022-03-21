import React, { useEffect, useState } from "react"
import NavLink, { navLinks } from "./nav-link"
import { Link } from "react-router-dom"
import "./navbar.css"
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"
import { useSpring, config, easings, animated as a } from "react-spring"

const NavBar = ( { visible } ) => {

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

    console.log("nav", mobile)

    useEffect(() => {
        showMobileMenu();
        window.addEventListener('resize', showMobileMenu);
        // return window.removeEventListener('resize', showMobileMenu)     
    }, [])

    const handleClick = () => setClick(true)
    
    const closeMenu = () => setClick(false)

    const down = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -50,
        // transform: visible ? 'translateY(50%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1000,
            easing: easings.easeInOutBack
        }
    })
 

    return (
        <a.div className='navbar-outer-div' style={down} >
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
                <div className="mobile-menu-icon-div">
                    {mobile ? <AiOutlineMenu className="menu-icon" onClick={handleClick}/> : ""}
                </div>
               
                <div className={mobile && click ? "links-mobile-div" : "links-div"}>
                    <div className={mobile && click ? "links-inner-mobile-div" : "links-div"}>
                        {/* {mobile ? <AiOutlineCloseCircle className="close-icon" onClick={closeMenu}/> : ""} */}
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
                                scrollToId={'advertise-container'} 
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
                            {mobile ? <div onClick={closeMenu} id="nav-link">Close</div> : ""}
                    </div>
                </div>
            </div> 
        </a.div>    
    )

}

export default NavBar