
import React, { useState } from 'react';

export const NavContext = React.createContext();

const NavProvider = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValues = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValues}>{children}</NavContext.Provider>
	);
};

export default NavProvider;