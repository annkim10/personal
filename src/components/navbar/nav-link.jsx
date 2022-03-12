import React, { useContext  } from "react"
import { NavContext } from "./nav-context";



export const navLinks = [
    { navLinkId: 'ANN KIM', scrollToId: 'splash-container' },
    { navLinkId: 'Develop', scrollToId: 'developContainer' },
    { navLinkId: 'Market', scrollToId: 'marketContainer' },
    { navLinkId: 'Advertise', scrollToId: 'advertiseContainer' },
    { navLinkId: 'About', scrollToId: 'aboutContainer' },
    { navLinkId: 'Contact', scrollToId: 'contactContainer' },
]

const NavLink = ( { name, navLinkId, scrollToId, activeNavLinkId, setActiveNavLinkId }) => {

    // const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? `${scrollToId}-active-class` : ''}
			onClick={handleClick}
		>
			{name}
		</span>
	);

}

export default NavLink