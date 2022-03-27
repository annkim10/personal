import React, { useEffect, useState } from "react"
import NavLink, { navLinks } from "./nav-link"
import "./navbar.css"
import { AiOutlineMenu, AiFillCloseSquare} from "react-icons/ai"
import { useSpring, config, easings, animated as a } from "react-spring"

const NavBar = ( { mobile, visible } ) => {

    const [click, setClick] = useState(false)
    const [activeNavLinkId, setActiveNavLinkId] = useState('');
    
    const handleClick = () => setClick(true)
    
    const closeMenu = () => setClick(false)

    const handleMobileIcon = () => {
        if (mobile && !click) {
            return <AiOutlineMenu className="menu-icon" onClick={handleClick}/>
        } else if (mobile && click) {
            return <AiFillCloseSquare className="menu-icon" onClick={closeMenu}/>
        } else {
            return ""
        }
    }

    const down = useSpring({
        opacity: visible ? 1 : 0,
        // y: visible ? 0 : -150,
        // transform: visible ? 'translateY(50%)' : 'translateY(0%)',
        config: {
            mass: 5,
            tension: 2000,
            friction: 180,
            duration: 2000,
            easing: easings.easeInOutBack
        }
    })

    const animate = useSpring ({
        height: click ? '100%' : "0%",
        config: config.default,
    })


    return (
        <a.div className='navbar-outer-div' style={down} >
            <div className="navbar-inner-div-border">
                <div className="logo-div">
                    <NavLink 
                        name={'ANN'}
                        navLinkId={'logo'} 
                        scrollToId={'splash-container'} 
                        activeNavLinkId={activeNavLinkId}
                        setActiveNavLinkId={setActiveNavLinkId} 
                    />
                </div>
                <div className="mobile-menu-icon-div">
                    {handleMobileIcon()}
                </div>
                <div className={mobile && click ? "links-mobile-div" : "links-div"} >
                    <a.div className={mobile && click ? "links-inner-mobile-div" : "links-div"} style={animate}>
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
                            {/* {mobile ? <div onClick={closeMenu} id="nav-link">Close</div> : ""} */}
                    </a.div>
                </div>
            </div> 
        </a.div>    
    )

}

export default NavBar